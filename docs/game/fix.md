# 游戏问题修复

此处汇集安装/游玩过程中遇见的常见问题，并给出具体的解决办法

## 更换网络环境导致游戏连不上网

由于不同的网络，其IPv4与默认网关地址也各不相同，因此我们需要重新配置地址。  

::: tip 解决方法
- 修复hosts:   
    请执行一次安装教程的[Step3](/game/install.html#step3-配置-hosts-与注册-iauthdll)部分  
- 修复TP模拟器内网络配置：  
    请执行一次安装教程的[Step4](/game/install.html#step4-配置tp模拟器网络)中，第4张图片的三个网络地址填写  

```text
Network - ServerIP ===> 填写服务器的IP
Network - Port ===> 直接填写80
General - NetworkAdapterIP ===> 请填写你的IPv4地址
```
:::

安装解决方法，将上述两个地方修复完成后，您的游戏就可以恢复正常联网了。  

## 进入游戏报错E2401

::: tip 解决方法
请检查TP设置内的 `NetworkAdapterIP` 是否填写为当前网络的IPv4地址  
:::

## 进入游戏报错E0552

::: tip 解决方法
请检查 `hosts` 中是否已经配置游戏网络，且 `iauthdll.dll` 是否已经注册  
:::

## 进入游戏一直显示连接终端机

如图所示问题：  

![](https://cdn.jsdelivr.net/gh/kKsk03/pics/web/wmmt/problem/terminal.jpg)  

::: tip 解决方法
首先先确保您TP模拟器中的 `NetworkAdapterIP` 地址填写正确。  
如果填写正确，请确保 `Maxi Terminal` 已经启动（双击 `run.bat` 以启动）  

如果上述方法依然不行，则执行以下方法：  
前往 `控制面板` => `查看网络状态和任务` => `更改适配器设置`  
将除了正在使用的网卡驱动之外的网卡全部禁用  
:::

## `AMAuthd.exe` 的最后一行不是 `none`

::: tip 解决方法
请执行一次安装教程的[Step3](/game/install.html#step3-配置-hosts-与注册-iauthdll)部分  
:::