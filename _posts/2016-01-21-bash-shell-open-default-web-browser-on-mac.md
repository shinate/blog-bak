---
layout: post
title: Mac通过Bash shell打开默认浏览器
---

```bash
openUrl() {
  if [ -n $1 ]; then
    open -a "$(VERSIONER_PERL_PREFER_32_BIT=true perl -MMac::InternetConfig -le 'print +(GetICHelper "http")[1]')" $1
  fi
}
```