# 游戏安装教程

## Step1 下载并解压游戏

游戏本体下载：[W6R下载](https://files.kksk-blog.site/Xenon/Game%20Archive/W6R)

> 若无法下载或下载速度异常请使用本链接：<br>[天翼云盘（访问码：4uik）](https://cloud.189.cn/t/Fz2MFb7bIbYv)

> 大陆境外玩家请使用本链接（墙外网络）：<br>[Google Drive](https://drive.google.com/file/d/1nOurfdJvOV_KuMB7l7wTzTjcKNvATnNk/view?usp=sharing)

下载完成后请自行解压游戏，压缩包内自带一个WMMT6R文件夹，双击打开然后将其拖放出来其实就可以了

::: warning 注意！
推荐使用[Bandizip](https://www.bandisoft.com/bandizip/)进行解压  
其他解压软件可能导致游戏本体无法正常运行  
:::

## Step2 下载并配置游戏运行库

请前往下载游戏的运行库

[运行库下载链接](https://files.kksk-blog.site/Xenon/Runtimes)  

> 若无法下载或下载速度异常请使用本链接：<br>[天翼云盘（访问码：cvo1）](https://cloud.189.cn/t/faqmuei6B73a)

**下载完成后，请将其压缩包进行解压**  

### 安装C++运行库

1. 打开该文件

![pic1](https://pic2.imgdb.cn/item/644d2cbc0d2dde5777e1aa69.jpg)

2. 双击打开**DirectX Repair.exe**(若需要申请管理员权限则点击**是**)

![pic2](https://pic2.imgdb.cn/item/644d2d350d2dde5777e215a4.jpg)
 
3. 点击**检测并修复**，等待其修复完毕即可

![pic3](https://pic2.imgdb.cn/item/644d2da70d2dde5777e27e00.jpg)

::: warning 警告！
若最后修复C++过程中遇到无法安装问题，请继续即可  
一般并不影响游戏运行  
:::

### 安装Runtime

1. 打开该文件

![pic1](https://pic2.imgdb.cn/item/644d2f300d2dde5777e416ce.jpg)

2. 将图片内文件解压到**C盘根目录**即可

![pic2](https://pic2.imgdb.cn/item/644d2f780d2dde5777e45ee2.jpg)

3. 右键，以**管理员方式**运行**REG.bat**文件

> 若一瞬间弹出了几个黑色cmd窗口则说明已成功

![pic3](https://pic2.imgdb.cn/item/644d2ff40d2dde5777e4e50f.jpg)

### 安装Node.js

1. 打开该文件

![pic1](https://pic2.imgdb.cn/item/644d30980d2dde5777e58b41.jpg)

2. 点击**Next**(一直点击Next即可，不需要也不建议更改任何内容，傻瓜式下一步安装）

![pic2](https://pic2.imgdb.cn/item/644d30c50d2dde5777e5bffe.jpg)

3. 安装完毕后就可以了

## Step3 配置 `Hosts` 与注册 `iauthdll`

为了方便玩家的安装，我们特地开发了网络配置检查器。  
您现在只需要按照自动配置部分的教程操作即可。  
除非遇到特殊情况，否则一般来说都不会有异常问题。  

### 自动配置

1. 在服务器群内，下载网络配置检查器：  

> 请下载最新的版本！

![](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/netchecker.png)  

2. 将该软件放置到游戏本体的根目录（与wmn6r.exe同一个文件夹下！）  

![](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/netchecker_path.png)  

3. 检查您电脑**已连接的网络是否有多个**，如果有多个，请**断开并只剩下一个已连接的网络**  

    - 比如：您是否有同时连接有线与无线网络？

4. 启动网络检查工具，如果上述第2步中放置的位置正确的话，将会出现以下类似界面：

![](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/netchecker_1.png)  

5. 在键盘上按 `2`，将会自动配置好 `hosts` 文件！随后按任意键返回刚才的主菜单  

6. 在键盘上按 `3`，将会自动注册好 `iauthdll.dll` 文件！随后您便可以退出本程序  

### 手动配置

如果使用自动配置的过程中出现了异常问题，请按照手动配置的教程进行配置！

::: details 手动配置教程
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
找到hosts文件，使用NotePad++打开，在群内下载安装  

按照图例与下方给出的代码，将其对应着填写至您的hosts文件里（请不要填错！）  
```
替换为默认网关    tenporouter.loc
替换为默认网关    bbrouter.loc
替换为服务器IP    naominet.jp
```

**服务器IP请至服务器群内公告或找人进行询问获取**  
图片为正确填写的例子：  

![pic3](https://pic.imgdb.cn/item/63fb3544f144a0100729d6c8.jpg)  

**不要直接抄图片里的地址！你的网络不是我的网络！地址是不同的！**  
**一定要按照你上述操作所显示的地址填写！**  

建议填写后**往下回车空多几行**，以免其他软件使用hosts文件时导致最后一行丢失  
最后**保存**即可  
:::

## Step4 配置TP模拟器网络

在 `WMMT6R` 文件夹中，打开 `TP_MutiPlayer` 文件夹

选择您希望使用的TP版本，有新有旧，但推荐使用新版，选择一个版本，并进入其对应的文件夹：  

![](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_version.png)

### 新版本TP配置教程

双击打开程序：`TeknoParrotUi.exe`  

按照图片顺序操作：

1. 
![1](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/1.png)  

2. 
![2](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/2.png)  

3. 
![3](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/3.png)  

4. 
![4](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/4.png)  

::: tip 提示
IPv4地址可在网络配置检查器中的第1个功能获取：
![4_1](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/4_1.png)  
**但不要直接抄图片里的地址！你的网络不是我的网络！地址是不同的！**  
:::

5. 上述步骤做完后，请关闭TP模拟器，然后按照以下步骤操作  

    1. 右键 `TeknoParrotUi.exe`，点击属性  
    ![8](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/8.png)  

    2. 按照图片设置并应用  
    ![9](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/9.png)  

### 旧版本TP配置教程

::: details 配置教程
双击打开程序：`TeknoParrotUi.exe`

点击`游戏设定`，然后跟着图片步骤做

![pic1](https://pic2.imgdb.cn/item/644d3a750d2dde5777f30157.jpg)

![pic2](https://pic2.imgdb.cn/item/644d3a9c0d2dde5777f34be9.jpg)

![pic2-1](https://pic2.imgdb.cn/item/644d3b930d2dde5777f4ec5b.jpg)

![pic3](https://pic2.imgdb.cn/item/644d3ad80d2dde5777f3e27d.jpg)

> [!TIP] 提示
> 默认网关和IPV4地址在[Step3](#step3-配置-hosts-与注册-iauthdll)中获取过  

![pic4](https://pic2.imgdb.cn/item/644d3b220d2dde5777f459fa.jpg)
:::

## Step5 配置操控

顾名思义，就是要配置游戏的控制器

此处分为两种情况，一种是`PS系列手柄/键盘/方向盘`，另一种是`XBOX系列手柄/第三方手柄（如北通等）`  

根据自身情况选择  

该部分配置新旧TP都是差不多的，按照步骤配置即可  

**首先先在下面确定自己的控制器，按照步骤做好**

### PS系列手柄

1. 游戏设定中该项必须是`DirectInput`

![di](https://pic2.imgdb.cn/item/644d3ca20d2dde5777f5ff3d.jpg)

2. 进入主页中的`控制器设置`，根据左侧提示自行设置按钮

::: danger 警告
由于PS系列手柄的特性，在方向与油门刹车设置的时候  
请在保持**打盘打死/油门刹车踩死**的情况下再去设置下一个按键  
:::

3. 在主页的左上角点击**三条杠按钮**，点击设置

![pic2](https://pic2.imgdb.cn/item/644d3d5c0d2dde5777f6c13c.jpg)

4. 将该处设置成与图片一样的形式

![pic3](https://pic2.imgdb.cn/item/644d3d7d0d2dde5777f6e29d.jpg)

### 键盘/方向盘

- 游戏设定中该项必须是`DirectInput`

![di](https://pic2.imgdb.cn/item/644d3ca20d2dde5777f5ff3d.jpg)  

- **如果是键盘**，则请将 `General - Use Keyboard/Button For Axis` 这项打开！

### XBOX系列手柄/第三方手柄（如北通等）

- 游戏设定中该项必须是`XInput`

![X](https://pic2.imgdb.cn/item/644d3dca0d2dde5777f72a10.jpg)


**上述设置好后，即可开始配置游戏按键**  

根据图片，自行设置好按键（大部分都需要设置）

1. 
![5](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/5.png)  
2. 
![6](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/6.png)  
![7](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/TP_New/7.png)  

## FinalStep 运行游戏

### 1.运行MaxiTerminal

打开文件夹：`MaxiTerminal`  
双击运行 `run.bat` 文件即可  
正常运行类似图片这样（不会有一堆乱码报错）：  

![1](https://pic.imgdb.cn/item/63fb452ef144a0100741dd5a.jpg)

若与图片不一样，请确保您没有使用管理员方式进行打开  

### 2.运行AMAuthd.exe

::: warning 提醒
如果在刚才配置TP模拟器的时候，您**使用新版本的TP**，**则无需执行此步**。因为TP会将其一并启动！
:::

打开文件夹：`WMMT\AMCUS`  
双击运行AMAuthd.exe即可（若您使用管理员方式打开，将会无任何信息显示，请使用非管理员方式打开）  
正常运行应该如图所示（最后一行应该为none）  

![2](https://pic.imgdb.cn/item/63fb463cf144a01007432e86.jpg)

### 3.运行TP模拟器

打开文件夹：`WMMT\TP_MutiPlayer_6R`  
运行程序：`TeknoParrotUi.exe`  
点击 `LAUNCH GAME` / `启动游戏` 即可启动游戏  
若网络没有配置错误的话，游戏过机修菜单时将不会报任何错误，直接可以进入游戏界面  
如果您使用的是本教程提供的本体，则**默认配置的刷卡键**是 `backscape（退格）` 键（位于ENTER键上方），进入游戏后按该键即可刷卡  