const express = require('express');
 
let router = express.Router();
 
router.get('/', function (req, res) {
    res.send('用户首页');
});
 
router.get('/:id', function (req, res) {
    res.send(`${req.params.id} 用户信息`);
});
 
router.get('/sss/dd', function (req, res) {
    res.send('ddd');
}); 


//导出该路由
module.exports = router;