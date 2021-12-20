const express = require('express');
 
let router = express.Router();
 
router.get('/', function (req, res) {
    res.send('订单首页');
});
 
router.get('/:id', function (req, res) {
    res.send(`${req.params.id} 订单信息`);
});
 
//导出该路由
module.exports = router;