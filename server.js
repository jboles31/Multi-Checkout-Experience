const express = require('express');
// const mysql = require('mysql');

server = express();

server.use(express.static('public'));

// var connection = mysql.createConnection({
//   user : 'student',
//   password : 'student',
//   database: 'users'
// });

// connection.connect(function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId)
// })

server.listen(3000, () => {
    console.log('listening at port 3000')
})