/******************************
🧚🏻‍♂️项目名称：央视频 
🧚🏻‍♂️脚本作者：ios151
🧚🏻‍♂️特别说明：只解锁 会员影视 未解锁[电视]内会员
🧚🏻‍♂️软件版本: 2.8.2 无需登录
🧚🏻‍♂️注意事项：仅供学习 请勿传播售卖
***************************

[rewrite_local]

^http:\/\/playvv\.ysp\.cctv\.cn\/playvinfo\?.+$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js
#如果登录提示错误的话 手动屏蔽下面这条302
#&guid=\w+&app_version=([\d\.]+)&spadseg=(\d)&userid=(|\d+) url 302 &guid=26ae4779b2b411ec90a46c92bfd79530&app_version=$1&spadseg=$2&vuserid=209027229
#^https:\/\/liveinfo\.ysp\.cctv\.cn\/ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js
#^https:\/\/m\.yangshipin\.cn\/static\/\w/\w+\/index\.html$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js
# > 央视频 去广告来源 @广告必须死
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/m8uTS50pt3DC0Xd6\.json url reject-200


[mitm]
hostname = playvv.ysp.cctv.cn, cdn.cmgadx.com

*******************************/
var version_='jsjiami.com.v7';const r=b;(function(c,d,e,f,g,h,i){return c=c>>0x4,h='hs',i='hs',function(j,k,l,m,n){const q=b;m='tfi',h=m+h,n='up',i+=n,h=l(h),i=l(i),l=0x0;const o=j();while(!![]&&--f+k){try{m=parseInt(q(0x16b,'tY$0'))/0x1*(parseInt(q(0x16a,'2QD]'))/0x2)+parseInt(q(0x168,'5%^('))/0x3+parseInt(q(0x15f,'Bx#p'))/0x4+-parseInt(q(0x15d,'to14'))/0x5*(-parseInt(q(0x161,'h*S%'))/0x6)+parseInt(q(0x15c,'Ji3u'))/0x7+-parseInt(q(0x169,'5il$'))/0x8+-parseInt(q(0x166,'Y5B6'))/0x9;}catch(p){m=l;}finally{n=o[h]();if(c<=f)l?g?m=n:g=n:l=n;else{if(l==g['replace'](/[AwydIxgtpWlrGFu=]/g,'')){if(m===k){o['un'+h](n);break;}o[i](n);}}}}}(e,d,function(j,k,l,m,n,o,p){return k='\x73\x70\x6c\x69\x74',j=arguments[0x0],j=j[k](''),l='\x72\x65\x76\x65\x72\x73\x65',j=j[l]('\x76'),m='\x6a\x6f\x69\x6e',(0x13b255,j[m](''));});}(0xc50,0x34b95,a,0xc7),a)&&(version_=a);function b(c,d){const e=a();return b=function(f,g){f=f-0x15b;let h=e[f];if(b['MdsYwE']===undefined){var i=function(n){const o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let p='',q='';for(let r=0x0,s,t,u=0x0;t=n['charAt'](u++);~t&&(s=r%0x4?s*0x40+t:t,r++%0x4)?p+=String['fromCharCode'](0xff&s>>(-0x2*r&0x6)):0x0){t=o['indexOf'](t);}for(let v=0x0,w=p['length'];v<w;v++){q+='%'+('00'+p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(q);};const m=function(n,o){let p=[],q=0x0,r,t='';n=i(n);let u;for(u=0x0;u<0x100;u++){p[u]=u;}for(u=0x0;u<0x100;u++){q=(q+p[u]+o['charCodeAt'](u%o['length']))%0x100,r=p[u],p[u]=p[q],p[q]=r;}u=0x0,q=0x0;for(let v=0x0;v<n['length'];v++){u=(u+0x1)%0x100,q=(q+p[u])%0x100,r=p[u],p[u]=p[q],p[q]=r,t+=String['fromCharCode'](n['charCodeAt'](v)^p[(p[u]+p[q])%0x100]);}return t;};b['Omkhai']=m,c=arguments,b['MdsYwE']=!![];}const j=e[0x0],k=f+j,l=c[k];return!l?(b['rIphFs']===undefined&&(b['rIphFs']=!![]),h=b['Omkhai'](h,g),c[k]=h):h=l,h;},b(c,d);}function a(){const s=(function(){return[version_,'dIdpjxgsyFjipamuit.wggcWoWymurw.Gvu7wAdl==','Cmkzd3hcP8k3hedcQSogWPdcUG','qSk6mrRcTmo0p3qmxmokosG','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','W43cV8o2xmoiWOvvcgtcI8o4WQC','W4b2WQFdJc0eWRdcH2tdHJ8U'].concat((function(){return['W7LfnmoqqCktW4i','WQRcH25hWRarW6Wey8kmcCkK','WPtcHCoIdwDgWRRcMSkB','W45yFGyUkJFdICoUW6LZua','C8oJW6JdRSkAecBdOSoRnCkLWOe','sXLlsepdKbmAW6e','C8kBcxVcQSk4w0dcVSo0WP/cTqS'].concat((function(){return['WPdcHSkzWRVcH10YW6eZW4JcMYiP','CYpcMmoJnSk/WQ8','xCoVwq/dT8kLwtddLbVdOG','js5lWOVcRSkmtxBdRfpdGCkKgW','kxhdI8k0yCo7WR0LWRpcGmoUeW','W7FdQSo6W4LsW7GFWOSQzcPA'];}()));}()));}());a=function(){return s;};return a();};let headers=$request[r(0x160,'tYY&')];headers['Cookie']=r(0x167,')0f@'),$done({'headers':headers});var version_ = 'jsjiami.com.v7';
