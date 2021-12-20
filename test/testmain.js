const express = require('express');
let app = express();
app.listen(8899);
 
//添加两个路由到应用上
app.use('/users', require('./droutesss/users'));
app.use('/order', require('./droutesss/order'));
 
//404判断
app.use(function (req, res) {
    res.send('404 not found');
});