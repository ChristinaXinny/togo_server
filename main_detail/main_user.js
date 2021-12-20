var express = require('express');
var app = express();

var userdb = require('./libs/db_user');
var bodyParser = require('body-parser');

// app.all('*',function(req,res,next){//跨域问题
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     next();
// });
//  解决跨域问题
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == 'OPTIONS') {
        /*让options请求快速返回*/
       res.sendStatus(200)
   } else {
       next()
   }
})

//创建application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });



//  对用户表操作 ====================== user表 ==============================
// 获取全部用户
app.get('/api/user/getAllUser',function(req, res){
    userdb.showAll(function(err, result){
        console.log("getAllUser-getAllUser-getAllUser-getAllUser");
        res.end(result);
    });
});

// 根据id获取user
app.get('/api/user/getUserById',function(req, res){
    var id = parseInt(req.query.user_id);
    console.log(id+"getUserById-getUserById-getUserById-getUserById");
    userdb.Detail(id,function(err, result){
        res.end(result);
    });
});

// 增加用户
app.post('/api/user/addUser', urlencodedParser ,function(req, res) {
    console.log(req.body);
    console.log(req.body.user_name+"--name--addUser-addUser-addUser-addUser");
    var user_name = req.body.user_name;
    var user_phone = req.body.user_phone;
    var user_password = req.body.user_password;
    var user_age = req.body.user_age;
    var user_city = req.body.user_city;
    // console.log(req);
    userdb.InsertNew(user_name,user_phone,user_password,user_age,user_city,function(err, result){
        res.end(result);
    });
});

// 根据id更改信息
app.post('/api/user/updateUserById', urlencodedParser ,function(req, res) {
    console.log(req.body.user_name+"--name---changeUserById-changeUserById-changeUserById");
    var user_id = req.body.user_id;
    var user_name = req.body.user_name;
    var user_phone = req.body.user_phone;
    var user_password = req.body.user_password;
    var user_age = req.body.user_age;
    var city = req.body.user_city;
    userdb.ChangeNew(user_id,user_name,user_phone,user_password,user_age,city,function(err, result){
        res.end(result);
    });
});

// 根据id删除user
app.post('/api/user/deleteById', urlencodedParser ,function(req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.user_id;
    userdb.deleteNews(id,function(err, result){
        res.end(result);
    });
});



//  对酒店表操作 ====================== hotel 表  ==============================
// 酒店获取全部酒店
app.get('/api/hotel/getAllHotel',function(req, res){
    userdb.showAll(function(err, result){
        console.log("getAllHotel-getAllHotel-getAllHotel-getAllHotel");
        res.end(result);
    });
});

// 酒店根据id获取user
app.get('/api/hotel/getHotelById',function(req, res){
    var id = parseInt(req.query.hotel_id);
    console.log(id+"getHotelById-getHotelById-getHotelById-getHotelById");
    userdb.Detail(id,function(err, result){
        res.end(result);
    });
});

// 酒店增加酒店
app.post('/api/hotel/addHotel', urlencodedParser ,function(req, res) {
    console.log(req.body);
    console.log(req.body.name+"--name--addHotel-addHotel-addHotel-addHotel");
    var name = req.body.name;
    var user_phone = req.body.user_phone;
    var user_password = req.body.user_password;
    var user_age = req.body.user_age;
    var user_city = req.body.user_city;
    // console.log(req);
    userdb.InsertNew(name,user_phone,user_password,user_age,user_city,function(err, result){
        res.end(result);
    });
});

// 酒店根据id更改信息
app.post('/api/hotel/updateHotelById', urlencodedParser ,function(req, res) {
    console.log(req.body.name+"--name---changeHotelById-changeHotelById-changeHotelById");
    var hotel_id = req.body.hotel_id;
    var name = req.body.name;
    var user_phone = req.body.user_phone;
    var user_password = req.body.user_password;
    var user_age = req.body.user_age;
    var city = req.body.user_city;
    userdb.ChangeNew(hotel_id,name,user_phone,user_password,user_age,city,function(err, result){
        res.end(result);
    });
});

// 酒店根据id删除user
app.post('/api/hotel/deleteById', urlencodedParser ,function(req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.hotel_id;
    userdb.deleteNews(id,function(err, result){
        res.end(result);
    });
});






var server = app.listen(8989,function(){
    var host = server.address().address;  //服务器地址
    var port = server.address().port;      //服务器端口号
    console.log("应用实例，访问地址：http://%s:%s",host, port);
});