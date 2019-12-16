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
    res.json({ message: 'login service works!' });
});

//login with credentials, return name, number, contact key,
//id key all to be stored in session
router.post('/', function (req, res) {
  var phone = req.body.phone;
  var pass = req.body.password;
  if (phone != null && pass != null){

    var sql = `SELECT user_login.phone_no, user_login.first_name,
                      user_login.last_name, user_keys.contact_key ,user_keys.id_key
               FROM user_login INNER JOIN user_keys
               ON user_login.phone_no = user_keys.phone_no
               WHERE user_login.phone_no = `+phone+` AND password = "`+pass+`";`;

    connection.query(sql, function (err, result) {
      if (err) throw err;

      else if (result.length!=1){
        res.statusCode = 200;
        res.json({
          errors: ['Incorrect Login']
        });
        res.send();
      }
      else{
        res.statusCode = 200;
        res.json(result[0]);
        res.send();
      }
    });
  }
})

console.log('     -login service RUNNING');
module.exports = router;
