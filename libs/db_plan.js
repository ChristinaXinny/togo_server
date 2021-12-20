var mysql = require('mysql');
var dbconfig = require("../config/database");
var pool = mysql.createPool(dbconfig.mysql);



exports.showPlan = function(callback) {
    pool.getConnection(function(err, connection) {
      //定义查询语句
        var sql = "SELECT * FROM t_plan";
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            
            callback(err,result);
            if (err) { 
                throw err; 
            } 
            connection.release();
        })
    });
}



exports.InsertPlan = function(name, money,number,image, callback) {
    var  addSql2 = 'INSERT INTO t_plan(name, money,number,image) VALUES(?,?,?,?)';
    var  addSqlParams2 = [name, money,number,image];
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

exports.ChangePlan = function(plan_id, name, money,number,image, callback) {
    console.log(plan_id+" " +name+" " +money+ " " +number+ " " +image+" ChangeNew=ChangeNew=CzhangeNew");
    var  updateSql = 'UPDATE t_plan SET name=?, money=?, number=?, image=? WHERE plan_id='+plan_id;
    var updateParams = [name, money, number, image];
    pool.getConnection(function(err, connection) {
       
        connection.query(updateSql, updateParams, function(err,result) {
            if (err) { 
                throw err; 
            } 
            console.log('query+query+query');
            console.log(result);
            callback(err, JSON.stringify(result));
            connection.release();
        })
    });
}

exports.deleteNews = function(plan_id, callback) {
    pool.getConnection(function(err, connection) {
      //定义查询语句
        // console.log(user_id);
        var sql = "DELETE FROM t_plan WHERE plan_id=" + plan_id;
        connection.query(sql,function(err,result) {
            if (err) { 
                throw err; 
            } 
            result = JSON.stringify(result);
            console.log(result);
            // 释放连接
            callback(err,result);
            connection.release();
        })
    });
}



exports.FindPlanType = function(plan_id,callback) {
    var sql = "SELECT type FROM t_plan WHERE plan_id = "+plan_id;
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