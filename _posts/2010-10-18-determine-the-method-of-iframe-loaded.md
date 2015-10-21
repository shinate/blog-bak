---
layout: post
status: publish
published: true
title: "判断 iframe 是否加载完成的完美方法 "
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 355
wordpress_url: http://codante.org/?p=355
date: '2010-10-18 12:37:36 +0800'
date_gmt: '2010-10-18 04:37:36 +0800'
---


[javascript]  

var iframe = document.createElement("iframe");  

iframe.src = "http://www.planabc.net";  

if (iframe.attachEvent){  

    iframe.attachEvent("onload", function(){  

        alert("Local iframe is now loaded.");  

    });  

} else {  

    iframe.onload = function(){  

        alert("Local iframe is now loaded.");  

    };  

}  

document.body.appendChild(iframe);  

[/javascript]