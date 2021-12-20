var mysql = require('mysql');
var dbconfig = require("../config/database");
var pool = mysql.createPool(dbconfig.mysql);



exports.showOrder = function(callback) {
    pool.getConnection(function(err, connection) {
        var sql = "SELECT * FROM t_order";
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



exports.InsertOrder = function(inTime,userName,payment,money,state,goods_id,callback) {
    var  addSql2 = 'INSERT INTO t_order(inTime,userName,payment,money,state,goods_id) VALUES(?,?,?,?,?,?)';
    var  addSqlParams2 = [inTime,userName,payment,money,state,goods_id];
    console.log(addSqlParams2);
    pool.getConnection(function(err, connection) {
        connection.query(addSql2, addSqlParams2, function(err,result) {
            if (err) { 
                throw err; 
            } 
            console.log(result);
            callback(err, JSON.stringify(result));
            connection.release();
        })
    });
}


exports.FindOrderType = function(user_id,callback) {
    var sql = "SELECT * FROM t_order WHERE user_id = "+user_id;
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