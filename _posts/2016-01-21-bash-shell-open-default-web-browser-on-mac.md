---
layout: post
title: Mac系统用bash shell用默认浏览器打开网址
---

```bash
open http://codante.org -a "$(VERSIONER_PERL_PREFER_32_BIT=true perl -MMac::InternetConfig -le 'print +(GetICHelper "http")[1]')"
```