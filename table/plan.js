//  对方案表操作 ====================== plan 表  ==============================
// 方案获取全部方案
app.get('/api/plan/getAllPlan',function(req, res){
    plandb.showPlan(function(err, result){
        console.log("getAllPlan-getAllPlan-getAllPlan-getAllPlan");
        res.end(result);
    });
});



// 方案增加方案
app.post('/api/plan/addPlan', urlencodedParser ,function(req, res) {
    console.log(req.body);
    console.log(req.body.name+"--name--addPlan-addPlan-addPlan-addPlan");
    var name = req.body.name;
    var money = req.body.money;
    var number = req.body.number;
    var image = req.body.image;
    // console.log(req);
    plandb.InsertPlan(name,money,number,image,function(err, result){
        res.end(result);
    });
});

// 方案根据id更改信息
app.post('/api/plan/updatePlanById', urlencodedParser ,function(req, res) {
    console.log(req.body.name+"--name---changePlanById-changePlanById-changePlanById");
    var plan_id = req.body.plan_id;
    var name = req.body.name;
    var money = req.body.money;
    var number = req.body.number;
    var image = req.body.image;
    plandb.ChangePlan(plan_id,name,money,number,image,function(err, result){
        res.end(result);
    });
});


// 方案根据id删除
app.post('/api/plan/deleteById', urlencodedParser ,function(req, res) {
    console.log("--id--deleteById-deleteById-deleteById");
    console.log(req.body);
    var id = req.body.plan_id;
    plandb.deleteNews(id,function(err, result){
        res.end(result);
    });
});


// 方案根据id获取
app.get('/api/plan/getPlanById',function(req, res){
    var id = parseInt(req.query.plan_id);
    console.log(id+"getPlanById-getPlanById-getPlanById-getPlanById");
    plandb.FindPlanType(id,function(err, result){
        res.end(result);
    });
});
