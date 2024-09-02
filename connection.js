var mysql = require('mysql');


var pool = mysql.createPool({
  connectionLimit:10,
  host: " sql12.freemysqlhosting.net",
  user: "sql12729144",
  password: "JGP15VwDJq",
  database:"sql12729144"
});

pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});

module.exports = pool;
