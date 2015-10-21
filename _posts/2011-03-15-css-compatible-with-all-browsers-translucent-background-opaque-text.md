---
layout: post
status: publish
published: true
title: "兼容各浏览器的半透明背景且不透明文字的CSS写法"
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 550
wordpress_url: http://codante.org/?p=550
date: '2011-03-15 20:04:09 +0800'
date_gmt: '2011-03-15 12:04:09 +0800'
---


当CSS有了rgba属性，可以很方便的实现背景透明，但问题主要出在IE上...

再怎么骂也没用了，它也不会按标准走的，IE家族只能使用其特有的filter属性。

## FireFox

rgba是CSS3中的属性，支持W3标准的浏览器都可以现实的，比如webkit核心的...

    [css]
    background:rgba(255, 0, 0, 0.5);
    [/css]

background:rgba([red:0~255], [green:0~255], [blue:0~255], [alpha:0~1]);

[演示地址][0]

## IE

对于IE有多种方法可以实现

我个人比较喜欢用IE的专属标签来修复"**&lt;!--[if IE]&gt;&lt;[!endif]--&gt;**"，原则只有一个：

**"IE你非要玩儿恶心的那你自己恶心去，别恶心别人！"**

### alpha滤镜

这是以前经常使用的方法，利用透明滤镜来实现。

问题在于，如果这个容器直接包含文本就没法实现文本不透明，必须加一层容器。

    [css]
    &lt;!--[if IE]&gt;
    &lt;style type="text/css"&gt;
    .t{
        background:\#f00;
        filter:alpha(opacity=50);
        zoom:1
    }
    .t *{
        position:relative
    }
    &lt;/style&gt;
    &lt;![endif]--&gt;
    [/css]

filter:alpha(opacity=[alpha:0~100]);

[演示地址][1]

### 渐变效果滤镜

    [css]
    &lt;!--[if IE]&gt;
    &lt;style type="text/css"&gt;
    .t{
        background:transparent;
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\#80FF0000,endColorstr=\#80FF0000);
        zoom:1;
    }
    &lt;/style&gt;
    &lt;![endif]--&gt;
    [/css]

filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\#[[alpha:00~FF][red:00~FF][green:00~FF][blue:00~FF]], endColorstr=\#[[alpha:00~FF][red:00~FF][green:00~FF][blue:00~FF]];

00表示完全透明，FF就是全不透明，转换成十进制的范围就是0~255，如果想实现50%的透明需要进行一下换算，50/100 * 255 = 127.5，按128来算，转换成16进制为80。

[演示地址][2]



我没那么NB，不敢写"拒绝IE"什么的，用的人多就得做，老老实实的做出点好用的东西就行了。
[0]: http://unite.codante.org/development/tester/transparent_background/rgba.html
[1]: http://unite.codante.org/development/tester/transparent_background/filter_alpha.html
[2]: http://unite.codante.org/development/tester/transparent_background/filter__gradient.html