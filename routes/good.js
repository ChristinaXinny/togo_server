const express = require('express');
// 利用路由
let router = express.Router();


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
router.use(bodyParser.urlencoded({
    extended: false
}))
router.use(bodyParser.json())


//  调用数据操作
var gooddb = require('../libs/db_good');



//  对方案表操作 ====================== good 表  ==============================
// 方案获取全部方案
router.get('/getAllGood',function(req, res){
    gooddb.showGood(function(err, result){
        console.log("getAll-getAll-getAll-getAll");
        res.end(result);
    });
});



// 方案增加方案
router.post('/addGood', urlencodedParser ,function(req, res) {
    console.log(req.body);
    console.log(req.body.name+"--name--add-add-add-add");
	var	name=req.body.name;
	var	price=req.body.price;
	var	number= req.body.number;
    gooddb.InsertGood( name,price,munber,function(err, result){
        res.end(result);
    });
});





// 根据user id获取订单
router.get('/getGoodById',function(req, res){
    var id = parseInt(req.query.good_id);
    console.log(id+"getById-getById-getById-getById");
    gooddb.FindGoodType(id,function(err, result){
        res.end(result);
    });
});



module.exports = router;