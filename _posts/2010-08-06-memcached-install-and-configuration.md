---
layout: post
status: publish
published: true
title: memcached安装及配置
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
excerpt: memcached是一个高性能的、分布式内存对象缓存系统，尽管很通用，但是用来加速WEB应用、降低数据库负载时比较多。memcached可以把数据库的负载降到了几乎没什么事可干的地步，同时为用户提供很快的页面响应速度，更好的资源利用率和更快的数据库存取操作。本文将详细的介绍在Linux系统下memcached的安装与配置过程。
wordpress_id: 288
wordpress_url: http://codante.org/?p=288
date: '2010-08-06 18:35:57 +0800'
date_gmt: '2010-08-06 10:35:57 +0800'
---

## 优点和缺点

memcached部分实现的是内存空间分配和回收,以及存储服务监听和提供.对于分布式的实现,取决于客户端的使用和构造.我们使用的客户端是完全支持分布式的.只是可能会出现某些问题.
诸如一旦出现网络问题, 网络问题导致某个分布式服务器中的一台失去联系之后,到这台机器恢复正常工作的这段时间内, 写入分布式服务器的数据将基本不可以获取. 可以通过采用分布式hash表的方式解决这个问题.

## 安装 libevent

memcached其实就是个内存管理，所以首先要安装下libevent。

