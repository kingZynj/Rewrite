/*
用药助手13.14 
始作俑者：@ios151 感谢@Anni提供ck
特别说明：指南专题没有解锁.如需解锁完整版单独使用yyzsck.js版
免责声明：仅供学习 请勿传播
更新时间: 2023.8.6.2.00.

[rewrite_local]
^https://newdrugs.dxy.cn url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yyzsck.js
^https://newdrugs.dxy.cn url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/yyzs2.js

[mitm]
hostname = newdrugs.dxy.cn

*/
var version_='jsjiami.com.v7';const r=b;(function(c,d,e,f,g,h,i){return c=c>>0x4,h='hs',i='hs',function(j,k,l,m,n){const q=b;m='tfi',h=m+h,n='up',i+=n,h=l(h),i=l(i),l=0x0;const o=j();while(!![]&&--f+k){try{m=-parseInt(q(0x1e4,']$JE'))/0x1+parseInt(q(0x1e2,'(F5y'))/0x2+parseInt(q(0x1f2,'!gPR'))/0x3+-parseInt(q(0x1e8,'TYc9'))/0x4+-parseInt(q(0x1e5,'5Y$k'))/0x5+-parseInt(q(0x1fb,'fS%0'))/0x6*(-parseInt(q(0x1ee,'PUdf'))/0x7)+-parseInt(q(0x1f1,'75VJ'))/0x8*(-parseInt(q(0x1fc,'FXof'))/0x9);}catch(p){m=l;}finally{n=o[h]();if(c<=f)l?g?m=n:g=n:l=n;else{if(l==g['replace'](/[HekBGJPILtXRNErK=]/g,'')){if(m===k){o['un'+h](n);break;}o[i](n);}}}}}(e,d,function(j,k,l,m,n,o,p){return k='\x73\x70\x6c\x69\x74',j=arguments[0x0],j=j[k](''),l='\x72\x65\x76\x65\x72\x73\x65',j=j[l]('\x76'),m='\x6a\x6f\x69\x6e',(0x137f16,j[m](''));});}(0xbd0,0x27b64,a,0xbf),a)&&(version_=a);function b(c,d){const e=a();return b=function(f,g){f=f-0x1e2;let h=e[f];if(b['XFFuzF']===undefined){var i=function(n){const o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let p='',q='';for(let r=0x0,s,t,u=0x0;t=n['charAt'](u++);~t&&(s=r%0x4?s*0x40+t:t,r++%0x4)?p+=String['fromCharCode'](0xff&s>>(-0x2*r&0x6)):0x0){t=o['indexOf'](t);}for(let v=0x0,w=p['length'];v<w;v++){q+='%'+('00'+p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(q);};const m=function(n,o){let p=[],q=0x0,r,t='';n=i(n);let u;for(u=0x0;u<0x100;u++){p[u]=u;}for(u=0x0;u<0x100;u++){q=(q+p[u]+o['charCodeAt'](u%o['length']))%0x100,r=p[u],p[u]=p[q],p[q]=r;}u=0x0,q=0x0;for(let v=0x0;v<n['length'];v++){u=(u+0x1)%0x100,q=(q+p[u])%0x100,r=p[u],p[u]=p[q],p[q]=r,t+=String['fromCharCode'](n['charCodeAt'](v)^p[(p[u]+p[q])%0x100]);}return t;};b['mIILHA']=m,c=arguments,b['XFFuzF']=!![];}const j=e[0x0],k=f+j,l=c[k];return!l?(b['xJgtdX']===undefined&&(b['xJgtdX']=!![]),h=b['mIILHA'](h,g),c[k]=h):h=l,h;},b(c,d);}function a(){const s=(function(){return[version_,'IBjRrsLjJBitEaHkmGiJ.KKcPKom.NvtR7GeNXPP==','W6DYW6uhamkuWQm/z8kbvXZcLsbswGqBgNNcJHTT','W4xcJSorWONcLspcMSoMx2VdRrS','jgK3W5mGW4n6FCk6WQrJya','EKqAuSk/mr5EW7pcKmkgW4u','EMdcP1qGf0pcJW','khOVW47dTrtdQIZcNCk2iCky','W7vVW6n/WReyyuNcHfeeWRu','efZcRmkRASo4','FKqhv8kOoa'].concat((function(){return['W58efIpdUCk7W6yiW7XTxrW','WQuPWRS','WRGhWPzCpLBcQ8oQWPCuruy','W79YW61eWRbAyLVdNWCFW7NcRc1e','W79ukbGe','WPbaE2xdICkjW6HblG','WQfoiWpdVtVdNXNdG2mi','WQaIWRqrW6WE','ySooWPW5cgBcNrtdPuv0ua','W6aCmxnSWR/dQmkPFG0Ogq','W4lcLM7cPZRdImohlajnEhCcW6G/qSksWPlcSCocl25mW5JdVSoCW6msW5HtqHWrW78EeW4CD8oyWRTJhmojfrqfWQq+W7COB3FdLLDfWOiFWPuQedddICoLnmoLBJ8AW588nq'].concat((function(){return['WQucy1KDWPKnWONcHru','W5iPjwhdHr3dMq','vmkVF3v2w0FcNM42iCoV','kSo0dYWfWPldUCoypG','WR40W4qUn8oyW596','WOyfWQOnWR/dSmoSWP3cTSkakWO','gHBcU19NWOvwW5iNW6ZdPW','kCokkNRcKSksWOlcL8oBWQtcSa8'];}()));}()));}());a=function(){return s;};return a();};const newHeaders={'Host':r(0x1ef,'ua#r'),'Cookie':'JSESSIONID=9A4D97837FFF360D30ADD2284AC760B2;\x20CASTGC=TGT-514924-IFyO3CQU4NRMWGjjbPVcQCXDeMKKcWZZKeW-50;\x20app-username=dxy_s7dau2c5','app-sandbox':'0','Accept':r(0x1ed,'fS%0'),'app-version':r(0x1f0,'DluI'),'app-os':r(0x1eb,'XY]4'),'app-username':r(0x1e9,'ua#r'),'app-mc':'8A8DA63419E74D65B3BF66DDA5B44FA412345678udidfor7','app-mt':'iPhone_iOS15.1.1','Accept-Language':'zh-Hans-CN;q=1.0,\x20en-CN;q=0.9,\x20zh-Hant-HK;q=0.8','app-hard-name':r(0x1ea,'Cp0B'),'Referer':r(0x1e3,'fS%0'),'Accept-Encoding':'br;q=1.0,\x20gzip;q=0.9,\x20deflate;q=0.8','User-Agent':r(0x1f6,'KuG&'),'Connection':r(0x1f7,'DluI'),'app-ac':'4124c5f1-1029-4fda-b06f-a87ac5ad8d9f','DXY-AUTH-TOKEN':'TGT-514924-IFyO3CQU4NRMWGjjbPVcQCXDeMKKcWZZKeW-50','app-os-version':r(0x1f3,'ua#r')},requestHeaders=$request[r(0x1f8,'F%Zj')];Object['assign'](requestHeaders,newHeaders),console['log'](JSON['stringify'](requestHeaders)),$done({'headers':requestHeaders});var version_ = 'jsjiami.com.v7';
