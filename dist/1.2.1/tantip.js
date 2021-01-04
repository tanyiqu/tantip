const tantip_version = 'v1.2.1';

const alipay_frame_url = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/alipay-frame.svg';
const wechat_frame_url = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/wechat-frame.svg';
const alipay_text_utl = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/alipay-text.svg';
const wechat_text_utl = 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/wechat-text.svg';

const tantip_css = 'https://tanyiqu.gitee.io/tantip-cnblogs/dist/1.2.1/tantip.css'


const tantip_html = `
<div id="tantip">
    <div class="tantip-btn">
    </div>

    <div class="tantip-main">
        <div class="tantip-main-header">
        </div>

        <div class="tantip-main-content">
            <div id="qr-frame">
                <img id="tantip-img-frame" src="https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/ali.png" alt="">
            </div>

            <div id="change-qr">
                <div id="ch2alpay" class="qr-item">
                    <img class="qr-item-img" src="${alipay_text_utl}" alt="">
                </div>
                <div id="ch2wechat" class="qr-item">
                    <img class="qr-item-img" src="${wechat_text_utl}" alt="">
                </div>
            </div>
        </div>

        <div class="tantip-main-footer">
            <p>
                <a href="https://github.com/tanyiqu/tantip-cnblogs" target="_blank">关于插件 ${tantip_version}</a>
            </p>
        </div>
    </div>
</div>
`;

let tantip_config = {
    title: '赞助',
    text: '喜欢就请打赏吧',
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
        let tantip_main = document.querySelector('.tantip-main');
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
            // 二维码框
            let imgDiv = document.querySelector('#qr-frame');
            // 二维码
            let qr = document.querySelector('#tantip-img-frame');

            ch2alpay.onmouseenter = () => {
                imgDiv.style.backgroundImage = `url(${alipay_frame_url})`;
                imgDiv.style.backgroundRepeat = "no-repeat";
                imgDiv.style.backgroundPosition = "center";
                imgDiv.style['background-size'] = '60%';
                qr.src = this.config.ali;
            };

            ch2wechat.onmouseenter = () => {
                imgDiv.style.backgroundImage = `url(${wechat_frame_url})`;
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
        style.href = tantip_css;
        document.body.appendChild(style);

        // 挂载到body里面
        let tantip = document.createElement('div');
        tantip.innerHTML = tantip_html;
        document.body.appendChild(tantip);

        // 按钮文字
        let title_chars = this.config.title.split('');
        console.log(title_chars);
        let tantip_btn = document.querySelector('.tantip-btn');
        let html = '';
        title_chars.forEach(str => {
            html += `<p class="tantip-btn-p">${str}</p>`;
        });
        tantip_btn.innerHTML = html;

        // 上面一行小字
        document.querySelector('.tantip-main-header').innerHTML = `
            <p>${this.config.text}</p>
        `;

        this.loadEvent();
    }

}