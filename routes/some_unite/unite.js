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
var gooddb = require('../../libs/db_good');
var orderdb = require('../../libs/db_order');


router.get('/getOrderGood',function(req, res){
    var re;
    gooddb.showGood(function(err, result){
        console.log("getAll-getAll-getAll-getAll");
        re.
        res.end(result);
    });
    orderdb.showOrder(function(err, result){
        res.end(result);
    })
});






module.exports = router;



