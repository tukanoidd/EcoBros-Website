wSize = {
    w: window.innerWidth,
    h: window.innerHeight,
};

$(document).ready(() => {
    setSizes();
    setBindings();
});

function setSizes() {
    $('.start').css('height', `${wSize.h - 20}px`);
    $('.footer_logo_img_container').css('width', `${wSize.w * 0.2}px`);
    $('ul').css('width', `${wSize.w * 0.29}px`);
}

function setBindings() {
    $('.back_home_btn').click(() => {
        window.location.href = 'index.html';
    });
}
