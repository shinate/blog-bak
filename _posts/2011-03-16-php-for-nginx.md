---
layout: post
status: publish
published: true
title: PHP for Nginx
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 551
wordpress_url: http://codante.org/?p=551
date: '2011-03-16 20:03:38 +0800'
date_gmt: '2011-03-16 12:03:38 +0800'
---


我用的是5.2.9，所以就以它为例，为了运行为FastCGI模式，需要打上fpm补丁包。

PHP各个版本fpm补丁包下载 [http://php-fpm.org/downloads/][0]

    [bash]
    wget http://cn.php.net/get/php-5.2.9.tar.gz/from/this/mirror
    wget http://php-fpm.org/downloads/php-5.2.9-fpm-0.5.10-unofficial.diff.gz
    tar zxf php-5.2.9.tar.gz
    gzip -cd php-5.2.9-fpm-0.5.10-unofficial.diff.gz | patch -d php-5.2.9 -p1
    cd php-5.2.9
    
    ./configure \
    --prefix=/servers/app/php \
    --with-config-file-path=/servers/app/php/etc \
    --with-mysql=/usr/local/mysql \
    --with-mysqli=/usr/local/mysql/bin/mysql_config \
    --with-iconv \
    --with-freetype-dir \
    --with-jpeg-dir \
    --with-png-dir \
    --with-zlib \
    --with-libxml-dir=/usr \
    --enable-xml \
    --disable-rpath \
    --enable-discard-path \
    --enable-safe-mode \
    --enable-bcmath \
    --enable-shmop \
    --enable-sysvsem \
    --enable-inline-optimization \
    --with-curl \
    --with-curlwrappers \
    --enable-mbregex \
    --enable-fastcgi \
    --enable-fpm \
    --enable-force-cgi-redirect \
    --enable-mbstring \
    --with-mcrypt \
    --with-gd \
    --enable-gd-native-ttf \
    --with-openssl \
    --with-mhash \
    --enable-pcntl \
    --enable-sockets \
    --with-ldap \
    --with-ldap-sasl
    
    make ZEND_EXTRA_LIBS='-liconv'
    make install
    [/bash]
    
    *缺失的库可以尝试用yum进行安装
    [bash]
    yum install libjpeg-devel
    yum install libpng-devel
    yum install libXpm-devel
    yum install libmcrypt-devel
    [/bash]
    等... 看报错信息就好了

然后，复制配置文件到php安装目录中的etc下。

    [bash]
    cp php.ini-dist /servers/app/php/etc/php.ini
    [/bash]

编辑fpm的文件

    [bash]
    vi /servers/app/php/etc/php-fpm.conf
    [/bash]

需要修改的不是很多，重新设置一下pid，log，端口，进程数什么的，根据自己机器来定。

放个简洁版的，注释太长，去了。

    [xml]
    &lt;?xml version="1.0" ?&gt;
    &lt;configuration&gt;
     &lt;section name="global_options"&gt;
     &lt;value name="pid_file"&gt;/servers/run/php-fpm-9000.pid&lt;/value&gt;
     &lt;value name="error_log"&gt;/servers/logs/php-fpm-9000.log&lt;/value&gt;
     &lt;value name="log_level"&gt;notice&lt;/value&gt;
     &lt;value name="emergency_restart_threshold"&gt;10&lt;/value&gt;
     &lt;value name="emergency_restart_interval"&gt;1m&lt;/value&gt;
     &lt;value name="process_control_timeout"&gt;5s&lt;/value&gt;
     &lt;value name="daemonize"&gt;yes&lt;/value&gt;
     &lt;/section&gt;
     &lt;workers&gt;
     &lt;section name="pool"&gt;
     &lt;value name="name"&gt;default&lt;/value&gt;
     &lt;value name="listen_address"&gt;127.0.0.1:9000&lt;/value&gt;
     &lt;value name="listen_options"&gt;
     &lt;value name="backlog"&gt;-1&lt;/value&gt;
     &lt;value name="owner"&gt;&lt;/value&gt;
     &lt;value name="group"&gt;&lt;/value&gt;
     &lt;value name="mode"&gt;0666&lt;/value&gt;
     &lt;/value&gt;
     &lt;value name="php_defines"&gt;
     &lt;value name="sendmail_path"&gt;/usr/sbin/sendmail -t -i&lt;/value&gt;
     &lt;value name="display_errors"&gt;0&lt;/value&gt;
     &lt;/value&gt;
     &lt;value name="user"&gt;nginx&lt;/value&gt;
     &lt;value name="group"&gt;nginx&lt;/value&gt;
     &lt;value name="pm"&gt;
     &lt;value name="style"&gt;static&lt;/value&gt;
     &lt;value name="max_children"&gt;128&lt;/value&gt;
     &lt;value name="apache_like"&gt;
     &lt;value name="StartServers"&gt;20&lt;/value&gt;
     &lt;value name="MinSpareServers"&gt;5&lt;/value&gt;
     &lt;value name="MaxSpareServers"&gt;35&lt;/value&gt;
     &lt;/value&gt;
     &lt;/value&gt;
     &lt;value name="request_terminate_timeout"&gt;0s&lt;/value&gt;
     &lt;value name="request_slowlog_timeout"&gt;0s&lt;/value&gt;
     &lt;value name="slowlog"&gt;logs/slow.log&lt;/value&gt;
     &lt;value name="rlimit_files"&gt;65535&lt;/value&gt;
     &lt;value name="rlimit_core"&gt;0&lt;/value&gt;
     &lt;value name="chroot"&gt;&lt;/value&gt;
     &lt;value name="chdir"&gt;&lt;/value&gt;
     &lt;value name="catch_workers_output"&gt;yes&lt;/value&gt;
     &lt;value name="max_requests"&gt;1024&lt;/value&gt;
     &lt;value name="allowed_clients"&gt;127.0.0.1&lt;/value&gt;
     &lt;value name="environment"&gt;
     &lt;value name="HOSTNAME"&gt;$HOSTNAME&lt;/value&gt;
     &lt;value name="PATH"&gt;/usr/local/bin:/usr/bin:/bin&lt;/value&gt;
     &lt;value name="TMP"&gt;/tmp&lt;/value&gt;
     &lt;value name="TMPDIR"&gt;/tmp&lt;/value&gt;
     &lt;value name="TEMP"&gt;/tmp&lt;/value&gt;
     &lt;value name="OSTYPE"&gt;$OSTYPE&lt;/value&gt;
     &lt;value name="MACHTYPE"&gt;$MACHTYPE&lt;/value&gt;
     &lt;value name="MALLOC_CHECK_"&gt;2&lt;/value&gt;
     &lt;/value&gt;
     &lt;/section&gt;
     &lt;/workers&gt;
    &lt;/configuration&gt;
    [/xml]

启动fastcgi

    [bash]
    /servers/app/php/sbin/php-fpm start
    [/bash]





持续。。。
[0]: http://php-fpm.org/downloads/