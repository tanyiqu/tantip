// jQuery.fn.slideLeftHide = function (speed, callback) {
//     this.animate({
//         width: "hide",
//         paddingLeft: "hide",
//         paddingRight: "hide",
//         marginLeft: "hide",
//         marginRight: "hide"
//     }, speed, callback);
// };
// jQuery.fn.slideLeftShow = function (speed, callback) {
//     this.animate({
//         width: "show",
//         paddingLeft: "show",
//         paddingRight: "show",
//         marginLeft: "show",
//         marginRight: "show"
//     }, speed, callback);
// };



// let tips = $('.tan-tips');
// let tipMain = $('.tan-tips-main');






const tantip_html = `
<div class="tantip">
        <div class="tantip-show-btn">
            <div class="tantip-show-btn-div">
                <p class="tantip-main-header-p">赞</p>
                <p class="tantip-main-header-p">助</p>
            </div>
        </div>
        <div class="tantip-main">
            <div class="tantip-main-header">
                <p class="tantip-main-header-p">喜欢就请打赏吧</p>
            </div>

            <div class="tantip-main-content">
                <div class="tantip-img-div">
                    <img class="tantip-img-frame" src="https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/ali.png" alt="">
                </div>

                <div class="tantip-hline"></div>

                <div class="tantip-chimg">
                    <div class="tantip-chimg-item tantip-alipay">
                        <img class="tantip-chimg-item-img"
                            src="https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/alipay-text.png" alt="">
                    </div>
                    <div class="tantip-vline"></div>
                    <div class="tantip-chimg-item tantip-wechat">
                        <img class="tantip-chimg-item-img" src="https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/wechat-text.png" alt="">
                    </div>
                </div>
            </div>

            <div class="tantip-hline"></div>

            <div class="tantip-main-footer">
                <p><a href="https://github.com/tanyiqu/tantip-cnblogs" target="_blank">关于插件</a></p>
            </div>
        </div>
    </div>
`;


let tantip_conf = {
    title: '赞助'
}

class Tantip {
    constructor(config) {
        this.config = config;
    }


    // 挂载到界面上
    mount() {
        // 创建style标签

        // 创建div
        // let tantip_div = document.createElement('div');
        // tantip_div.innerHTML = tantip_html;
        // document.body.appendChild(tantip_div);

        // 修改自定义的名字

    }
}

new Tantip(tantip_conf).mount();



// 切换打赏码

let tantipImgDiv = $('.tantip-img-div');
let tantipImgFrame = $('.tantip-img-frame');



// $('.tantip-alipay').hover(() => {
//     // 切换背景
//     tantipImgDiv.css({
//         'background': 'url(https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/alipay-frame.png) no-repeat center',
//         'background-size': '60%'
//     });
//     // 切换图片
//     tantipImgFrame.attr('src', 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/ali.png');
// });

// $('.tantip-wechat').hover(() => {
//     // 切换背景
//     tantipImgDiv.css({
//         'background': 'url(https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/wechat-frame.png) no-repeat center',
//         'background-size': '60%'
//     });
//     // 切换图片
//     tantipImgFrame.attr('src', 'https://tanyiqu.gitee.io/tantip-cnblogs/src/imgs/we.png');
// });