const tantip_html = `
<div id="tantip">
<div id="tantip-btn">
    <p class="tantip-btn-p">赞</p>
    <p class="tantip-btn-p">助</p>
</div>

<div id="tantip-main" style="display: none;">
    <div id="tantip-main-header">
        <p class="tantip-main-p">
            喜欢就请打赏吧
        </p>
    </div>

    <div id="tantip-main-content">
        <div id="tantip-main-content-img-div">

            <img id="tantip-img-frame" src="https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/ali.png" alt="">
        </div>

        <div id="tantip-main-content-chimg">
            <div id="ch2alpay" class="tantip-main-content-chimg-item">
                <img class="tantip-chimg-item-img"
                    src="https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/alipay-text.png" alt="">
            </div>
            <div id="ch2wechat" class="tantip-main-content-chimg-item">
                <img class="tantip-chimg-item-img"
                    src="https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/wechat-text.png" alt="">
            </div>
        </div>
    </div>

    <div id="tantip-main-footer">
        <p class="tantip-main-p">
            <a class="tantip-main-p-a" href="https://github.com/tanyiqu/tantip-cnblogs" target="_blank">关于插件</a>
        </p>
    </div>
</div>
</div>
`;

let tantip_config = {
    title: '赞助',
    ali: 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/ali.png',
    wechat: 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/we.png',
};

class Tantip {
    constructor(config) {
        this.config = config;
    }

    /**
     * 加载tantip的事件
     */
    loadEvent() {
        let tantip = document.querySelector('#tantip');
        let tantip_main = document.querySelector('#tantip-main');
        // 鼠标移入移除事件
        {
            tantip.onmouseenter = () => {
                tantip_main.style.display = 'block';
            };

            tantip.onmouseleave = () => {
                tantip_main.style.display = 'none';
            };
        }

        // 切换二维码
        {
            let ch2alpay = document.querySelector('#ch2alpay');
            let ch2wechat = document.querySelector('#ch2wechat');
            let imgDiv = document.querySelector('#tantip-main-content-img-div');
            let qr = document.querySelector('#tantip-img-frame');

            ch2alpay.onmouseenter = () => {
                imgDiv.style.backgroundImage = "url(https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/alipay-frame.png)"; //设置背景图的的地址
                imgDiv.style.backgroundRepeat = "no-repeat";
                imgDiv.style.backgroundPosition = "center";
                imgDiv.style['background-size'] = '60%';
                qr.src = this.config.ali;
            };

            ch2wechat.onmouseenter = () => {
                imgDiv.style.backgroundImage = "url(https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/wechat-frame.png)"; //设置背景图的的地址
                imgDiv.style.backgroundRepeat = "no-repeat";
                imgDiv.style.backgroundPosition = "center";
                imgDiv.style['background-size'] = '60%';
                qr.src = this.config.wechat;
            };
        }
    }

    mount() {
        // 追加样式
        let style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/tantip.css';
        document.body.appendChild(style);

        let tantip = document.createElement('div');
        tantip.innerHTML = tantip_html;
        document.body.appendChild(tantip);
        this.loadEvent();
    }

}
