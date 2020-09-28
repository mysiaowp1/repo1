$(document).ready(function () {

    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 80;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 900);
        return false;
    });

});