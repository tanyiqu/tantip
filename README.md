# tantip
用于cnblogs的打赏插件



使用方法

在**博客侧边栏公告**里加上如下代码：

```html
<script src="https://tanyiqu.gitee.io/tantip-cnblogs/dist/1.0/tantip.js"></script>

<script>
    tantip_config.title = '打赏';
    tantip_config.text = '喜欢就打赏吧';
    tantip_config.ali = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/ali.png';
    tantip_config.wechat = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/we.png';
    new Tantip(tantip_config).mount();
</script>
```

