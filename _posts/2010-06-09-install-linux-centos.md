---
layout: post
status: publish
published: true
title: Linux详细安装文档-CentOS5.4-实际操作
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 33
wordpress_url: http://codante.org/33
date: '2010-06-09 13:56:50 +0800'
date_gmt: '2010-06-09 05:56:50 +0800'
---

## LINUX介绍

Linux操作系统，是一种计算机操作系统。Linux操作系统的内核的名字也是"Linux"。Linux操作系统也是自由软件和开放源代码发展中最著名的例子。

## 安装准备工作

## 开始安装

Centos5安装界面
输入text使用模式安装
提示是否检验介质，这里由于是测试，为了节省时间，我们选择Skip，跳过检验

### 语言选择

选择English

### 选择键盘

### 为磁盘分区

*remove all partitions on selected drives and create default layout. *移除所选磁盘上的所有分割区，并建立预设的分割模式。
*remove linux partitions on selected drives and create default layout.* 移除所选磁盘上的linux分割区，并建立预设的分割模式。
*use free space on selected drives and create default layout.* 使用所选取磁盘上的未使用空间，建立预设的分割模式。
*create custom layout.* 手动分区
选择第一项：移除所选磁盘上的所有分割区即可。
如果需要手动进行分区，可以参考一下原则：
* "/boot"分区一般分为100m~150m
 "/Swap"为内存分区，一般为物理内存的1.5倍~2倍
 "/"分区选择 Fill all available space （全部剩余空间）
*****分区均选择 Force to be a primary partition（主分区）

### 使用GRUB

GRUB - 可以通过GRUB找回系统的root密码，开启GRUB很必要
默认OK即可
为GRUB设置密码。由于我们可以通过GRUB找回系统root密码，因此安全起见，我们需要为GRUB设置一个复杂的密码。
默认OK即可

### 配置网络

#### 设置网络信息

选择"Activate on boot"和"Enable Ipv4 support"
选择 Manual address configuration
IP Address 本机ip （如）：192.168.1.100
Prefix(Netmask) 子网掩码（如）：255.255.255.0

#### 配置网关信息

Gateway 默认网关（如）:192.168.1.1
Primary DNS 网关（如）:8.8.8.8
Secondary DNS 备用网关（如）：8.8.4.4

### 设置主机名称

可选manually自行设定（如）：Webserver01

### 设置系统时间

选择"Asis/Shanghai"

### 设置系统密码

也就是设置root用户密码，建议复杂些。

### 选择基础安装包

选择Customize software selection（自定义）后，进入列表
选择以下几个安装包：
* develop library
* develop tools
* edits
* base
* x software development
* administrator tools
* system tools
默认
安装需要5~10分钟左右，根据配置不同有所浮动。

### 安装成功

Reboot

## 其他

第一次重启虚拟机进入LINUX系统后，会出现一个"Setup Agent"菜单
这时我们进入"Firewall configuration"菜单将防火墙关闭
现在我们正式进入LINUX系统文本登陆界面了。
感谢 老男孩，jeacen，和我自己...