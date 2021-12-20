var mysql = require('mysql');
var dbconfig = require("../config/database");
var pool = mysql.createPool(dbconfig.mysql);



// 查询
exports.showAdmin = function(callback) {
    pool.getConnection(function(err, connection) {
        var sql = "SELECT * FROM adminuser";
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            if (err) { 
                throw err; 
            } 
            callback(err,result);
            connection.release();
        })
    });
};

// 添加
exports.InsertAdmin = function(admin_name,admin_password,admin_type , callback) {
    var  addSql = 'INSERT INTO adminuser(admin_name,admin_password,admin_type) VALUES(?,?,?)';
    var  addSqlParams = [admin_name,admin_password,admin_type];
    pool.getConnection(function(err, connection) {
        connection.query(addSql, addSqlParams, function(err,result) {
            if (err) { 
                throw err; 
            } 
            console.log(result);
            callback(err, JSON.stringify(result));
            connection.release();
        })
    });
};

//  更改
exports.ChangeAdmin = function(admin_id, admin_name,admin_password,admin_type ,  callback) {
    console.log(admin_id+" " +admin_name+" " + admin_password,admin_type +"ChangeNew=ChangeNew=CzhangeNew");
    var  updateSql = 'UPDATE adminuser SET admin_name=? ,admin_password=? ,admin_type=?   WHERE admin_id='+admin_id;
    var updateParams = [admin_name, admin_password, admin_type];
    pool.getConnection(function(err, connection) {
        connection.query(updateSql, updateParams, function(err,result) {
            if (err) { 
                throw err; 
            } 
            console.log('ChangeAdmin+ChangeAdmin+ChangeAdmin');
            console.log(result);
            callback(err, JSON.stringify(result));
            connection.release();
        })
    });
};





// 删除
exports.deleteAdmin = function(admin_id, callback) {
    pool.getConnection(function(err, connection) {
        // console.log(admin_id);
        var sql = "DELETE FROM adminuser WHERE admin_id=" + admin_id;
        connection.query(sql,function(err,result) {
            if (err) { 
                throw err; 
            } 
            result = JSON.stringify(result);
            console.log(result);
            callback(err,result);
            connection.release();
        })
    });
};





// 查询 获取password 通过id
exports.findPassById = function(admin_id, callback) {
    pool.getConnection(function(err, connection) {
        var sql = "SELECT admin_password FROM adminuser WHERE admin_id = "+admin_id;
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            if (err) { 
                throw err; 
            } 
            callback(err,result);
            connection.release();
        })
    });
};

