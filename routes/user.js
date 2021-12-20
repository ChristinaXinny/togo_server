
const express = require('express');
 
let router = express.Router();


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
router.use(bodyParser.urlencoded({
    extended: false
}))
router.use(bodyParser.json())



var userdb = require('../libs/db_user');


//  对用户表操作 ====================== user表 ==============================
// 获取全部用户
router.get('/getAllUser', function (req, res) {
    userdb.showUser(function (err, result) {
        console.log("getAllUser-getAllUser-getAllUser-getAllUser");
        res.end(result);
    });
});


// 增加用户
router.post('/addUser', urlencodedParser, function (req, res) {
    console.log(req.body);
    console.log(req.body.user_name + "--name--addUser-addUser-addUser-addUser");
    var user_name = req.body.user_name;
    var user_phone = req.body.user_phone;
    var user_password = req.body.user_password;
    var user_age = req.body.user_age;
    var user_city = req.body.user_city;
    // console.log(req);
    userdb.InsertUser(user_name, user_phone, user_password, user_age, user_city, function (err, result) {
        res.end(result);
    });
});


// 根据id更改信息
router.post('/updateUserById', urlencodedParser, function (req, res) {
    console.log(req.body.user_name + "--name---changeUserById-changeUserById-changeUserById");
    var user_id = req.body.user_id;
    var user_name = req.body.user_name;
    var user_phone = req.body.user_phone;
    var user_password = req.body.user_password;
    var user_age = req.body.user_age;
    var user_city = req.body.user_city;
    userdb.ChangeUser(user_id, user_name, user_phone, user_password, user_age, user_city, function (err, result) {
        res.end(result);
    });
});



// 根据id删除user
router.post('/deleteById', urlencodedParser, function (req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.user_id;
    userdb.deleteUser(id, function (err, result) {
        res.end(result);
    });
});

// 根据id获取user
router.get('/getUserById', function (req, res) {
    var id = parseInt(req.query.user_id);
    console.log(id + "getUserById-getUserById-getUserById-getUserById");
    userdb.findUserName(id, function (err, result) {
        res.end(result);
    });
});




// 根据phone更改信息【无id】
router.post('/updateUserByPhone', urlencodedParser, function (req, res) {
    console.log(req.body);
    console.log(req.body.user_name + "--name---changeUserById-changeUserById-changeUserById");
    var user_name = req.body.user_name;
    var user_phone = req.body.user_phone;
    var user_password = req.body.user_password;
    var user_age = req.body.user_age;
    var user_city = req.body.user_city;
    var user_signature = req.body.user_signature;
    userdb.ChangeUserSign(user_name, user_phone, user_password, user_age, user_city, user_signature, function (err, result) {
        res.end(result);
    });
});




module.exports = router;