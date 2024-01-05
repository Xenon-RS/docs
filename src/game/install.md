---
title: 游戏安装教程
---

## Step1 下载并解压游戏

[游戏下载链接（访问码：qu5i）](https://cloud.189.cn/t/iuQ3iifq6vQv)

下载完成后请自行解压游戏，压缩包内自带一个WMMT6R文件夹，双击打开然后将其拖放出来其实就可以了

::: warning 注意！
推荐使用[Bandzip](https://www.bandisoft.com/bandizip/)进行解压  
其他解压软件可能导致游戏本体无法正常运行  
:::

## Step2 下载并配置游戏运行库

游戏的运行需要用到以下几个运行库  

```
1. C++所有运行库
2. Runtime
3. Node.js
```

在此提供以上所有运行库的下载方式，请您遵照教程继续进行前先下载完毕

[运行库下载链接（提取码:1145）](https://www.123pan.com/s/RY30Vv-aEV9h.html)  

**下载完成后，则可以开始配置游戏运行库了**  

### 配置C++所有运行库  

1. 打开该文件

![pic1](https://pic2.imgdb.cn/item/644d2cbc0d2dde5777e1aa69.jpg)

2. 双击打开**DirectX Repair.exe**(若需要申请管理员权限则点击**是**)

![pic2](https://pic2.imgdb.cn/item/644d2d350d2dde5777e215a4.jpg)
 
3. 点击**检测并修复**，等待其修复完毕即可

![pic3](https://pic2.imgdb.cn/item/644d2da70d2dde5777e27e00.jpg)

::: caution 警告！
若最后修复C++过程中遇到无法安装问题，请继续即可  
一般并不影响游戏运行  
:::

### 配置Runtime

1. 打开该文件

![pic1](https://pic2.imgdb.cn/item/644d2f300d2dde5777e416ce.jpg)

2. 将图片内文件拖放解压到**C盘根目录**即可

![pic2](https://pic2.imgdb.cn/item/644d2f780d2dde5777e45ee2.jpg)

3. 右键，以**管理员方式**运行**REG.bat**文件

> 若一瞬间弹出了几个黑色cmd窗口则说明已成功

![pic3](https://pic2.imgdb.cn/item/644d2ff40d2dde5777e4e50f.jpg)

### 配置Node.js

1. 打开该文件

![pic1](https://pic2.imgdb.cn/item/644d30980d2dde5777e58b41.jpg)

2. 点击**Next**(一直点击Next即可，不需要更改任何内容，傻瓜式下一步安装）

![pic2](https://pic2.imgdb.cn/item/644d30c50d2dde5777e5bffe.jpg)

3. 安装完毕后就可以了

## Step3 注册iauthdll.dll文件

1. 打开WMMT6R/AMCUS文件夹
2. 在文件管理器的地址栏处点击一下，然后**右键复制路径**

![pic1](https://pic2.imgdb.cn/item/644d32210d2dde5777e77bf4.jpg)

3. 在Windows徽标上右键，并点击**终端管理员**

![pic2](https://pic2.imgdb.cn/item/644d32d10d2dde5777e83342.jpg)

::: tip 提示
若您的系统是Windows7/8/8.1，打开终端的方式可能与图并不一样  
您需要遵照以下方法，使用cmd进行代替  
1. 点击**Windows徽标**  
2. 在所有软件中，找到**命令提示符**  
3. 右键，点击**以管理员身份运行**  
4. 打开完毕  

[若文字表示看不懂的话可参考该链接](http://www.65ly.com/a/07/1670375990127435.html)  
:::

4. 在终端窗口中，输入代码: `cd 地址` (**地址**两字请使用**你刚才复制的地址**所替换)，输入完毕后**按下回车**即可

如图示例：

![pic3](https://pic2.imgdb.cn/item/644d35140d2dde5777eac525.jpg)

5. 输入代码： `regsvr32 iauthdll.dll`，**按下回车**即可

如图示例：

![pic4](https://pic2.imgdb.cn/item/644d35ad0d2dde5777eb5e5b.jpg)

按下回车后，**必须出现**以下图片所示窗口，才算成功，**否则请检查您是否有使用管理员运行**

![pic5](https://pic2.imgdb.cn/item/644d35e40d2dde5777eb9d51.jpg)

## Step4 配置Hosts文件

打开系统设置，打开**网络与Internet**，然后根据您目前连接的网络（WLAN/以太网），点击相对应的选项

以以太网为例，进入后应当如图所示：

![pic1](https://pic.imgdb.cn/item/63fb3727f144a010072e01ae.jpg)

我们需要知道该网络使用的适配器名字，在下面**描述**中可以看到适配器名  
按照图中举例为`Realtek Gaming 2.5GbE Family Controller`  
请记住该适配器名，后续配置网络将要用到  

接着按下`Windows徽标键 + R键（Win+R）`，打开`运行`窗口  
在该窗口输入`cmd`，并且回车，此时会打开`cmd/终端窗口`  

输入以下代码：
`ipconfig /all`  
回车，会列出当前所有网络适配器的具体信息  
按照之前我们所记住的适配器名，我们找到对应的那一部分  
如图为例，之前我们记住的适配器名为`Realtek Gaming 2.5GbE Family Controller`：

![pic2](https://pic.imgdb.cn/item/63fb33c7f144a0100727750a.jpg)

我们记住这一部分中的`默认网关与IPV4地址`，后续将要用到  
然后，我们就要开始配置hosts文件了  

打开以下路径：`C:\Windows\System32\drivers\etc`
找到hosts文件，右键将其使用文本打开(推荐使用NotePad++，可在百度上或者是群内下载安装)  

按照图例与下方给出的代码，将其对应着填写至您的hosts文件里（请不要填错！）  
```
替换为默认网关    tenporouter.loc
替换为默认网关    bbrouter.loc
替换为服务器IP    naominet.jp
```

**服务器IP请至服务器群内公告或找人进行询问获取**  
图片为正确填写的例子：

![pic3](https://pic.imgdb.cn/item/63fb3544f144a0100729d6c8.jpg)

建议填写后**往下回车空多几行**，以免其他软件使用hosts文件时导致最后一行丢失  
最后**保存**即可

## Step5 配置TP模拟器网络

在`WMMT6R`文件夹中，打开`TP_MutiPlayer`文件夹

双击打开程序：`TeknoParrotUi.exe`

点击`游戏设定`，然后跟着图片步骤做

![pic1](https://pic2.imgdb.cn/item/644d3a750d2dde5777f30157.jpg)

![pic2](https://pic2.imgdb.cn/item/644d3a9c0d2dde5777f34be9.jpg)

![pic2-1](https://pic2.imgdb.cn/item/644d3b930d2dde5777f4ec5b.jpg)

![pic3](https://pic2.imgdb.cn/item/644d3ad80d2dde5777f3e27d.jpg)

::: tip 提示
默认网关和IPV4地址在[Step4](#step4-配置hosts文件)中获取过  
:::

![pic4](https://pic2.imgdb.cn/item/644d3b220d2dde5777f459fa.jpg)

**至此，TP模拟器网络配置完毕**  

## Step6 配置操控

顾名思义，就是要配置游戏的控制器

此处分为两种情况，一种是`PS系列手柄/键盘/方向盘`，另一种是`XBOX系列手柄/第三方手柄（如北通等）`

根据自身情况选择

### PS系列手柄

1. 游戏设定中该项必须是`DirectInput`

![di](https://pic2.imgdb.cn/item/644d3ca20d2dde5777f5ff3d.jpg)

2. 进入主页中的`控制器设置`，根据左侧提示自行设置按钮

**警告**

由于PS系列手柄的特性，在方向与油门刹车设置的时候  
请在保持**打盘打死/油门刹车踩死**的情况下再去设置下一个按键  

3. 在主页的左上角点击**三条杠按钮**，点击设置

![pic2](https://pic2.imgdb.cn/item/644d3d5c0d2dde5777f6c13c.jpg)

4. 将该处设置成与图片一样的形式

![pic3](https://pic2.imgdb.cn/item/644d3d7d0d2dde5777f6e29d.jpg)

### 键盘/方向盘

1. 游戏设定中该项必须是`DirectInput`

![di](https://pic2.imgdb.cn/item/644d3ca20d2dde5777f5ff3d.jpg)

2. 进入主页中的`控制器设置`，根据左侧提示自行设置按钮

### XBOX系列手柄/第三方手柄（如北通等）

1. 游戏设定中该项必须是`XInput`

![X](https://pic2.imgdb.cn/item/644d3dca0d2dde5777f72a10.jpg)

2. 进入主页中的`控制器设置`，根据左侧提示自行设置按钮


**设置完毕后，即可保存并关闭TP模拟器**


## FinalStep 运行游戏

### 1.运行MaxiTerminal

打开文件夹：WMMT\MaxiTerminal  
双击运行run.bat文件即可  
正常运行应该如图所示：  

![1](https://pic.imgdb.cn/item/63fb452ef144a0100741dd5a.jpg)

若与图片不一样，请确保您没有使用管理员方式进行打开  
部分电脑的出厂预装系统（如联想拯救者）会采用默认所有软件使用管理员方式打开，具体取消操作将会在`安装过程中的问题`部分中讲解如何取消

### 2.运行AMAuthd.exe

打开文件夹：WMMT\AMCUS  
双击运行AMAuthd.exe即可（若您使用管理员方式打开，将会无任何信息显示，请使用非管理员方式打开）  
正常运行应该如图所示（最后一行应该为none）  

![2](https://pic.imgdb.cn/item/63fb463cf144a01007432e86.jpg)

### 3.运行TP模拟器

打开文件夹：`WMMT\TP_MutiPlayer_6R`  
运行程序：`TeknoParrotUi.exe`  
点击`LAUNCH GAME`即可启动游戏  
若网络没有配置错误的话 游戏过机修菜单时将不会报任何错误，直接可以进入游戏界面  
默认配置的刷卡键是`backscape（退格）`键，进入游戏后按该键即可刷卡