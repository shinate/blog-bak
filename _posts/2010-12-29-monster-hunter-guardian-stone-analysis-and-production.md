---
layout: post
status: publish
published: true
title: 怪物猎人，护石代码分析，护石的修改与自定义制作！
author:
  display_name: "莳子"
  login: admin
  email: shine.wangrs@gmail.com
  url: http://codante.org
author_login: admin
author_email: shine.wangrs@gmail.com
author_url: http://codante.org
wordpress_id: 427
wordpress_url: http://codante.org/?p=427
date: '2010-12-29 17:36:14 +0800'
date_gmt: '2010-12-29 09:36:14 +0800'
---

## 全面剖析

用道具箱第一栏进行测试，第一栏的地址为0x01349364。
一个护石用12个8位元进行控制，它们分别代表：[01][02][0304][0506]07,0809,1011,12[有无装备][装备类型][修正值,装备属性][修正值][属性1][属性2][强化玉][1][强化玉][2][强化玉][3]

### 01 有无装备

这个很好理解就不说了...

### 02 装备类型

MH 2里有很多种类的装备，每种装备都有相应的代码，以这里介绍的护石代为例，它的码为"**65**"。

### 03 & 04 装备属性及修正值

这个地方比较奇特
以下是分析过程

#### 装备属性

03 的后四位 00~06 控制护石的等级1-7

#### 修正值

03 04两部分，是通过03的前四位，04的整个八位，组成了两个六位的控制，也就是64进制的，带符号的取值就是 -30 ~ 33之间，他们的排列顺序为 04[1] 04[2] 03[1]

前六位控制属性2

后六位控制属性1

```
04 [1]      04[2]      03[1]      属性1     属性2
00 00(0)    0000(0)    0000(0)    -30(0)    -30(0)
00 00(0)    0001(1)    0000(0)    -14(16)   -30(0)
00 00(0)    0010(2)    0000(0)    2(32)     -30(0)
00 00(0)    0011(3)    0000(0)    18(48)    -30(0)
00 00(0)    0100(4)    0000(0)    -30(0)    -29(1)  可看做：  000001(-29) 000000(-30)
00 00(0)    1000(8)    0000(0)    -30(0)    -28(2)
00 00(0)    1100(C)    0000(0)    -30(0)    -27(3)
00 01(1)    0000(0)    0000(0)    -30(0)    -26(4)
11 11(F)    0000(0)    0000(0)    -30(0)    30(60)
11 11(F)    1100(0)    0000(0)    -30(0)    33(63)  可看做：  111111(33) 000000(-30)
```

最大极限值必然是 33 33

### 05 & 06 属性分析

效果1由是05控制(八位)重复一次，每2^7重复一次;
效果2和插槽数由06共同控制，每2^6重复一次并且插槽数+1，前4位控制插槽0100(0):无槽、0100(4):1槽、1000(8):2槽、1100(C):3槽，后四位控制效果。代码效果1效果2（插槽）

```
00 - - 
```

无插槽

```
01 胴系统复制 毒
02 毒 睡眠
03 麻痹 耐泥耐雪
04 睡眠 体力
05 气绝 锋利度
06 耐泥耐雪 剑术
07 气配(警惕) 研磨师
08 体力 防御强化
09 回复速度 装填速度
0A 锋利度 通常弹强化
0B 匠 散弹强化
0C 剑术 贯通弹追加
0D 达人 榴弹追加
0E 研磨师 特殊攻击
0F 防御性能 爆弹强化
10 防御强化 大胃王
11 自动防御 防御
12 装填速度 听觉保护
13 反动 广域
14 通常弹强化 火耐性
15 贯通弹强化 雷耐性
16 散弹强化 龙耐性
17 通常弹追加 耐寒
18 贯通弹追加 采取
19 散弹追加 反复无常
1A 榴弹追加 千里眼
1B 扩散弹追加 调和成功率
1C 特殊攻击 回避性能
1D 属性攻击 效果持续
1E 爆弹强化 装填数
1F 饥饿感 食事
20 大胃王 耐震
21 攻击 拔刀会心
22 防御 体术
23 守护 观察眼
24 听觉守护 拔刀减气
25 偷盗无效 逆境
26 广域 肥料
27 搬运 毒瓶追加
28 火耐性 睡眠瓶追加
29 水耐性 追击瓶追加
2A 雷耐性 炮术
2B 冰耐性 猎人
2C 龙耐性 火属性攻击
2D 耐属 雷属性攻击
2E 耐寒 龙属性攻击
2F 风压 减气瓶追
30 采取 重击
31 高速收集 减气攻击
32 反复无常 气力回复
33 运气 毒无效
34 千里眼 麻醉无效
35 回复量 睡眠无效
36 调和成功率 气绝确率减半
37 调和数 气绝倍加
38 回避性能 隐蔽
39 底力 体力+20
3A 效果持续 体力-10
3B 耐力 回复速度+1
3C 装填数 回复速度-1
3D 精密射击 利刃
3E 食事 锋利度等级+1
3F 剥取 见切+1
40 耐震
```

