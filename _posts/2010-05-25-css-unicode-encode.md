---
layout: post
status: publish
published: true
title: CSS:Unicode中文字体转编码
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 24
wordpress_url: http://codante.org/cssunicode%e4%b8%ad%e6%96%87%e5%ad%97%e4%bd%93%e8%bd%ac%e7%bc%96%e7%a0%81.html
date: '2010-05-25 16:59:23 +0800'
date_gmt: '2010-05-25 08:59:23 +0800'
---

Unicode简单的说一下制作网页时的为了兼顾到一些浏览器CSS样式文档中一般是不出现中文字体的，尤其是{}中，因此通过参照下表将其对应转编，可以将中文名转成英文名、unicode、unicode2注意unicode2是直接输出为文本的，  
比如：微软雅黑，我们在CSS中的设置为

```css
font-family:"Microsoft Yahei";
```

也可以是对应的unicode

```css
font-family:"FAEF6F6C5ED1";
```

但微软雅黑对应的unicode2即**&\#x5FAE;&\#x8F6F;&\#x6B63;&\#x9ED1;&\#x4F53;**写在样式文档里是没有效果的，因为unicode2是以文本形式输出的，这个可以将对应的unicode2放到html文档中尝试一下，对应输出**微软雅黑**四个字中文名英文名UnicodeUnicode 2Mac OS华文细黑STHeiti Light [STXihei]\534E\6587\7EC6\9ED1&\#x534E;&\#x6587;&\#x7EC6;&\#x9ED1;华文黑体STHeiti\534E\6587\9ED1\4F53&\#x534E;&\#x6587;&\#x9ED1;&\#x4F53;华文楷体STKaiti\534E\6587\6977\4F53&\#x534E;&\#x6587;&\#x6977;&\#x4F53;华文宋体STSong\534E\6587\5B8B\4F53&\#x534E;&\#x6587;&\#x5B8B;&\#x4F53;华文仿宋STFangsong\534E\6587\4EFF\5B8B&\#x534E;&\#x6587;&\#x4EFF;&\#x5B8B;丽黑 ProLiHei Pro Medium\4E3D\9ED1 Pro&\#x4E3D;&\#x9ED1; Pro丽宋 ProLiSong Pro Light\4E3D\5B8B Pro&\#x4E3D;&\#x5B8B; Pro标楷体BiauKai\6807\6977\4F53&\#x6807;&\#x6977;&\#x4F53;苹果丽中黑Apple LiGothic Medium\82F9\679C\4E3D\4E2D\9ED1&\#x82F9;&\#x679C;&\#x4E3D;&\#x4E2D;&\#x9ED1;苹果丽细宋Apple LiSung Light\82F9\679C\4E3D\7EC6\5B8B&\#x82F9;&\#x679C;&\#x4E3D;&\#x7EC6;&\#x5B8B;Windows新细明体PMingLiU\65B0\7EC6\660E\4F53&\#x65B0;&\#x7EC6;&\#x660E;&\#x4F53;细明体MingLiU\7EC6\660E\4F53&\#x7EC6;&\#x660E;&\#x4F53;标楷体DFKai-SB\6807\6977\4F53&\#x6807;&\#x6977;&\#x4F53;黑体SimHei\9ED1\4F53&\#x9ED1;&\#x4F53;宋体SimSun\5B8B\4F53&\#x5B8B;&\#x4F53;新宋体NSimSun\65B0\5B8B\4F53&\#x65B0;&\#x5B8B;&\#x4F53;仿宋FangSong\4EFF\5B8B&\#x4EFF;&\#x5B8B;楷体KaiTi\6977\4F53&\#x6977;&\#x4F53;仿宋_GB2312FangSong_GB2312\4EFF\5B8B_GB2312&\#x4EFF;&\#x5B8B;_GB2312楷体_GB2312KaiTi_GB2312\6977\4F53_GB2312&\#x6977;&\#x4F53;_GB2312微软正黑体Microsoft JhengHei\5FAE\x8F6F\6B63\9ED1\4F53&\#x5FAE;&\#x8F6F;&\#x6B63;&\#x9ED1;&\#x4F53;微软雅黑Microsoft YaHei\5FAE\8F6F\96C5\9ED1&\#x5FAE;&\#x8F6F;&\#x96C5;&\#x9ED1;Office隶书LiSu\96B6\4E66&\#x96B6;&\#x4E66;幼圆YouYuan\5E7C\5706&\#x5E7C;&\#x5706;华文细黑STXihei\534E\6587\7EC6\9ED1&\#x534E;&\#x6587;&\#x7EC6;&\#x9ED1;华文楷体STKaiti\534E\6587\6977\4F53&\#x534E;&\#x6587;&\#x6977;&\#x4F53;华文宋体STSong\534E\6587\5B8B\4F53&\#x534E;&\#x6587;&\#x5B8B;&\#x4F53;华文中宋STZhongsong\534E\6587\4E2D\5B8B&\#x534E;&\#x6587;&\#x4E2D;&\#x5B8B;华文仿宋STFangsong\534E\6587\4EFF\5B8B&\#x534E;&\#x6587;&\#x4EFF;&\#x5B8B;方正舒体FZShuTi\65B9\6B63\8212\4F53&\#x65B9;&\#x6B63;&\#x8212;&\#x4F53;方正姚体FZYaoti\65B9\6B63\59DA\4F53&\#x65B9;&\#x6B63;&\#x59DA;&\#x4F53;华文彩云STCaiyun\534E\6587\5F69\4E91&\#x534E;&\#x6587;&\#x5F69;&\#x4E91;华文琥珀STHupo\534E\6587\7425\73C0&\#x534E;&\#x6587;&\#x7425;&\#x73C0;华文隶书STLiti\534E\6587\96B6\4E66&\#x534E;&\#x6587;&\#x96B6;&\#x4E66;华文行楷STXingkai\534E\6587\884C\6977&\#x534E;&\#x6587;&\#x884C;&\#x6977;华文新魏STXinwei\534E\6587\65B0\9B4F&\#x534E;&\#x6587;&\#x65B0;&\#x9B4F;