//  对酒店表操作 ====================== hotel 表  ==============================
// 酒店获取全部酒店
// http://localhost:8989/api/hotel/getAllHotel
app.get('/api/hotel/getAllHotel',function(req, res){
    hoteldb.showHotel(function(err, result){
        console.log("getAllHotel-getAllHotel-getAllHotel-getAllHotel");
        res.end(result);
    });
});



// 酒店增加酒店
app.post('/api/hotel/addHotel', urlencodedParser ,function(req, res) {
    console.log(req.body);
    console.log(req.body.name+"--name--addHotel-addHotel-addHotel-addHotel");
    var name = req.body.name;
    var phone = req.body.phone;
    var city = req.body.city;
    var address = req.body.address;
    var type = req.body.type;
    // console.log(req);
    hoteldb.InsertHotel(name,phone,city,address,type,function(err, result){
        res.end(result);
    });
});

// 酒店根据id更改信息
app.post('/api/hotel/updateHotelById', urlencodedParser ,function(req, res) {
    console.log(req.body.name+"--name---changeHotelById-changeHotelById-changeHotelById");
    var hotel_id = req.body.hotel_id;
    var name = req.body.name;
    var phone = req.body.phone;
    var city = req.body.city;
    var address = req.body.address;
    var type = req.body.type;
    hoteldb.ChangeHotel(hotel_id,name,phone,city,address,type,function(err, result){
        res.end(result);
    });
});


// 酒店根据id删除
app.post('/api/hotel/deleteById', urlencodedParser ,function(req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.hotel_id;
    hoteldb.deleteNews(id,function(err, result){
        res.end(result);
    });
});


// 酒店根据id获取
app.get('/api/hotel/getHotelById',function(req, res){
    var id = parseInt(req.query.hotel_id);
    console.log(id+"getHotelById-getHotelById-getHotelById-getHotelById");
    hoteldb.FindHotelType(id,function(err, result){
        res.end(result);
    });
});
