/*************************************

项目名称：账本合集
软件版本：截止2023.9.7最新版
下载地址：yoyo手账 https://is.gd/ko2CKP
下载地址：bubu手账 https://is.gd/ct0H6d
下载地址：卡卡手账 https://is.gd/XNHXGk
下载地址：猫咪手账 https://is.gd/BKK3dy
下载地址：恋恋手账 https://is.gd/sTVJED
下载地址：人生笔记 https://is.gd/pKDlNG
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Shouzhangheji.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var anni = {};
var anni01 = JSON.parse(typeof $response != "undefined" && $response.body || null);
var headers = {};
for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
  }
}
var UA = $request.headers['user-agent'];
var uaProductMapping = {
  'MomentShouZhang': {product_id: 'xichaoshouzhangQuarterlyPlus'},
  'XinQingRiJi': {product_id: 'zhiwenshouzhangQuarterlyPlus'},
  'MoMoShouZhang': {product_id: 'shunchangshouzhangQuarterlyPlus'},
  'BuBuSZ': {product_id: 'quaVersion'},
  'LingLongShouZ': {product_id: 'zhenwushouzhangPlusVersion'},
  'Dart': {product_id: 'xyz.iofree.lifelog.pro.yearly'},

};
var receipt = {
  "quantity": "1",
  "purchase_date_ms": "1686776705000",
  "expires_date": "2099-12-31 05:05:05 Etc\/GMT",
  "expires_date_pst": "2099-12-31 05:05:05 America\/Los_Angeles",
  "is_in_intro_offer_period": "false",
  "transaction_id": "999999999999999",
  "is_trial_period": "false",
  "original_transaction_id": "999999999999999",
  "purchase_date": "2023-06-15 05:05:05 Etc\/GMT",
  "product_id": "888888888888888",
  "original_purchase_date_pst": "2023-06-15 05:05:05 America\/Los_Angeles",
  "in_app_ownership_type": "PURCHASED",
  "subscription_group_identifier": "20877951",
  "original_purchase_date_ms": "1686776705000",
  "web_order_line_item_id": "999999999999999",
  "expires_date_ms": "4102347905000",
  "purchase_date_pst": "2023-06-15 05:05:05 America\/Los_Angeles",
  "original_purchase_date": "2023-06-15 05:05:05 Etc\/GMT"
}
var renewal = {
  "expiration_intent": "1",
  "product_id": "888888888888888",
  "is_in_billing_retry_period": "0",
  "auto_renew_product_id": "888888888888888",
  "original_transaction_id": "999999999999999",
  "auto_renew_status": "0"
}
for (var uaKey in uaProductMapping) {
  if (UA && UA.includes(uaKey)) {
    var productInfo = uaProductMapping[uaKey];
    var product_id = productInfo.product_id;
    receipt.product_id = product_id;
    renewal.product_id = product_id;
    renewal.auto_renew_product_id = product_id;
    anni01.receipt.in_app = [receipt];
    anni01.latest_receipt_info = [receipt];
    anni.pending_renewal_info = [renewal];
    break;
  }
}
anni = anni01;
$done({ body: JSON.stringify(anni) });
