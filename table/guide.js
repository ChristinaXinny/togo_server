//  对guide表操作 ====================== guide 表  ==============================
// 获取全部guide
app.get('/api/guide/getAllGuide',function(req, res){
    guidedb.showGuide(function(err, result){
        console.log("getAllGuide-getAllGuide-getAllGuide-getAllGuide");
        res.end(result);
    });
});



// guide增加
app.post('/api/guide/addGuide', urlencodedParser ,function(req, res) {
    console.log(req.body);
    console.log(req.body.company+"--company--addGuide-addGuide-addGuide-addGuide");
    var nickname = req.body.nickname;
    var reply = req.body.reply;
    var image = req.body.image;
    var hot = req.body.hot;
    var date = req.body.date;
    var see = req.body.see;
    var content = req.body.content;
    // console.log(req);
    guidedb.InsertGuide(nickname,content,reply,image,hot,date,see,function(err, result){
        res.end(result);
    });
});

// guide根据id更改信息
app.post('/api/guide/updateGuideById', urlencodedParser ,function(req, res) {
    console.log(req.body.company+"--company---changeGuideById-changeGuideById-changeGuideById");
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
    guidedb.ChangeGuide(guide_id,nickname,content,reply,image,hot,date,see,function(err, result){
        res.end(result);
    });
});


// guide根据id删除
app.post('/api/guide/deleteById', urlencodedParser ,function(req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.guide_id;
    guidedb.deleteGuide(id,function(err, result){
        res.end(result);
    });
});



// guide根据id获取
app.get('/api/guide/getGuideById',function(req, res){
    var id = parseInt(req.query.guide_id);
    console.log(id+"getGuideById-getGuideById-getGuideById-getGuideById");
    guidedb.findGuideType(id,function(err, result){
        res.end(result);
    });
});