1插槽

```
41 回避距离 毒
42 拔刀会心 睡眠
43 高速设置 耐泥耐雪
44 体术 体力
45 捕获 锋利度
46 观察眼 剑术
47 溜短缩 研磨师
48 拔刀减气 防御强化
49 属性耐性 装填速度
4A 逆境 通常弹强化
4B 速射 散弹强化
4C 肥料 贯通弹追加
4D 抗菌 榴弹增加
4E 毒瓶追加 特殊攻击
4F 麻痹瓶追加 爆弹强化
50 睡眠瓶追加 大胃王
51 强击瓶追加 防御
52 接击瓶追加 听觉保护
53 笛 广域
54 炮术 火耐性
55 本气(认真) 雷耐性
56 猎人 龙耐性
57 对防御down 耐寒
58 火属性攻击 采取
59 水属性攻击 反复无常
5A 雷属性攻击 千里眼
5B 冰属性攻击 调和成功率
5C 龙属性攻击 回避性能
5D 断裂弹追加 效果持续
5E 减气瓶追加 装填数
5F 痛击 食事
60 重击 耐震
61 KO 拔刀会心
62 减气攻击 体术
63 收刀 观察眼
64 气力回复 拔刀减气
65 - 逆境
66 毒无效 肥料
67 毒倍加 毒瓶追加
68 麻痹无效 睡眠瓶增加
69 麻痹倍加 接击瓶追加
6A 睡眠无效 炮术
6B 睡眠倍加 猎人
6C 气绝确率减半 火属性攻击
6D 气绝无效 雷属性攻击
6E 气绝倍加 龙属性攻击
6F 泥&雪无效 减气瓶追加
70 隐蔽 重击
71 挑拨 减气攻击
72 体力+20 气力回复
73 体力+50 毒无效
74 体力-10 麻痹无效
75 体力-30 睡眠无效
76 回复速度+1 气绝确率减半
77 回复速度+2 气绝倍加
78 回复速度-1 隐蔽
79 回复速度-2 体力+20
7A 利刃 体力-10
7B 钝刀 回复速度+1
7C 锋利度等级+1 回复速度-1
7D 心眼 利刃
7E 见切+1 锋利度等级+1
7F 见切+2 见切+1
80 - 胴系统复制
```

2插槽

```
81 胴系统复制 麻痹
82 毒 气绝
83 麻痹 气配(警惕)
84 睡眠 回复速度
85 气绝 匠
86 耐泥耐雪 达人
87 气配(警惕) 防御性能
88 体力 自动防御
89 回复速度 反动
8A 锋利度 贯通弹强化
8B 匠通 常弹追加
8C 剑术 散弹追加
8D 达人 扩散弹追加
8E 研磨师 属性攻击
8F 防御性能 饥饿感
90 防御强化 攻击
91 自动防御 守护
92 装填速度 偷盗无效
93 反动 搬运
94 通常弹强化 水耐性
95 贯通弹强化 冰耐性
96 散弹强化 耐暑
97 通常弹强化 风压
98 贯通弹追加 高速收集
99 散弹追加 运气
9A 榴弹追加 回复量
9B 扩散弹追加 调和数
9C 特殊攻击 底力
9D 属性攻击 耐力
9E 爆弹强化 精密射击
9F 饥饿感 剥取
A0 大胃王 回避距离
A1 攻击 高速设置
A2 防御 捕获
A3 守护 蓄力缩短
A4 听觉保护 属性耐性
A5 偷盗无效 速射
A6 广域 抗菌
A7 搬运 麻痹瓶追加
A8 火耐性 强击瓶追加
A9 水耐性 笛
AA 雷耐性 本气(认真)
AB 冰耐性 对防御down
AC 龙耐性 水属性攻击
AD 耐暑 冰属性攻击
AE 耐寒 斩裂弹追加
AF 风压 痛击
B0 采取 KO
B1 高速收集 收刀
B2 反复无常 -
B3 运气 毒倍加
B4 千里眼 麻痹倍加
B5 回复量 睡眠增加
B6 调和成功率 气绝无效
B7 调和数 泥&雪无效
B8 回避性能 挑衅
B9 底力 体力+50
BA 效果持续 体力-30
BB 耐力 回复速度+2
BC 装填数 回复速度-2
BD 精密射击 钝刀
BE 食事 心眼
BF 剥取 见切+2
C0 耐震 胴系统复制
```

