
$(document).ready(function() {
    
    $('#header').localScroll();
    $('#sphmenu').localScroll();
    $('#home').localScroll();
    $('#gift').localScroll();
    $('#store').localScroll();
    $('#stuff').localScroll();
    $('#follow').localScroll();
    $('#contact').localScroll();
    
    
    
    $(window).scroll(function() {
        var theta = $(window).scrollTop() / 25 % Math.PI;
        $('.circle').css({ transform: 'rotate(' + theta + 'rad)' });
    });
    
    $('img').plaxify()
    $.plax.enable()
    
    
    if (Modernizr.mq('(min-width: 1280px)')) {
        window.onwheel = function(){ return false; };
        $(".rrr").click(function(){
            $("#logo").velocity({marginLeft:"-45px"}, 2000);
            $("#line").velocity({marginLeft:"-48px"}, 2000);
            $("#world").velocity({marginLeft:"-150px"}, 2000);
        });
        $(".rrc").click(function(){
            $("#logo").velocity({marginLeft:"-425px"}, 2000);
            $("#line").velocity({marginLeft:"-428px"}, 2000);
            $("#world").velocity({marginLeft:"-530px"}, 2000);
        });
        $(".rrl").click(function(){
            $("#logo").velocity({marginLeft:"-425px"}, 2000);
            $("#line").velocity({marginLeft:"-428px"}, 2000);
            $("#world").velocity({marginLeft:"-530px"}, 2000);
        });
        $(".llr").click(function(){
            $("#logo").velocity({marginLeft:"-425px"}, 2000);
            $("#line").velocity({marginLeft:"-428px"}, 2000);
            $("#world").velocity({marginLeft:"-530px"}, 2000);
        });
        $(".llc").click(function(){
            $("#logo").velocity({marginLeft:"-425px"}, 2000);
            $("#line").velocity({marginLeft:"-428px"}, 2000);
            $("#world").velocity({marginLeft:"-530px"}, 2000);
        });
        $(".lll").click(function(){
            $("#logo").velocity({marginLeft:"-425px"}, 2000);
            $("#line").velocity({marginLeft:"-428px"}, 2000);
            $("#world").velocity({marginLeft:"-530px"}, 2000);
        });
        $(".downarrow1").click(function(){
            $("#logo").velocity({marginLeft:"-425px"}, 2000);
            $("#line").velocity({marginLeft:"-428px"}, 2000);
            $("#world").velocity({marginLeft:"-530px"}, 2000);
        });
        $(".downarrow2").click(function(){
            $("#logo").velocity({marginLeft:"-425px"}, 2000);
            $("#line").velocity({marginLeft:"-428px"}, 2000);
            $("#world").velocity({marginLeft:"-530px"}, 2000);
        });
        $("#downarrow5").click(function(){
            $("#logo").velocity({marginLeft:"-425px"}, 2000);
            $("#line").velocity({marginLeft:"-428px"}, 2000);
            $("#world").velocity({marginLeft:"-530px"}, 2000);
        });
        $("#downarrow6").click(function(){
            $("#logo").velocity({marginLeft:"-425px"}, 2000);
            $("#line").velocity({marginLeft:"-428px"}, 2000);
            $("#world").velocity({marginLeft:"-530px"}, 2000);
        });
    }
    if (Modernizr.mq('(min-width:1024px) and (max-width: 1279px)')) {
        $(".rrr").click(function(){
            $(".rl").velocity({opacity:"0"},1000);
            $(".lr").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-45px"}, 2000);
            $("#line").velocity({marginLeft:"-48px"}, 2000);
            $("#world").velocity({marginLeft:"-150px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".rrc").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-295px"}, 2000);
            $("#line").velocity({marginLeft:"-298px"}, 2000);
            $("#world").velocity({marginLeft:"-400px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".rrl").click(function(){
            $(".rr").velocity({opacity:"0"},1000);
            $(".rl").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"205px"}, 2000);
            $("#line").velocity({marginLeft:"202px"}, 2000);
            $("#world").velocity({marginLeft:"100px"}, 2000);
            $(".lr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".rlr").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-295px"}, 2000);
            $("#line").velocity({marginLeft:"-298px"}, 2000);
            $("#world").velocity({marginLeft:"-400px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".rlc").click(function(){
            $(".rr").velocity({opacity:"0"},1000);
            $(".rl").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"205px"}, 2000);
            $("#line").velocity({marginLeft:"202px"}, 2000);
            $("#world").velocity({marginLeft:"100px"}, 2000);
            $(".lr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".rll").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-295px"}, 2000);
            $("#line").velocity({marginLeft:"-298px"}, 2000);
            $("#world").velocity({marginLeft:"-400px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".lrr").click(function(){
            $(".rl").velocity({opacity:"0"},1000);
            $(".lr").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-45px"}, 2000);
            $("#line").velocity({marginLeft:"-48px"}, 2000);
            $("#world").velocity({marginLeft:"-150px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".lrc").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-295px"}, 2000);
            $("#line").velocity({marginLeft:"-298px"}, 2000);
            $("#world").velocity({marginLeft:"-400px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".lrl").click(function(){
            $(".rr").velocity({opacity:"0"},1000);
            $(".rl").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"205px"}, 2000);
            $("#line").velocity({marginLeft:"202px"}, 2000);
            $("#world").velocity({marginLeft:"100px"}, 2000);
            $(".lr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".llr").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-295px"}, 2000);
            $("#line").velocity({marginLeft:"-298px"}, 2000);
            $("#world").velocity({marginLeft:"-400px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
        $(".llc").click(function(){
            $(".rr").velocity({opacity:"0"},1000);
            $(".rl").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"205px"}, 2000);
            $("#line").velocity({marginLeft:"208px"}, 2000);
            $("#world").velocity({marginLeft:"100px"}, 2000);
            $(".lr").velocity({opacity:"1"},3000);
            $(".ll").velocity({opacity:"1"},3000);
        });
        $(".lll").click(function(){
            $(".lr").velocity({opacity:"0"},1000);
            $(".ll").velocity({opacity:"0"},1000);
            $("#logo").velocity({marginLeft:"-295px"}, 2000);
            $("#line").velocity({marginLeft:"-298px"}, 2000);
            $("#world").velocity({marginLeft:"-400px"}, 2000);
            $(".rr").velocity({opacity:"1"},3000);
            $(".rl").velocity({opacity:"1"},3000);
        });
    }
    
    if (Modernizr.mq('(max-width: 479px)')) {
        $("#menu").click(function(){
            $(".sphnav").css("display", "block");
            $("#menu").css("display", "none");
        });
        $(".cancel").click(function(){
            $(".sphnav").css("display", "none");
            $("#menu").css("display", "block");
        });
    }
});
