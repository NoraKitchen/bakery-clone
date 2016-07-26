//enable smooth scroll

$(".nav-link").click(function () {
    var id = $(this).attr("href");
    $("body").animate({ scrollTop: $(id).offset().top }, "slow");
    return false;
});