wSize = {
    w: window.innerWidth,
    h: window.innerHeight,
};

$(document).ready(() => {
    setBindings();
});

function setBindings() {
    $(".back_home_btn").click((e) => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("nav").offset().top
        }, 1000);
    });
}
