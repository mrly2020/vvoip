var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database: process.env.DATABASE
});

connection.connect(function(err) { if (err) throw err; });

WebSocket = require('ws');
var wss = new WebSocket.Server({ port: 9001 });

window = global;
window.BlobBuilder = require("BlobBuilder");
BlobBuilder = window.BlobBuilder;
window.Blob = require('Blob');
Blob = window.Blob;
window.FileReader = require('FileReader');
window.File = require('File');
location = { protocol: 'http' };
BinaryPack = require("binary-pack");
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var path = require("path");
var wrtc = require("wrtc");
require('./client-peerjs-retooled/dist/peerjs.js');
RTCPeerConnection = wrtc.RTCPeerConnection;
RTCSessionDescription = wrtc.RTCSessionDescription;
RTCIceCandidate = wrtc.RTCIceCandidate;

var peer = new Peer('SSP', {host: 'localhost', port: 9000, path: '/operator'});
var conns = [];

wss.on('connection', function connection(ws) {
  ws.send('register');

  ws.on('message', function incoming(message) {
    message = JSON.parse(message);

    if (message.command == 'register'){
      conns.push({id: message.id, conn: ws});
    }

    else if (message.command == 'BYE'){
      let outgoing;
      conns.forEach(peerConn => {
        if (peerConn.id == message.hangUpOn){
          outgoing = peerConn.conn;
        }
      });
      if (outgoing != null){
        outgoing.send(JSON.stringify(message));
      }
    }

    else if (message.command == 'ACK<SEND_TO_VOICEMAIL>'){
      let outgoing;
      conns.forEach(peerConn => {
        if (peerConn.id == message.caller){
          outgoing = peerConn.conn;
        }
      });
      if (outgoing != null){
        outgoing.send(JSON.stringify(message));
        console.log('Caller connected to voicemail!');
      }
    }
  });
});

peer.on('open', function(id) {
});
peer.on('error', function(err) {
    console.log(err);
    if (err.type == 'peer-unavailable'){
    }
});

peer.on('call', (call) => {
  //pick up initial call
  call.answer(null); // Answer the call with null, no media within server
  let current = {origin: call.peer, target: call.metadata.target, initial: call, forward: null, full_circuit: null};

  console.log('Call from: ' + call.peer + ' to '+ call.metadata.target);

  let metadata = call.metadata;
  console.log(metadata);
  call.on('stream', (stream1) => {
    //check keys
    checkCallerKeys(metadata, call, current, stream1);
  });

  call.on('close', function(){
    //close all open calls

    if (current.forward && current.forward.open){
      current.forward.close();
    }
    if (current.full_circuit && current.full_circuit.open){
      current.forward.close();
    }
  });

  call.on('error', function(error){
  });
});

//checks the provided keys of the caller
function checkCallerKeys(metadata, call, current, stream1){
  var sql = `SELECT COUNT(*) from user_keys WHERE phone_no = `+metadata.caller+`
            AND id_key = "`+metadata.callerIdKey+`" AND contact_key = "`+metadata.callerContactKey+`";`;

  connection.query(sql, function (err, result) {
    if (err) throw err;

    if (result[0]['COUNT(*)'] != 1){
      //FALSE KEYS
      console.error("FALSE KEYS");
      let outgoing;
      conns.forEach(peerConn => {
        if (peerConn.id == call.peer){
          outgoing = peerConn.conn;
        }
      });
      if (outgoing != null){
        outgoing.send('false_key');
      }
    }
    else {
      console.log("Caller's provided keys: VERIFIED");
      if (metadata.callerContactKey == metadata.targetContactKey){
        console.log('Caller honestly not have target contact key, will route to voicemail.')
        checkIfFirstContact(metadata, call, current, stream1, false)
      }
      else{
        checkTargetKey(metadata, call, current, stream1);
      }
    }
  });
}

//checks the provided key for the target if non-reflexive
function checkTargetKey(metadata, call, current, stream1){
  var sql = `SELECT COUNT(*) from user_keys WHERE phone_no = `+metadata.target+`
            AND contact_key = "`+metadata.targetContactKey+`";`;

  connection.query(sql, function (err, result) {
    if (err) throw err;

    if (result[0]['COUNT(*)'] != 1){
      //FALSE KEYS
      console.error("FALSE KEYS");
      let outgoing;
      conns.forEach(peerConn => {
        if (peerConn.id == call.peer){
          outgoing = peerConn.conn;
        }
      });
      if (outgoing != null){
        outgoing.send('false_key');
      }
    }
    else {
      console.log("Caller's provided target contact key: VERIFIED");
      checkIfFirstContact(metadata, call, current, stream1, true);
    }
  });
}

