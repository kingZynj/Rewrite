/******************************
🧚🏻‍♂️项目名称：央视频 
🧚🏻‍♂️脚本作者：ios151
🧚🏻‍♂️软件版本: 2.8.2 无需登录
🧚🏻‍♂️注意事项：仅供学习 请勿传播售卖
***************************

[rewrite_local]

^http:\/\/playvv\.ysp\.cctv\.cn\/playvinfo\?.+$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js
#如果登录提示错误的话 手动屏蔽下面这条302
#&guid=\w+&app_version=([\d\.]+)&spadseg=(\d)&userid=(|\d+) url 302 &guid=26ae4779b2b411ec90a46c92bfd79530&app_version=$1&spadseg=$2&vuserid=209027229

#^https:\/\/m\.yangshipin\.cn\/static\/\w/\w+\/index\.html$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js
# > 央视频 去广告来源 @广告必须死
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/m8uTS50pt3DC0Xd6\.json url reject-200


[mitm]
hostname = playvv.ysp.cctv.cn, cdn.cmgadx.com

*******************************/
let headers = $request.headers;

headers['Cookie'] = 'openid=6d001307668ef63f3431ebc14478c604;openid=6d001307668ef63f3431ebc14478c604;openid=6d001307668ef63f3431ebc14478c604;openid=6d001307668ef63f3431ebc14478c604;access_token=4O1wB0Aue8rAVxkOEpA2cHuIMBzrZTdpCOFRPLp8WF0;access_token=4O1wB0Aue8rAVxkOEpA2cHuIMBzrZTdpCOFRPLp8WF0;access_token=4O1wB0Aue8rAVxkOEpA2cHuIMBzrZTdpCOFRPLp8WF0;access_token=4O1wB0Aue8rAVxkOEpA2cHuIMBzrZTdpCOFRPLp8WF0;refresh_token=4dddxOu-Wft2pAD3MrPXHWPfMUDpbg5OS0xOi3FhMMU;refresh_token=4dddxOu-Wft2pAD3MrPXHWPfMUDpbg5OS0xOi3FhMMU;refresh_token=4dddxOu-Wft2pAD3MrPXHWPfMUDpbg5OS0xOi3FhMMU;refresh_token=4dddxOu-Wft2pAD3MrPXHWPfMUDpbg5OS0xOi3FhMMU;vuserid=209027229;vuserid=209027229;vuserid=209027229;vuserid=209027229;vusession=Li553EfG16BNWRhKf9SsoFf5SXxGjLe_xQMoKZo9mD4;vusession=Li553EfG16BNWRhKf9SsoFf5SXxGjLe_xQMoKZo9mD4;vusession=Li553EfG16BNWRhKf9SsoFf5SXxGjLe_xQMoKZo9mD4;vusession=Li553EfG16BNWRhKf9SsoFf5SXxGjLe_xQMoKZo9mD4;vplatform=5;guid=26ae4779b2b411ec90a46c92bfd79530;vplatform=5;guid=26ae4779b2b411ec90a46c92bfd79530;vplatform=5;guid=26ae4779b2b411ec90a46c92bfd79530;vplatform=5;guid=26ae4779b2b411ec90a46c92bfd79530';

$done({headers});
