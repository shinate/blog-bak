---
layout: post
status: publish
published: true
title: zendOptimizer安装及配置
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
excerpt: Zend Optimizer用优化代码的方法来提高php应用程序的执行速度。实现的原理是对那些在被最终执行之前由运行编译器(Run-Time Compiler)产生的代码进行优化，一般情况下，执行使用ZO的php程序比不使用的要快40%到100%。而通过使用eAccelerator，可以进一步优化PHP代码执行速度，降低服务器负载。
wordpress_id: 26
wordpress_url: http://codante.org/?p=26
date: '2010-06-03 14:33:41 +0800'
date_gmt: '2010-06-03 06:33:41 +0800'
---



## 什么是Zend Optimizer？

Zend Optimizer用优化代码的方法来提高PHP 4.0应用程序的执行速度。实现的原理是对那些在被最终执行之前由运行编译器(Run-Time Compiler)产生的代码进行优化。

一般情况下，执行使用Zend Optimizer的PHP程序比不使用的要快40%到100%。这意味着网站的访问者可以更快的浏览网页，从而完成更多的事务，创造更好的客户满意度。更快的反应同时也意味着可以节省硬件投资，并增强网站所提供的服务。

Zend Optimizer能给PHP用户带来很多益处，特别是那些运营网站的人。快速运行PHP程序可以显著降低服务器的CPU负载，并可以减少一半的反应时间，也就是从访问者点击链接到服务器开始读取页面之间的时间。

## 安装过程

### 软件包下载

#### 32-bit

[bash]  

wget http://downloads.zend.com/optimizer/3.3.3/ZendOptimizer-3.3.3-linux-glibc23-i386.tar.gz  

[/bash]

#### 64-bit

[bash]  

wget http://downloads.zend.com/optimizer/3.3.3/ZendOptimizer-3.3.3-linux-glibc23-x86_64.tar.gz  

[/bash]

### 安装

[bash]  

./install  

[/bash]

按照提示输入  

[bash]  

Zend路径：/usr/local/Zend  

php.ini：/usr/local/php5/lib/  

apache启动文件：/usr/local/apache2/bin/apachectl  

[/bash]  
生成php.ini新路径：/usr/local/Zend/etc

apache自动重启，安装完毕