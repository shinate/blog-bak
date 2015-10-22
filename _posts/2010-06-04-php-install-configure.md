---
layout: post
status: publish
published: true
title: Linux下的PHP安装及配置
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
excerpt: PHP是一种易于学习和使用的服务器端脚本语言。他可以在服务器端独立运行，也可以通过apache来发布，本文根据实际操作详细介绍linux系统(Centos
  5.4_x86_64)下的php安装过程。
wordpress_id: 28
wordpress_url: http://codante.org/php%e5%ae%89%e8%a3%85%e5%8f%8a%e9%85%8d%e7%bd%ae.html
date: '2010-06-04 11:41:39 +0800'
date_gmt: '2010-06-04 03:41:39 +0800'
---

## 下载软件包

```bash
wget http://cn.php.net/get/php-5.2.9.tar.gz/from/this/mirror
```

## 编译安装

```bash
./configure \
--prefix=/usr/local/php5 \
--with-apxs2=/usr/local/apache2/bin/apxs \
--with-mysql=/usr/local/mysql \
--with-ttf \
--with-xmlrpc \
--with-openssl \
--with-zlib \
--with-freetype-dir \
--with-gd \
--with-jpeg-dir \
--with-png-dir \
--with-iconv=/usr/local/libiconv \
--enable-short-tags \
--enable-sockets \
--enable-zend-multibyte \
--enable-soap \
--enable-mbstring \
--enable-static \
--enable-gd-native-ttf \
--with-curl
make
make install
```

## 配置

拷贝配置文件到安装目录

```bash
cp php.ini-dist /usr/local/php5/lib/php.ini
```

## 启动中遇到的问题

重启apache

```code
遇到错误: httpd: Syntax error on line 54 of /usr/local/apache2/conf/httpd.conf: Cannot load /usr/local/apache2/modules/libphp5.so into server: /usr/local/apache2/modules/libphp5.so: cannot restore segment prot after reloc: Permission denied
```

### 解决办法1

设置通过selinux的检验

```bash
chcon -t texrel_shlib_t /usr/local/apache2/modules/libphp5.so
```

### 解决办法2

关闭selinux

```bash
vi /etc/selinux/config
```

设置

```code
SELINUX=disabled
```

**重启apache，安装完毕**