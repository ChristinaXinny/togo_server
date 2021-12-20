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

var roomdb = require('../libs/db_room');



//  对room表操作 ====================== room表 ==============================
// 获取全部room
router.get('/getAllRoom', function (req, res) {
    roomdb.showRoom(function (err, result) {
        console.log("getAllRoom-getAllRoom-getAllRoom-getAllRoom");
        res.end(result);
    });
});


// 增加
router.post('/addRoom', urlencodedParser, function (req, res) {
    console.log(req.body);
    console.log(req.body.type + " --name--addRoom-addRoom-addRoom-addRoom");
    var type = req.body.type;
    var money = req.body.money;
    var people = req.body.people;
    var count = req.body.count;
    var image = req.body.image;
    // console.log(req);
    roomdb.InsertRoom(type, money, people, count, image, function (err, result) {
        res.end(result);
    });
});

// 根据id更改信息
router.post('/updateRoomById', urlencodedParser, function (req, res) {
    console.log(req.body.room_name + "--name---changeRoomById-changeRoomById-changeRoomById");
    var room_id = req.body.room_id;
    var type = req.body.type;
    var money = req.body.money;
    var people = req.body.people;
    var count = req.body.count;
    var image = req.body.image;
    roomdb.ChangeRoom(room_id, type, money, people, count, image, function (err, result) {
        res.end(result);
    });
});

// 根据id删除room
router.post('/deleteById', urlencodedParser, function (req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.room_id;
    roomdb.deleteRoom(id, function (err, result) {
        res.end(result);
    });
});

// 根据id获取room
router.get('/getRoomById', function (req, res) {
    var id = parseInt(req.query.room_id);
    console.log(id + "getRoomById-getRoomById-getRoomById-getRoomById");
    roomdb.findRoomMoney(id, function (err, result) {
        res.end(result);
    });
});





module.exports = router;