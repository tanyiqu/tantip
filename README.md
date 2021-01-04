# tantip
用于cnblogs的打赏插件



## 预览

#### 默认样式

![](https://tanyiqu.gitee.io/tantip-cnblogs/img/默认样式.jpg)



#### 激活样式

![](https://tanyiqu.gitee.io/tantip-cnblogs/img/激活样式.jpg)



## 使用方法

在**博客侧边栏公告**里加上如下代码：

```html
<script src="https://tanyiqu.gitee.io/tantip-cnblogs/dist/1.2.1/tantip.js"></script>

<script>
    tantip_config.title = '打赏';        // 可不填
    tantip_config.text = '喜欢就打赏吧';   // 可不填
    tantip_config.ali = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/ali.png';
    tantip_config.wechat = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/we.png';
    new Tantip(tantip_config).mount();
</script>
```



## 更新日志

### v1.2.1 2021.1.4 

- 修复支付宝二维码没有蓝色框的bug

<br>

### v1.2 2020.12.24

- 将图片替换为矢量图，避免缩放影响图片观看效果

<br>

### v1.1 2020.12.16

- 适配所有css模板

<br>

### v1.0 2020-12-09

- 发布第一版