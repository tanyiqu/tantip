# tantip
用于cnblogs的打赏插件



使用方法

在页首html里加上如下代码：

```html
<script src="https://blog-static.cnblogs.com/files/tanyiqu/tantip.js"></script>
<script>
    tantip_config.ali = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/ali.png';
    tantip_config.wechat = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/we.png';
    new Tantip(tantip_config).mount();
</script>
```

