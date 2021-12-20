//  对行程表操作 ====================== treffic 表  ==============================
// 行程获取全部行程
app.get('/api/traffic/getAllTraffic',function(req, res){
    trafficdb.showTraffic(function(err, result){
        console.log("getAllTraffic-getAllTraffic-getAllTraffic-getAllTraffic");
        res.end(result);
    });
});



// 行程增加行程
app.post('/api/traffic/addTraffic', urlencodedParser ,function(req, res) {
    console.log(req.body);
    console.log(req.body.company+"--company--addTraffic-addTraffic-addTraffic-addTraffic");
    var type = req.body.type;
    var company = req.body.company;
    var money = req.body.money;
    var start_position = req.body.start_position;
    var end_position = req.body.end_position;
    var start_time = req.body.start_time;
    var end_time = req.body.end_time;
    // console.log(req);
    trafficdb.InsertTraffic(type,company,money,start_position,end_position,start_time, end_time,function(err, result){
        res.end(result);
    });
});

// 行程根据id更改信息
app.post('/api/traffic/updateTrafficById', urlencodedParser ,function(req, res) {
    console.log(req.body.company+"--company---changeTrafficById-changeTrafficById-changeTrafficById");
    var traffic_id = req.body.traffic_id;
    var type = req.body.type;
    var company = req.body.company;
    var money = req.body.money;
    var start_position = req.body.start_position;
    var end_position = req.body.end_position;
    var start_time = req.body.start_time;
    var end_time = req.body.end_time;
    console.log(traffic_id);
    console.log("updateTrafficById-updateTrafficById");
    trafficdb.ChangeTraffic(traffic_id,type,company,money,start_position,end_position,start_time, end_time,function(err, result){
        res.end(result);
    });
});


// 行程根据id删除
app.post('/api/traffic/deleteById', urlencodedParser ,function(req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.traffic_id;
    trafficdb.deleteTraffic(id,function(err, result){
        res.end(result);
    });
});



// 行程根据id获取
app.get('/api/traffic/getTrafficById',function(req, res){
    var id = parseInt(req.query.traffic_id);
    console.log(id+"getTrafficById-getTrafficById-getTrafficById-getTrafficById");
    trafficdb.findTrafficType(id,function(err, result){
        res.end(result);
    });
});

