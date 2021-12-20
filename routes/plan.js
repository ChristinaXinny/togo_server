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


var plandb = require('../libs/db_plan');




//  对方案表操作 ====================== plan 表  ==============================
// 方案获取全部方案
// http://localhost:8989/api/plan/getAllPlan
router.get('/getAllPlan', function (req, res) {
    plandb.showPlan(function (err, result) {
        console.log("getAllPlan-getAllPlan-getAllPlan-getAllPlan");
        if (err) {
            return "error";
        }
        res.end(result);
    });
});



// 方案增加方案
router.post('/addPlan', urlencodedParser, function (req, res) {
    console.log(req.body);
    console.log(req.body.name + "--name--addPlan-addPlan-addPlan-addPlan");
    var name = req.body.name;
    var money = req.body.money;
    var number = req.body.number;
    var image = req.body.image;
    // console.log(req);
    plandb.InsertPlan(name, money, number, image, function (err, result) {
        res.end(result);
    });
});


// 方案根据id更改信息
router.post('/updatePlanById', urlencodedParser, function (req, res) {
    console.log(req.body.name + "--name---changePlanById-changePlanById-changePlanById");
    var plan_id = req.body.plan_id;
    var name = req.body.name;
    var money = req.body.money;
    var number = req.body.number;
    var image = req.body.image;
    plandb.ChangePlan(plan_id, name, money, number, image, function (err, result) {
        res.end(result);
    });
});


// 方案根据id删除
router.post('/deleteById', urlencodedParser, function (req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.plan_id;
    plandb.deleteNews(id, function (err, result) {
        res.end(result);
    });
});


// 方案根据id获取
router.get('/getPlanById', function (req, res) {
    var id = parseInt(req.query.plan_id);
    console.log(id + "getPlanById-getPlanById-getPlanById-getPlanById");
    plandb.FindPlanType(id, function (err, result) {
        res.end(result);
    });
});



module.exports = router;