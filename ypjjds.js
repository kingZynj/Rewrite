/*************************************
项目名称：音频剪辑大师
软件版本：1.6.2 Time：2023.8.18
下载地址：商店
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http:\/\/www\.tingniukeji\.com\/audioclip\/queryIosVip\? url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/ypjjds.js

[mitm]
hostname = www.tingniukeji.com


*************************************/

var originalData = {
  "msg": "获取ios用户信息",
  "data": {
    "isVIP": false
  },
  "code": 0
};

originalData.data.isVIP = true;
originalData.code = 0;

var modifiedData = JSON.stringify(originalData)
;

$done({
  body: modifiedData
});