3插槽

```
C1 回避距离 麻痹
C2 拔刀会心 气绝
C3 高速设置 气配(警惕)
C4 体术 回复速度
C5 捕获 匠
C6 观察眼 达人
C7 溜短缩 防御性能
C8 拔刀减气 自动防御
C9 属性 耐性反动
CA 逆境 贯通弹强化
CB 速射 通常弹追加
CC 肥料 散弹追加
CD 抗菌 扩散弹追加
CE 毒瓶追加 属性攻击
CF 麻痹瓶追加 饥饿感
D0 睡眠瓶追加 攻击
D1 强击瓶追加 守护
D2 接击瓶追加 偷盗无效
D3 笛 搬运
D4 炮术 水耐性
D5 本气(认真) 冰耐性
D6 猎人 耐暑
D7 对防御down 风压
D8 火属性攻击 高速收集
D9 水属性攻击 运气
DA 雷属性攻击 回复量
DB 冰属性攻击 调和数
DC 龙属性攻击 底力
DD 断裂弹追加 耐力
DE 减气瓶追加 精密射击
DF 痛击 剥取
DG 重击 回避距离
E0 KO 高速设置
E1 减气攻击 捕获
E2 收刀 蓄力缩短
E3 气力回复 属性耐性
E4 - 速射
E5 毒无效 抗菌
E6 毒倍加 麻痹瓶追加
E7 麻痹无效 强击瓶追加
E8 麻痹倍加 笛
E9 睡眠无效 本气(认真)
EA 睡眠倍加 对防御down
EB 气绝确率减半 水属性攻击
EC 气绝无效 冰属性攻击
ED 气绝倍加 斩裂弹追加
EF 泥&雪无效 痛击
F0 隐蔽 KO
F1 挑拨 收刀
F2 体力+20 -
F3 体力+50 毒倍加
F4 体力-10 麻痹倍加
F5 体力-30 睡眠增加
F6 回复速度+1 气绝无效
F7 回复速度+2 泥&雪无效
F8 回复速度-1 挑衅
F9 回复速度-2 体力+50
FA 利刃 体力-30
FB 钝刀 回复速度+2
FC 锋利度等级+1 回复速度-2
FD 心眼 钝刀
FE 见切+1 心眼
FF 见切+2 见切+2
```

## 附录

### 装饰品代码

