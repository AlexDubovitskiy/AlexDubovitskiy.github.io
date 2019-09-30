$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.title').css({"opacity":"0","transition":"  1s ease-in-out 0.1ms"});
        $('header').css({"opacity":"0.9","transition":"top 1s ease-in-out 0.1ms","border-bottom":"1px solid" +
                " rgba(206," +
                " 208, 228, 0.5)"});
    }
    else{
        $('.title').css({"opacity":"1","transition":"  1s ease-in-out 0.1ms"});
        $('header').css({"opacity":"1","transition":"  1s ease-in-out 0.1ms"});
    }
});