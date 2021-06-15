$(function (argument) {
    $(".footer>.footerright>img:eq(1)").hover(function() {
        $(".footer>.footerright>.qrcode1").show();
    }, function() {
        $(".footer>.footerright>.qrcode1").hide();
    });

    $(".footer>.footerright>img:eq(2)").hover(function() {
        $(".footer>.footerright>.qrcode2").show();
    }, function() {
        $(".footer>.footerright>.qrcode2").hide();
    });

    $(".footer>.footerright>img:eq(0)").hover(function() {
        $(".footer>.footerright>span").show();
    }, function() {
        $(".footer>.footerright>span").hide();
    });

})