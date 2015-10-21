---
layout: post
status: publish
published: true
title: eaccelerator安装及配置
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
excerpt: eaccelerator是一个自由开放源码php加速器，优化和动态内容缓存，提高了性能php脚本的缓存性能，使得PHP脚本在编译的状态下，对服务器的开销几乎完全消除。
  它还有对脚本起优化作用，以加快其执行效率。使您的PHP程序代码执效率能提高最多紧10倍！
wordpress_id: 29
wordpress_url: http://codante.org/?p=29
date: '2010-06-04 11:50:44 +0800'
date_gmt: '2010-06-04 03:50:44 +0800'
---


## 什么是eaccelerator？

eAccelerator的主要功能：  

1\. 缓存PHP文件的执行代码：在被缓存的代码再次被调用时，将直接从内存读取，从而在很大程度了PHP运行的速度。  

2\. 提供了共享内存操作函数：用户可以将自己的常见非资源对像，保存到内存之中，并可以随时读取出来。

eAccelerator作为PHP的扩展库存在，那么仅在PHP运行时，可以操作和读写共享内存，一般情况，只能由操作共享内存的程序自己调用．

## 安装

### 下载软件包

[bash]  

wget http://bart.eaccelerator.net/source/0.9.5.3/eaccelerator-0.9.5.3.zip  

[/bash]

### 准备安装

[bash]  

cd eaccelerator-0.9.5.2  

export PHP_PREFIX="/usr/local/php5"  

/usr/local/php5/bin/phpize  

[/bash]

### 编译安装

[bash]  

./configure --enable-eaccelerator=shared --with-php-config=$PHP_PREFIX/bin/php-config  

make  

make install  

[/bash]  

显示 **/usr/local/php5/lib/php/extensions/no-debug-non-zts-20060613/**  

这个路径在一会儿的配置时会有用  

[bash]  

mkdir /tmp/xxx  

[/bash]  

这里的xxx自己来定义，想放哪里都行  

[bash]  

chmod -R 0777 /tmp/xxx  

[/bash]

## 配置

打开php.ini

设置  

[bash]  

extension_dir = "/usr/local/php5/lib/php/extensions/no-debug-non-zts-20060613/"  

session.save_path = "/tmp/xxx"  

extension=eaccelerator.so  

[/bash]  

在最后添加  

[bash]  

[eaccelerator]  

extension=eaccelerator.so  

eaccelerator.shm_size="32"  

eaccelerator.cache_dir="/home/eaccelerator"  

eaccelerator.enable="1"  

eaccelerator.optimizer="1"  

eaccelerator.check_mtime="1"  

eaccelerator.debug="0"  

eaccelerator.filter=""  

eaccelerator.shm_max="0"  

eaccelerator.shm_ttl="0"  

eaccelerator.shm_prune_period="0"  

eaccelerator.shm_only="0"  

eaccelerator.compress="1"  

eaccelerator.compress_level="9"  

[/bash]  

保存退出

[bash]  

mkdir /home/eaccelerator  

chmod -R 0777 /home/eaccelerator/  

[/bash]

**重启apache，安装完毕**

建议运行一个php页面进行测试