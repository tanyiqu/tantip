// class Tips {
//     constructor(obj) {

//     }



//     // 挂载到页面
//     mount() {
//         let body = $('body');





//     }

// }

jQuery.fn.slideLeftHide = function (speed, callback) {
    this.animate({
        width: "hide",
        paddingLeft: "hide",
        paddingRight: "hide",
        marginLeft: "hide",
        marginRight: "hide"
    }, speed, callback);
};
jQuery.fn.slideLeftShow = function (speed, callback) {
    this.animate({
        width: "show",
        paddingLeft: "show",
        paddingRight: "show",
        marginLeft: "show",
        marginRight: "show"
    }, speed, callback);
};


$(function () {
    let tips = $('.tan-tips');
    let tipMain = $('.tan-tips-main');

    tips.mouseenter(() => {
        tipMain.stop();
        // tipMain.css('display', 'block');
        tipMain.slideLeftShow(400);
    });

    tips.mouseleave(() => {
        tipMain.stop();
        // tipMain.css('display', 'none');
        tipMain.slideLeftHide(400);
    });

});