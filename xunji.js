
/*
项目名称：训记
下载地址：商店 2023 8.31
脚本作者：@ios151
使用说明：仅供学习 禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖禁止售卖
特别说明：8.8号最新版修复bug,由于相关人员警告,不再更新
[rewrite_local]

^https?:\/\/xunji\.gxzckj\.com\/whole_user_info_v4.*? url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/xunji.js
#屏蔽更新
#^https:\/\/xunji\.gxzckj\.com\/after310\/ios url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/xunji_no_update.js
[mitm]
hostname = xunji.gxzckj.com
*/
var body = $response.body;
body = body.replace(
  /.+/g,
  '{"success":true,"res":{"vipDay":841152060,"name":"baby","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqricR9DvCOjfzeibopXicDDz1JkbHZHNianzRYGulLjRAymtyebckfLLN70TxCINjU9a6ZZIh3YdW71w/132","id":528079,"gender":"1"}}'
);
$done(body);