//checks to make sure that rows exist between the users to maintain their state, if not, it enters them
function checkIfFirstContact(metadata, call, current, stream1, forwardable){
  console.log('KEYS VALIDATED');
  var sql = `SELECT COUNT(*)
            FROM contacts
            WHERE (owner_no = `+metadata.caller+` AND target_no = `+metadata.target+`)
            OR (owner_no = `+metadata.target+` AND target_no = `+metadata.caller+`);`;

  connection.query(sql, function (err, result) {
    if (err) throw err;

    if (result[0]['COUNT(*)'] != 2){
      enterContactRows(metadata, call, current, stream1, forwardable);
    }
    else if (result[0]['COUNT(*)'] == 2){
      shareCallerContactKey(metadata, call, current, stream1, forwardable);
    }
  });
}

function enterContactRows(metadata, call, current, stream1, forwardable){
  var sql = `INSERT INTO contacts VALUES (`+metadata.caller+`, `+metadata.target+`, NULL, NULL, false);`;
  var sql2 = `INSERT INTO contacts VALUES (`+metadata.target+`, `+metadata.caller+`, NULL, NULL, false);`;

  connection.query(sql, function (err, result) {
    if (err) throw err;

    connection.query(sql2, function (err, result) {
      if (err) throw err;
      shareCallerContactKey(metadata, call, current, stream1, forwardable);
    });
  });
}

//shares the callers contact key with the user
function shareCallerContactKey(metadata, call, current, stream1, forwardable){
  var sql = `UPDATE contacts SET call_made = true
          WHERE owner_no = `+metadata.caller+` AND target_no = `+metadata.target+`;`;

  connection.query(sql, function (err, result) { if (err) throw err; });

  sql = `UPDATE contacts SET target_contact_key = '`+metadata.callerContactKey+`'
          WHERE owner_no = `+metadata.target+` AND target_no = `+metadata.caller+`;`;

  connection.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Caller's contact key shared with target.")
    //forward call if contact key is non-reflexive
    if (forwardable == true){

      var date = new Date();
      var sql = 'INSERT INTO call_logs VALUES ('+call.peer+', '+call.metadata.target+', "'+call.metadata.cid+'", true, ';
      sql += '"'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'", "'+date.toTimeString().substring(0, 8)+'", NULL);';
      connection.query(sql, function (err, result) { if (err) throw err; });

      LUF_LRF(stream1, metadata, current, date);
    }

    //deliver send_to_voicemail message if we are honest about not knowing their key
    else {
      //create call log
      var date = new Date();
      var sql = 'INSERT INTO call_logs VALUES ('+call.peer+', '+call.metadata.target+', "'+call.metadata.cid+'", true, ';
      sql += '"'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'", "'+date.toTimeString().substring(0, 8)+'", NULL);';
      connection.query(sql, function (err, result) { if (err) throw err; });

      let outgoing;
      conns.forEach(peerConn => {
        if (peerConn.id == call.peer){
          outgoing = peerConn.conn;
        }
      });
      if (outgoing != null){
        outgoing.send(JSON.stringify({command: 'ACK<SEND_TO_VOICEMAIL>', caller: call.peer}));
        console.log('Caller connected to voicemail!');
      }
    }
  });
}

//forwards the call to the end user if proper key is held
function LUF_LRF(stream1, metadata, current, date){

  let trimmedData = {
    command: metadata.command,
    cid: metadata.cid,
    caller: metadata.caller,
    target: metadata.target
  };
  let proxyCall = peer.call(metadata.target, stream1, {metadata: trimmedData});
  current.forward = proxyCall;

  proxyCall.on('stream', (stream2) => {
    //return target stream to caller
    console.log('Call answered!');
    fullCircuit(stream2, trimmedData, current, date);
  });

  proxyCall.on('close', function(){
    //close all open calls
    if (current.initial && current.initial.open){
      current.initial.close();
    }
    if (current.full_circuit && current.full_circuit.open){
      current.forward.close();
    }
  });

  proxyCall.on('error', (error) => {
  });
}

//relays the target user's data stream back to the call originator
function fullCircuit(stream2, metadata, current, date){
  metadata.status = 'full_circuit';
  let finalCall = peer.call(metadata.caller, stream2, {metadata: metadata});
  current.full_circuit = finalCall;

  finalCall.on('stream', (copy) => {
    //copy of original stream is meaningless, needed only to mark as 'open'
    var sql = 'UPDATE call_logs SET missed = false WHERE caller_no = '+metadata.caller+' AND target_no = '+metadata.target;
    sql += ' AND start = "'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'" AND start_time = "'+date.toTimeString().substring(0, 8)+'";';

    connection.query(sql, function (err, result) { if (err) throw err; });
  });

  finalCall.on('close', function(){
    //close all open calls
    if (current.initial && current.initial.open){
      current.initial.close();
    }
    if (current.forward && current.forward.open){
      current.forward.close();
    }
  });

  finalCall.on('error', (error) => {
  });
}
