var express = require('express');
var request = require('request');

var app = express();






// var guidedb = require('./libs/db_guide');
// var admindb = require('./libs/db_admin');
// var gooddb = require('./libs/db_good');


var bodyParser = require('body-parser');


//  解决跨域问题
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == 'OPTIONS') {
        /*让options请求快速返回*/
        res.sendStatus(200)
    } else {
        next()
    }
})


//创建application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())





//添加两个路由到应用上
app.use('/api/admin', require('./routes/admin'));
app.use('/api/good', require('./routes/good'));
app.use('/api/guide', require('./routes/guide'));
app.use('/api/hotel', require('./routes/hotel'));
app.use('/api/order', require('./routes/order'));
app.use('/api/plan', require('./routes/plan'));
app.use('/api/room', require('./routes/room'));
app.use('/api/ticket', require('./routes/ticket'));
app.use('/api/treffic', require('./routes/treffic'));
app.use('/api/user', require('./routes/user'));


app.use('/api/unite', require('./routes/some_unite/unite'))





app.get('/api/public/getTravel', function (req, res) {
    request.post({
        url: 'http://api.tianapi.com/travel/index',
        form: {
            key: 'b07ac83e4cd1e2407f8c4f506ae13104',
            num: '10'
        }
    }, function (err, response, body) {
        console.log(body);
        res.end(body);
    });
});








var server = app.listen(8989, function () {
    var host = server.address().address; //服务器地址
    var port = server.address().port; //服务器端口号
    console.log("应用实例，访问地址：http://%s:%s", host, port);
});