---
layout: post
status: publish
published: true
title: "在apache的log中找出访问次数最多的N个IP。"
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 83
wordpress_url: http://codante.org/?p=83
date: '2010-07-08 11:18:06 +0800'
date_gmt: '2010-07-08 03:18:06 +0800'
---

根据需求修改文件名和行数即可  

```bash
awk '{print $1}' 日志文件名 |sort |uniq -c|sort -nr|head -行数
```

输出：

```
1234 123.456.789.0
 321 11.22.33.44
  56 22.33.44.55
  34 33.44.55.66
  ......
```