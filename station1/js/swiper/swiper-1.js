$(function(){
    var W=$(window).width();
    console.log(W);
    $(".advertise>.adimg>li>img").css("width",W);

    var ipages=1;
    var n=6;
    var imgturn=600;
    var w=$(".advertise>.adimg>li").width();
    $(".advertise>.tright").hide();
    $(".advertise>.tleft").hide();

    $(".advertise").hover(function(){
        $(".advertise>.tright").show();
        $(".advertise>.tleft").show();
        clearInterval(timer)
    },function(){
        $(".advertise>.tright").hide();
        $(".advertise>.tleft").hide();
        timer = setInterval(function() {
            if(ipages==n) {
                ipages=1; 
                $(".advertise>.adimg").stop(true,true).animate({left: "0px"},imgturn);
                
            }else{
                ipages++; 
                $(".advertise>.adimg").stop(true,true).animate({left: "-="+w+"px"},imgturn);
                
            }
        }, 3400);
    })
    var timer ;
    timer= setInterval(function() {
        
        if(ipages==n) {
            ipages=1; 
            $(".advertise>.adimg").stop(true,true).animate({left: "0px"},imgturn);
            
        }else{
            ipages++; 
            $(".advertise>.adimg").stop(true,true).animate({left: "-="+w+"px"},imgturn);
            
        }
    }, 3400);

    $(".advertise>.tleft").click(function(){
        if(ipages==n) {
            ipages=1;
            
            $(".advertise>.adimg").stop(true,true).animate({left: "0px"},imgturn);
        }else{
            
            $(".advertise>.adimg").stop(true,true).animate({left: -ipages*w+"px"},imgturn);
            ipages++;
        }
        
    })
    $(".advertise>.tright").click(function(){
        if(ipages==1) {
            ipages=n;
            
            $(".advertise>.adimg").stop(true,true).animate({left: -(ipages-1)*w+"px"},imgturn);
        }else{
            ipages--;
            
            $(".advertise>.adimg").stop(true,true).animate({left: -(ipages-1)*w+"px"},imgturn);
            
        }
        
    })

    $(window).resize(function(event) {
        W=$(window).width();
        console.log(W)
        $(".advertise>.adimg>li>img").css("width",W+"px");
        w=$(".advertise>.adimg>li").width();
        
        ipages=1;
        $(".advertise>.adimg").stop(true,true).animate({left: "0px"},imgturn);
        
    });
})