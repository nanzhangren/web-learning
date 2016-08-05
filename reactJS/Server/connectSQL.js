/**
 * Created by ZeroZhang on 8/5/2016.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mnb098',
    database: 'userinfo'
});

connection.connect(function (err) {
    if (err) {
        console.log('[connect start] - :' + err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

connection.query('select * from userinfo.user_table', function (err, rows, fields) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('The solution is: ', rows[0].homeNumber);
});

connection.end(function (err) {
    if (err) {
        return;
    }
    console.log('[connection end] succeed!');
});