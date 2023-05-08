const mysql = require("mysql2");
const dotenv = require("dotenv");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "social_media_dashboard",
  timezone: "+00:00",
  multipleStatements: true,
});


connection.connect((err) =>{
    if(!err){
        console.log("db connected")
    }else{
        console.log("db NOT connected" ,process.env.DB_HOST , err )
    }
});

module.exports = connection;

