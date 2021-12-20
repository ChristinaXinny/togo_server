var mysql = require('mysql');
var dbconfig = require("../config/database");
var pool = mysql.createPool(dbconfig.mysql);



exports.showTicket = function(callback) {
    pool.getConnection(function(err, connection) {
        var sql = "SELECT * FROM t_ticket";
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            if (err) { 
                throw err; 
            } 
            console.log(result);
            callback(err,result);
            connection.release();
        })
    });
}




exports.FindTicketType = function(type,callback) {
    var sql = "SELECT * FROM t_ticket WHERE type = "+type;
    pool.getConnection(function(err, connection) {
        //定义查询语句
        connection.query(sql, function(err,result) {
            if (err) { 
                throw err; 
            } 
            console.log("Detail=Detail=Detail=Detail");
            console.log(result);
            // 释放连接
            callback(err, JSON.stringify(result));
            connection.release();
        })
    });
}