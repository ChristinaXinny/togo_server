

//  对room表操作 ====================== room表 ==============================
// 获取全部room
app.get('/api/room/getAllRoom',function(req, res){
    roomdb.showRoom(function(err, result){
        console.log("getAllRoom-getAllRoom-getAllRoom-getAllRoom");
        res.end(result);
    });
});


// 增加
app.post('/api/room/addRoom', urlencodedParser ,function(req, res) {
    console.log(req.body);
    console.log(req.body.type+" --name--addRoom-addRoom-addRoom-addRoom");
    var type= req.body.type;
    var money = req.body.money;
    var people= req.body.people;
    var count= req.body.count;
    var image = req.body.image;
    // console.log(req);
    roomdb.InsertRoom(type,money,people,count, image,function(err, result){
        res.end(result);
    });
});

// 根据id更改信息
app.post('/api/room/updateRoomById', urlencodedParser ,function(req, res) {
    console.log(req.body.room_name+"--name---changeRoomById-changeRoomById-changeRoomById");
    var room_id = req.body.room_id;
    var type= req.body.type;
    var money = req.body.money;
    var people= req.body.people;
    var count= req.body.count;
    var image = req.body.image;
    roomdb.ChangeRoom(room_id,type,money,people,count,image,function(err, result){
        res.end(result);
    });
});

// 根据id删除room
app.post('/api/room/deleteById', urlencodedParser ,function(req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.room_id;
    roomdb.deleteRoom(id,function(err, result){
        res.end(result);
    });
});

// 根据id获取room
app.get('/api/room/getRoomById',function(req, res){
    var id = parseInt(req.query.room_id);
    console.log(id+"getRoomById-getRoomById-getRoomById-getRoomById");
    roomdb.findRoomMoney(id,function(err, result){
        res.end(result);
    });
});
