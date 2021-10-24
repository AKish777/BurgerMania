var mysql = require("mysql");

if(process.env.MONGODB_URL){
  connection = mysql.createConnection(process.env.MONGODB_URL);
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'burgers_db'
  })
}