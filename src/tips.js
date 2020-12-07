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



let tips = $('.tan-tips');
let tipMain = $('.tan-tips-main');



// let divHtml = `
// <div class="tantip">
// <div class="tantip-show-btn">
//     赞助
// </div>
// <div class="tantip-main">
//     <div class="tantip-main-header">
//         <p>喜欢文章就打赏吧</p>
//     </div>

//     <div class="tantip-main-content">

//     </div>

//     <div class="tantip-main-footer">
//         <p><a href="" target="_blank">关于插件</a></p>
//     </div>
// </div>
// </div>
// `;

// let style = document.createElement('link');
// style.rel = 'stylesheet';
// style.href = 'tips.css';
// document.body.appendChild(style);

// let div = document.createElement('div');
// div.innerHTML = divHtml;
// document.body.appendChild(div);


//插入到最前面

// tips.mouseenter(() => {
//     tipMain.stop();
//     tipMain.slideLeftShow(400);
// });

// tips.mouseleave(() => {
//     tipMain.stop();
//     tipMain.slideLeftHide(400);
// });



// 切换打赏码

let tantipImgDiv = $('.tantip-img-div');
let tantipImgFrame = $('.tantip-img-frame');



$('.tantip-alipay').hover(() => {
    // 切换背景
    tantipImgDiv.css({
        'background': 'url(imgs/alipay-frame.png) no-repeat center',
        'background-size': '60%'
    });
    // 切换图片
    tantipImgFrame.attr('src', 'imgs/ali.png');
});

$('.tantip-wechat').hover(() => {
    // 切换背景
    tantipImgDiv.css({
        'background': 'url(imgs/wechat-frame.png) no-repeat center',
        'background-size': '60%'
    });
    // 切换图片
    tantipImgFrame.attr('src', 'imgs/we.png');
});