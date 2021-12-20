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





var guidedb = require('../libs/db_guide');




//  对guide表操作 ====================== guide 表  ==============================
// 获取全部guide
router.get('/getAllGuide', function (req, res) {
    guidedb.showGuide(function (err, result) {
        console.log("getAllGuide-getAllGuide-getAllGuide-getAllGuide");
        res.end(result);
    });
});



// guide增加
router.post('/addGuide', urlencodedParser, function (req, res) {
    console.log(req.body);
    console.log(req.body.company + "--company--addGuide-addGuide-addGuide-addGuide");
    var phone = req.body.phone;
    var nickname = req.body.nickname;
    var title = req.body.title;
    var content = req.body.content;
    var date = req.body.date;
    var hot = req.body.hot;
    var see = req.body.see;
    var reply = req.body.reply;
    var image = req.body.image;
    // console.log(req);
    guidedb.InsertGuide(phone, nickname, title, content, date, hot, see, reply, image, function (err, result) {
        res.end(result);
    });
});

// guide根据id更改信息
router.post('/updateGuideById', urlencodedParser, function (req, res) {
    console.log(req.body.company + "--company---changeGuideById-changeGuideById-changeGuideById");
    var guide_id = req.body.guide_id;
    var nickname = req.body.nickname;
    var reply = req.body.reply;
    var image = req.body.image;
    var hot = req.body.hot;
    var date = req.body.date;
    var see = req.body.see;
    var content = req.body.content;
    console.log(guide_id);
    console.log("updateGuideById-updateGuideById");
    guidedb.ChangeGuide(guide_id, nickname, content, reply, image, hot, date, see, function (err, result) {
        res.end(result);
    });
});


// guide根据id删除
router.post('/deleteById', urlencodedParser, function (req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.guide_id;
    guidedb.deleteGuide(id, function (err, result) {
        res.end(result);
    });
});



// 根据电话查询该用户全部的攻略
router.get('/getGuideByPhone', function (req, res) {
    var phone = parseInt(req.query.phone);
    console.log(phone + "getGuideById-getGuideById-getGuideById-getGuideById");
    guidedb.FindGuideType(phone, function (err, result) {
        res.end(result);
    });
});






module.exports = router;