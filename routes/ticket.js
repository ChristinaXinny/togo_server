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
var ticketdb = require('../libs/db_ticket');



//  对方案表操作 ====================== ticket 表  ==============================
// 方案获取全部方案
router.get('/getAllTicket',function(req, res){
    ticketdb.showTicket(function(err, result){
        console.log("getAll-getAll-getAll-getAll");
        res.end(result);
    });
});




// 根据user id获取订单
router.get('/getTicketByType',function(req, res){
    var id = parseInt(req.query.type);
    console.log(id+"type-type-type-type");
    ticketdb.FindTicketType(id,function(err, result){
        res.end(result);
    });
});



module.exports = router;