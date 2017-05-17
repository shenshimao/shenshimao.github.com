// Copyright 2014, Mark Murray

// Scroll function from Chris Coyier
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});


$('nav ul li a').click(function(){
    $('.current').removeClass('current');
    $(this).parent().addClass('current');
});

$('.s-1 a').click(function(){
    $('.current').removeClass('current');
    $('nav ul li:nth-child(2)').addClass('current');
});

$('.x').click(function(){
    $('.container').toggleClass('close');
});

//回到顶部
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $("body").append("#toTop");
    $("#toTop").click(function() {
        $("body,html").animate({scrollTop:0},800);
    });
});

//浏览器兼容
window.onload=function(){
    var u_agent=navigator.userAgent;
    var logo_H=document.getElementById("logo_h");
    var bot_social=document.getElementById("social");
    if(u_agent.indexOf("Chrome")>-1||u_agent.indexOf("Firefox")>-1){
        logo_H.src="images/logo-h.svg";
    }
    else{
        logo_H.src="images/logo-h.png";
        bot_social.removeChild(bot_social.childNodes[1]);
    }
}

// 技能明细切换
$(".skill_icon").click(function(){
    $(".skill_int").each(function(){
        if($(this).is(":visible")){
            $(this).slideUp(200);
            $(this).prev().removeClass("skill_flag_scale");
        }
    });
    if($(this).siblings(".skill_int").is(":hidden")){
        $(this).siblings(".skill_int").slideDown(400);
        $(this).siblings(".skill_flag").addClass("skill_flag_scale");
    }else{
        $(this).siblings(".skill_int").slideUp(200);
        $(this).siblings(".skill_flag").removeClass("skill_flag_scale");
    }
});