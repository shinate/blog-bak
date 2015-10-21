---
layout: post
status: publish
published: true
title: "判断javascript加载完成的方法"
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 357
wordpress_url: http://codante.org/?p=357
date: '2010-10-18 12:41:59 +0800'
date_gmt: '2010-10-18 04:41:59 +0800'
---


[javascript]  

function include_js(file) {  

    var _doc = document.getElementsByTagName('head')[0];  

    var js = document.createElement('script');  

    js.setAttribute('type', 'text/javascript');  

    js.setAttribute('src', file);  

    _doc.appendChild(js);

    if (!/*@cc_on!@*/0) { //if not IE  

        //Firefox2、Firefox3、Safari3.1+、Opera9.6+ support js.onload  

        js.onload = function () {  

            alert('Firefox2、Firefox3、Safari3.1+、Opera9.6+ support js.onload');  

        }  

    } else {  

        //IE6、IE7 support js.onreadystatechange  

        js.onreadystatechange = function () {  

            if (js.readyState == 'loaded' || js.readyState == 'complete') {  

                alert('IE6、IE7 support js.onreadystatechange');  

            }  

        }  

    }

    return false;  

}

//execution function  

include_js('http://www.planabc.net/wp-includes/js/jquery/jquery.js');  

[/javascript]