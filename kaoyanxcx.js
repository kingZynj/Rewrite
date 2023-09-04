/******************************
微信小程序考研数学欧几里得


*******************************
[rewrite_local]
^https?:\/\/api\.tumukaoyan\.com\/api\/headimg_list\/GetListByAll url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/kaoyanxcx.js

^https?:\/\/api\.tumukaoyan\.com\/api\/wx\/CheckCodeV3.*? url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/kaoyanxcx.js


[mitm]
hostname = api.tumukaoyan.com
*******************************/
var body=$response.body;
body = body.replace(/"Timeout\":"\d+"/g,'"Timeout":"4092222286144"');
body = body.replace(/"VipEndTime\":".*?"/g,'"VipEndTime":"2099-09-05T00:24:46"');
body = body.replace(/"Subscribe\":\d+/g,'"Subscribe":1');
$done({body});
