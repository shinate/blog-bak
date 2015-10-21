---
layout: post
status: publish
published: true
title: haproxy设置websocket
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 661
wordpress_url: http://codante.org/?p=661
date: '2012-04-17 11:39:56 +0800'
date_gmt: '2012-04-17 03:39:56 +0800'
---


    [code]
    frontend all 0.0.0.0:80
       timeout client 86400000
       default_backend www_backend
       acl is_websocket hdr(Upgrade) -i WebSocket
       acl is_websocket hdr_beg(Host) -i ws
       use_backend socket_backend if is_websocket
    [/code]