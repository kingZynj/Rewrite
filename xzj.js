/**

项目功能：小组件盒子 解锁永久VIP
下载地址：https://t.cn/A6oDCwJ6
Script Origin：@ios151 
Script author: @chxm1023


[rewrite_local]
^https:\/\/api\.widgetbox\.top\/v1\/users\/me url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/xzj.js
[mitm]

hostname = api.widgetbox.top

**/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.inviteCodeAmountLeft = 5;
chxm1023.isVip = true;
chxm1023.vipExpiredAt = "0";

body = JSON.stringify(chxm1023);

$done({body});








