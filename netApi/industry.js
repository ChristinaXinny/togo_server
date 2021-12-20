//需要安装request模块
var request = require('request');
request.post({
url:'http://api.tianapi.com/travel/index',
   form:{
        key:'你的APIKEY',num:'10'
} 
},function(err,response,body ){
   console.log(body)
});