require('dotenv').config();
import express from 'express';
var app = express();
var bodyParser = require('body-parser');

/*---------------------PEER(SERVER) OVERHEAD----------------------*/
var ExpressPeerServer = require('peer').ExpressPeerServer;
/*----------------------------------------------------------------*/

app.get('/', function(req, res, next) { res.send('Hello peers!'); });
var server = app.listen(process.env.JSSERVER_PORT || 9000);
var options = {
    debug: false
}
var peerServer = ExpressPeerServer(server, options);

peerServer.on('connection', function(id) {
  console.log('JOINED: '+id);
});
peerServer.on('disconnect', function(id) {
  //console.log('LEFT:   '+id);
});

app.use('/operator', peerServer);
require('./ISP');

module.exports = peerServer;
