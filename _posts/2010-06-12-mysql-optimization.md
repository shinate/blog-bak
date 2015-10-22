---
layout: post
status: publish
published: true
title: MySQL调优工具
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
excerpt: MySQL究竟要如何配置？怎么调优？我该做些什么？都有哪些关键的指标？本文提供了一个解决方案！
wordpress_id: 37
wordpress_url: http://codante.org/?p=37
date: '2010-06-12 14:52:47 +0800'
date_gmt: '2010-06-12 06:52:47 +0800'
---

[root@killer mysql]\# sh tuning-primer.sh
Using login values from ~/.my.cnf
- INITIAL LOGIN ATTEMPT FAILED -
Testing for stored webmin passwords:
None Found
Could not auto detect login info!
Found Sockets: /var/lib/mysql/mysql.sock
Using: /var/lib/mysql/mysql.sock
Would you like to provide a different socket?: [y/N] n  此处选N即可
Do you have your login handy ? [y/N] : y
User: 连接mysql用户名
Password: 密码
Would you like me to create a ~/.my.cnf file for you? [y/N] : y
~/.my.cnf already exists!  由于刚才我配置过了，这里提示该文件已存在，不鸟它，继续
Replace ? [y/N] : y     替换它,然后。。。耐心等待。报表出现
报表样例
PS:这是我的测试机。。。。没怎么用过。。。还是奔4的呢。。。

```code
-- MYSQL PERFORMANCE TUNING PRIMER --
- By: Matthew Montgomery -
MySQL Version 5.1.30 i686
Uptime = 30 days 11 hrs 21 min 37 sec
Avg. qps = 0
Total Questions = 519166
Threads Connected = 1
Server has been running for over 48hrs.
It should be safe to follow these recommendations
To find out more information on how each of these
runtime variables effects performance visit:
http://dev.mysql.com/doc/refman/ ... stem-variables.html
Visit http://www.mysql.com/products/enterprise/advisors.html
for info about MySQL's Enterprise Monitoring and Advisory Service
SLOW QUERIES
The slow query log is NOT enabled.
Current long_query_time = 10.000000 sec.
You have 1 out of 519187 that take longer than 10.000000 sec. to complete
Your long_query_time seems to be fine
BINARY UPDATE LOG
The binary update log is NOT enabled.
You will not be able to do point in time recovery
See http://dev.mysql.com/doc/refman/ ... -time-recovery.html
WORKER THREADS
Current thread_cache_size = 0
Current threads_cached = 0
Current threads_per_sec = 1
Historic threads_per_sec = 0
Your thread_cache_size is fine
MAX CONNECTIONS
Current max_connections = 151
Current threads_connected = 1
Historic max_used_connections = 8
The number of used connections is 5% of the configured maximum.
You are using less than 10% of your configured max_connections.
Lowering max_connections could help to avoid an over-allocation of memory
See "MEMORY USAGE" section to make sure you are not over-allocating
INNODB STATUS
Current InnoDB index space = 99 M
Current InnoDB data space = 449 M
Current InnoDB buffer pool free = 0 %
Current innodb_buffer_pool_size = 8 M
Depending on how much space your innodb indexes take up it may be safe
to increase this value to up to 2 / 3 of total system memory
MEMORY USAGE
Max Memory Ever Allocated : 39 M
Configured Max Per-thread Buffers : 405 M
Configured Max Global Buffers : 17 M
Configured Max Memory Limit : 423 M
Physical Memory : 1.97 G
Max memory limit seem to be within acceptable norms
KEY BUFFER
No key reads?!
Seriously look into using some indexes
Current MyISAM index space = 132 K
Current key_buffer_size = 7 M
Key cache miss rate is 1 : 0
Key buffer free ratio = 88 %
Your key_buffer_size seems to be fine
QUERY CACHE
Query cache is supported but not enabled
Perhaps you should set the query_cache_size
SORT OPERATIONS
Current sort_buffer_size = 2 M
Current read_rnd_buffer_size = 256 K
Sort buffer seems to be fine
JOINS
Current join_buffer_size = 132.00 K
You have had 0 queries where a join could not use an index properly
Your joins seem to be using indexes properly
OPEN FILES LIMIT
Current open_files_limit = 1024 files
The open_files_limit should typically be set to at least 2x-3x
that of table_cache if you have heavy MyISAM usage.
Your open_files_limit value seems to be fine
TABLE CACHE
Current table_open_cache = 64 tables
Current table_definition_cache = 256 tables
You have a total of 93 tables
You have 64 open tables.
Current table_cache hit rate is 8%
, while 100% of your table cache is in use
You should probably increase your table_cache
TEMP TABLES
Current max_heap_table_size = 16 M
Current tmp_table_size = 16 M
Of 15443 temp tables, 1% were created on disk
Created disk tmp tables ratio seems fine
TABLE SCANS
Current read_buffer_size = 128 K
Current table scan ratio = 11 : 1
read_buffer_size seems to be fine
TABLE LOCKING
Current Lock Wait ratio = 0 : 519442
Your table locking seems to be fine
```