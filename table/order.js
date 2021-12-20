//  对方案表操作 ====================== order 表  ==============================
// 方案获取全部方案
app.get('/api/order/getAllOrder',function(req, res){
    orderdb.showOrder(function(err, result){
        console.log("getAllorder-getAllorder-getAllorder-getAllorder");
        res.end(result);
    });
});



// 方案增加方案
app.post('/api/order/addOrder', urlencodedParser ,function(req, res) {
    console.log(req.body);
    console.log(req.body.name+"--name--addorder-addorder-addorder-addorder");
	var	inTime=req.body.inTime;
	var	userName=req.body.userName;
	var	payment= req.body.payment;
	var	money=req.body.money;
	var	state=req.body.state;
	var	goods_id=req.body.goods_id;
    // order_id,inTime,userName,payment,money,state,goods_id
    orderdb.InsertOrder( inTime,userName,payment,money,state,goods_id,function(err, result){
        res.end(result);
    });
});





// 根据user id获取订单
app.get('/api/order/getOrderById',function(req, res){
    var id = parseInt(req.query.order_id);
    console.log(id+"getorderById-getorderById-getorderById-getorderById");
    orderdb.FindOrderType(id,function(err, result){
        res.end(result);
    });
});
