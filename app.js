require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
var ExpressPeerServer = require('peer').ExpressPeerServer;

var clientPort = process.env.CLIENT_PORT || 8081;        // set our port
var serverPort = process.env.SERVER_PORT || 8080;        // set our port

const app = express()
app.use(express.static(path.join('./', 'dist/VVOIP')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/VVOIP/index.html'));
});

app.listen(clientPort, () => console.log('Example app listening on port '+ clientPort + '!'))

//SERVER SET UP - bodyParser for interpretting POST
const server = express()
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to the VVOIP server api!' });
});
server.use(express.static(path.join('./', 'server/')), router);


//LOGIN SERVICE
var loginRouter = require('./server/login.js');
server.use('/login', loginRouter);


//PHONE SERVICE
var phoneRouter = require('./server/phone.js');
server.use('/phone', phoneRouter);

//PEERJS ROUTER: 9000
var peerJSRouter = require('./server/peerStart.js');
if (peerJSRouter != null){
  console.log('PeerJS SERVER on 9000!')
}

var pjs = server.listen(serverPort, () => console.log('Server RESTful API on '+ serverPort +'!'));