```
2F 03 耐绝珠 1
30 03 制绝珠 2
31 03 耐痹珠 1
32 03 耐痹珠 2
33 03 耐眠珠 1
34 03 耐眠珠 2
35 03 耐毒珠 1
36 03 耐毒珠 2
37 03 耐防珠 1
38 03 防盗珠 1
39 03 耐粘珠 1
3A 03 抗粘珠 1
3B 03 耐菌珠 1
3C 03 抗菌珠 1
3D 03 耐震珠 1
3E 03 抗震珠 1
3F 03 耐暑珠 1
40 03 耐寒珠 1
41 03 防音珠 1
42 03 防音珠 3
43 03 防风珠 1
44 03 防风珠 2
45 03 攻击珠 1
46 03 攻击珠 2
47 03 攻击珠 3
48 03 达人珠 1
49 03 达人珠 2
4A 03 达人珠 3
4B 03 特攻珠 1
4C 03 特攻珠 2
4D 03 属攻珠 1
4E 03 属攻珠 3
4F 03 火炎珠 1
50 03 火炎珠 2
51 03 流水珠 1
52 03 流水珠 2
53 03 雷光珠 1
54 03 雷光珠 2
55 03 冰结珠 1
56 03 冰结珠 2
57 03 破龙珠 1
58 03 破龙珠 2
59 03 痛击珠 1
5A 03 痛击珠 3
5B 03 重击珠 1
5C 03 重击珠 3
5D 03 装填珠 1
5E 03 装填珠 3
5F 03 短缩珠 1
60 03 短缩珠 3
61 03 全开珠 1
62 03 全开珠 2
63 03 KO珠 1
64 03 KO珠 2
65 03 夺气珠 1
66 03 夺气珠 2
67 03 底力珠 1
68 03 底力珠 2
69 03 逆境珠 1
6A 03 逆境珠 2
6B 03 爆师珠 1
6C 03 鼓笛珠 1
6D 03 炮术珠 1
6E 03 防御珠 1
6F 03 防御珠 2
70 03 属耐珠 1
71 03 属耐珠 3
72 03 耐火珠 1
73 03 制火珠 1
74 03 耐水珠 1
75 03 制水珠 1
76 03 耐雷珠 1
77 03 制雷珠 1
78 03 耐冰珠 1
79 03 制冰珠 1
7A 03 耐龙珠 1
7B 03 制龙珠 1
7C 03 加护珠 1
7D 03 神护珠 1
7E 03 体力珠 1
7F 03 早复珠 1
80 03 早复珠 2
81 03 治愈珠 1
82 03 治愈珠 2
83 03 回避珠 1
84 03 回避住 2
85 03 跳跃珠 1
86 03 跳跃珠 3
87 03 速纳珠 1
88 03 速纳珠 2
89 03 民师珠 1（陷阱那个）
8A 03 早食珠 1
8B 03 早食珠 3
8C 03 强走珠 1
8D 03 强走珠 3
8E 03 体术珠 1
8F 03 体术珠 2
90 03 早气珠 1
91 03 早气珠 2
92 03 无食珠 1
93 03 食汉珠 1
94 03 运气珠 1
95 03 运气珠 3
96 03 捕获珠 1
97 03 捕获珠 1
98 03 皮剥珠 1
99 03 皮剥珠 3
9A 03 搬运珠 1
9B 03 采取珠 1
9C 03 速集珠 1
9D 03 祝福珠 1
9E 03 友爱珠 1
9F 03 友爱珠 2
A0 03 千里珠 1
A1 03 博士珠 1
A2 03 弹裂珠 1
A3 03 持续珠 1
A4 03 观察珠 1
A5 03 肥师珠 1
A6 03 狩人珠 1
A7 03 忍脚珠 1
A8 03 匠珠 1
A9 03 匠珠 3
AA 03 剑豪珠 1
AB 03 剑豪珠 3
AC 03 斩铁珠 1
AD 03 斩铁珠 3
AE 03 拔刀珠 1
AF 03 拔刀珠 2
B0 03 拔打珠 1
B1 03 拔打珠 3
B2 03 铁壁珠 1
B3 03 铁壁珠 2
B4 03 强壁珠 1
B5 03 强壁珠 2
B6 03 研磨珠 1
B7 03 强弹珠 1
B8 03 强弹珠 3
B9 03 贯通珠 1
BA 03 贯通珠 3
BB 03 散弹珠 1
BC 03 散弹珠 3
BD 03 加弹珠 1
BE 03 加弹珠 2
BF 03 加贯珠 1
C0 03 加散珠 1
C1 03 加榴珠 1
C2 03 加扩珠 1
C3 03 加斩珠 1
C4 03 速射珠 1
C5 03 速射珠 3
C6 03 早填珠 1
C7 03 早填珠 2
C8 03 抑反珠 1
C9 03 抑反珠 3
CA 03 点射珠 1
CB 03 痹瓶珠 1
CC 03 痹瓶珠 2
CD 03 眠瓶珠 1
CE 03 毒瓶珠 1
CF 03 强瓶珠 1
D0 03 强瓶珠 2
D1 03 接瓶珠 1
D2 03 灭瓶珠 1
```

未完持续......