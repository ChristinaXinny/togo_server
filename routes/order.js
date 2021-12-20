
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


var orderdb = require('../libs/db_order');




//  对方案表操作 ====================== order 表  ==============================
// 方案获取全部方案
router.get('/getAllOrder', function (req, res) {
    var oder;
    var goodd;
    oder = orderdb.showOrder(function (err, result) {
        var ther = this;
        console.log("/api/order/getAllOrder");
        ther.oder = result;
        res.end(result);
    });
    
    // console.log("dddddddddd");
    // console.log(oder);
    // res.end(oder + goodd);


});



// 方案增加方案
router.post('/addOrder', urlencodedParser, function (req, res) {
    console.log(req.body);
    console.log(req.body.name + "--name--addorder-addorder-addorder-addorder");
    var inTime = req.body.inTime;
    var userName = req.body.userName;
    var payment = req.body.payment;
    var money = req.body.money;
    var state = req.body.state;
    var goods_id = req.body.goods_id;
    // order_id,inTime,userName,payment,money,state,goods_id
    orderdb.InsertOrder(inTime, userName, payment, money, state, goods_id, function (err, result) {
        res.end(result);
    });
});




// 根据user id获取订单
router.get('/getOrderById', function (req, res) {
    var id = parseInt(req.query.userId);
    console.log(id + "getorderById-getorderById-getorderById-getorderById");
    orderdb.FindOrderType(id, function (err, result) {
        res.end(result);
    });
});




module.exports = router;