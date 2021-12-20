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


var admindb = require('../libs/db_admin');


//  对用户表操作 ====================== admin表 ==============================
// 获取全部用户
router.get('/getAllAdmin', function (req, res) {
    var dd;
    admindb.showAdmin(function (err, result) {
        console.log("getAllAdmin-getAllAdmin-getAllAdmin-getAllAdmin");
        res.end(result);
        dd =result; 
    });
    // res.end(dd);
    
});


// 增加用户
router.post('/addAdmin', urlencodedParser, function (req, res) {
    console.log(req.body);
    console.log(req.body.admin_name + "--name--addAdmin-addAdmin-addAdmin-addAdmin");
    var admin_name = req.body.admin_name;
    var admin_password = req.body.admin_password;
    var admin_type = req.body.admin_type;
    // console.log(req);
    admindb.InsertAdmin(admin_name, admin_password, admin_type, function (err, result) {
        res.end(result);
    });
});


// 根据id更改信息
router.post('/updateAdminById', urlencodedParser, function (req, res) {
    console.log(req.body.admin_name + "--name---changeAdminById-changeAdminById-changeAdminById");
    var admin_id = req.body.admin_id;
    var admin_name = req.body.admin_name;
    var admin_password = req.body.admin_password;
    admindb.ChangeAdmin(admin_id, admin_name, admin_password, function (err, result) {
        res.end(result);
    });
});



// 根据id删除admin
router.post('/deleteById', urlencodedParser, function (req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.admin_id;
    admindb.deleteAdmin(id, function (err, result) {
        res.end(result);
    });
});




// 获取password 通过id
router.get('/getPassById', function (req, res) {
    var id = parseInt(req.query.admin_id);
    console.log(id + "getAllAdmin-getAllAdmin-getAllAdmin-getAllAdmin");
    admindb.findPassById(id, function (err, result) {
        res.end(result);
    });
});





module.exports = router;