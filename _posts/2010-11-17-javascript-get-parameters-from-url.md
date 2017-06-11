---
layout: post
title: Javascript从url中获取参数
---

## 实现方法

```javascript
function getQueryString(name) {
    if (location.href.indexOf("?") == -1 || location.href.indexOf(name + '=') == -1) {
        return '';
    }
    var queryString = location.href.substring(location.href.indexOf("?") + 1);
    var parameters = queryString.split("&");
    var pos, paraName, paraValue;
    for (var i = 0; i & lt; parameters.length; i++) {
        pos = parameters[i].indexOf('=');
        if (pos == -1) continue;
        paraName = parameters[i].substring(0, pos);
        paraValue = parameters[i].substring(pos + 1);
        if (paraName == name) {
            return unescape(paraValue.replace(/\+/g, " "));
        }
    }
    return '';
};
// http://localhost/test.html?aa=bb&test=cc+dd&ee=ff
alert(getQueryString('test'));
```

## 正则的方法

```javascript
function getQueryStringRegExp(name) {
    var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    return (reg.test(location.href)) ? unescape(RegExp.$2.replace(/\+/g, " ")) : "";
};
// http://localhost/test.html?aa=bb&test=cc+dd&ee=ff
alert(getQueryStringRegExp('test'));
```