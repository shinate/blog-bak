---
layout: post
status: publish
published: true
title: linux中去掉Windows文件的"^M"字符
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 353
wordpress_url: http://codante.org/?p=353
date: '2010-10-12 19:10:09 +0800'
date_gmt: '2010-10-12 11:10:09 +0800'
---

## VI

对某个文件进行处理

```bash
vi filename
```

```
:%s/^M/\r/g
```

## SED方法

## PERL方法

可对多文件批量处理

```bash
perl -p -i -e "s/^M//g" `find .`
```

* `find .` 可以替换为任何文件或者多个文件，它的作用为提取所需的文件名。
***注意：^M字符需要使用 Ctrl+v+m来输入**
持续......