---
layout: post
status: publish
published: true
title: Linux find命令详解
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
excerpt: "在Linux上查找某个文件确实是一件比较麻烦的事情。毕竟在Linux中需要我们使用专用的"查找"命令来寻找在硬盘上的文件。Linux下的文件表达格式非常复杂，不象WINDOWS,DOS下都是统一的aaa.bbb格式那么方便查找，在WINDOWS中，只要知道要查找的文件的文件名或者后缀就非常容易查找到。Linux中查找文件的命令通常为"find"命令，"find"命令能帮助我们在使用,管理Linux的日常事务中方便的查找出我们需要的文件。对于Linux新手来说，"find"命令也是了解和学习Linux文件特点的方法。"
wordpress_id: 65
wordpress_url: http://codante.org/?p=65
date: '2010-06-30 14:57:48 +0800'
date_gmt: '2010-06-30 06:57:48 +0800'
---


感谢老男孩赐予的知识。 老男孩（QQ:49000448， mail:49000448@qq.com）

## 查看帮助（很重要）

[bash]  

find --help  

[/bash]

## 显示所有文件

显示多个目录文件列表(仅限于3层)  

[bash]  

find test ryan hyran -maxdepth 3  

[/bash]

## 按文件名、路径名查找

多参数，可用通配符

[bash]  

find -maxdepth 3 -name 'd*'  

find -maxdepth 3 -name 'ji*\.sql'  

find -path '*server*'  

[/bash]

## 按文件属性查找

[bash]  

find . -type f  

find . -size -100M  

find . -size +1G  

find . -mtime +2  

find . -perm 755  

find . -perm -755  \#权限至少为755  

[/bash]

## 组合查找

[bash]  

find . -type d -mtime +30  

find . -type f -mtime +15  

find . -type f -size +10M  

find . -type d -name 'server*'  

find /ryan -name '*.log' -mtime +5  

[/bash]

## 使用逻辑运算查找

[bash]  

/ryan目录下30天前访问过得大于20M的文件（-a and,-o or !）  

find /ryan -size +20M -a atime 30  

find /ryan -type f -o -mtime +15  

find /ryan ! -user rhy  

[/bash]

## 对查找文件实施操作

[bash]  

\#删目录 30天以前  

find . -type d -mtime +30 |xargs rm -rf

\#删文件 15天以前 \#删目录下文件用这个好  

find . -type f -mtime +15 |xargs rm -f  

[/bash]