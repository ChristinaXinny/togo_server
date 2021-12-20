
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


var hoteldb = require('../libs/db_hotel');





//  对酒店表操作 ====================== hotel 表  ==============================
// 酒店获取全部酒店
router.get('/getAllHotel', function (req, res) {
    hoteldb.showHotel(function (err, result) {
        console.log("getAllHotel-getAllHotel-getAllHotel-getAllHotel");
        res.end(result);
    });
});



// 酒店增加酒店
router.post('/addHotel', urlencodedParser, function (req, res) {
    console.log(req.body);
    console.log(req.body.name + "--name--addHotel-addHotel-addHotel-addHotel");
    var name = req.body.name;
    var phone = req.body.phone;
    var city = req.body.city;
    var address = req.body.address;
    var type = req.body.type;
    var image = req.body.image;
    var money = req.body.money;
    var number = req.body.number;
    // console.log(req);
   
    hoteldb.InsertHotel(name, phone, city, address, type,  image ,money ,number, function (err, result) {
        res.end(result);
    });
});

// 酒店根据id更改信息
router.post('/updateHotelById', urlencodedParser, function (req, res) {
    console.log(req.body.name + "--name---changeHotelById-changeHotelById-changeHotelById");
    var hotel_id = req.body.hotel_id;
    var name = req.body.name;
    var phone = req.body.phone;
    var city = req.body.city;
    var address = req.body.address;
    var type = req.body.type;
    hoteldb.ChangeHotel(hotel_id, name, phone, city, address, type, function (err, result) {
        res.end(result);
    });
});


// 酒店根据id删除
router.post('/deleteById', urlencodedParser, function (req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.hotel_id;
    hoteldb.deleteNews(id, function (err, result) {
        res.end(result);

    });
});


// 酒店根据id获取
router.get('/getHotelById', function (req, res) {
    var id = parseInt(req.query.hotel_id);
    console.log(id + "getHotelById-getHotelById-getHotelById-getHotelById");
    hoteldb.FindHotelType(id, function (err, result) {

        res.end(result);

    });
});


module.exports = router;