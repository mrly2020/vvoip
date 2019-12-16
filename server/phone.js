require('dotenv').config()
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();              // get an instance of the express Router

//build db connection
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database: process.env.DATABASE
});

connection.connect(function(err) {
  if (err) throw err;

  //console.log("Successful login mysql connection");
});

//test
router.get('/', function(req, res) {
    res.json({ message: 'phone service works!' });
});

//login with credentials, return name, number, contact key,
//id key all to be stored in session
router.post('/contacts', function (req, res) {
  var phone = req.body.phone;
  if (phone != null){
    var sql = `SELECT target_no, target_contact_key,
                      stored_name, call_made
               FROM contacts
               WHERE owner_no = `+phone+`;`;// AND stored_name IS NOT NULL;`;

    connection.query(sql, function (err, result) {
      if (err) throw err;
      else{
        res.statusCode = 200;
        res.json(result);
        res.send();
      }
    });
  }
});

router.post('/call_logs', function (req, res) {
  var phone = req.body.phone;
  if (phone != null){
    var sql = `SELECT call_logs.*, stored_name
               FROM call_logs
               INNER JOIN contacts
               ON contacts.owner_no = `+phone+`
               AND contacts.target_no = call_logs.target_no
               WHERE caller_no = `+phone+`

               UNION

               SELECT call_logs.*, stored_name
               FROM call_logs
               INNER JOIN contacts
               ON contacts.owner_no = `+phone+`
               AND contacts.target_no = call_logs.caller_no
               WHERE call_logs.target_no = `+phone+`;`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        else{
          res.statusCode = 200;
          res.json(result);
          res.send();
        }
    });
  }
});

console.log('     -phone service RUNNING');
module.exports = router;
