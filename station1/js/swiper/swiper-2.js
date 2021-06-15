$(function(){
    $(".newstext>.ntext>span:not(:first)").hide();
    var ipages=1;
    var n=5;
    var w=$(".left_nav>.leftimg>li").width();
    $(".left_nav>.tright").hide();
    $(".left_nav>.tleft").hide();
    
    $(".left_nav").hover(function(){
        $(".left_nav>.tright").show();
        $(".left_nav>.tleft").show();
        clearInterval(timer)
    },function(){
        $(".left_nav>.tright").hide();
        $(".left_nav>.tleft").hide();
        timer = setInterval(function() {
            if(ipages==n) {
                ipages=1; 
                $(".left_nav>.leftimg").stop(true,true).animate({left: "0px"},300);
                $(".newstext>.pages>span").eq(ipages-1).addClass('hoverhot').siblings().removeClass('hoverhot');
                $(".newstext>.ntext>span:eq("+(ipages-1)+")").show().siblings('span').hide();
            }else{
                ipages++; 
                $(".left_nav>.leftimg").stop(true,true).animate({left: "-="+w+"px"},300);
                $(".newstext>.pages>span").eq(ipages-1).addClass('hoverhot').siblings().removeClass('hoverhot');
                $(".newstext>.ntext>span:eq("+(ipages-1)+")").show().siblings('span').hide();
            }
        }, 3400);
    })
    var timer ;
    timer= setInterval(function() {
        
        if(ipages==n) {
            ipages=1; 
            $(".left_nav>.leftimg").stop(true,true).animate({left: "0px"},300);
            $(".newstext>.pages>span").eq(ipages-1).addClass('hoverhot').siblings().removeClass('hoverhot');
            $(".newstext>.ntext>span:eq("+(ipages-1)+")").show().siblings('span').hide();
        }else{
            ipages++; 
            $(".left_nav>.leftimg").stop(true,true).animate({left: "-="+w+"px"},300);
            $(".newstext>.pages>span").eq(ipages-1).addClass('hoverhot').siblings().removeClass('hoverhot');
            $(".newstext>.ntext>span:eq("+(ipages-1)+")").show().siblings('span').hide();
        }
    }, 3400);
    $(".newstext>.pages>span").mouseenter(function(){
        var i=$(this).index();
        ipages=$(this).index()+1;
        $(this).addClass('hoverhot').siblings().removeClass('hoverhot');
        $(".left_nav>.leftimg").stop(true,true).animate({left: -i*w+"px"},300);
        $(".newstext>.ntext>span:eq("+(ipages-1)+")").show().siblings('span').hide();
    })
    $(".left_nav>.tleft").click(function(){
        if(ipages==n) {
            ipages=1;
            $(".pages>span").eq(ipages-1).addClass('hoverhot').siblings().removeClass('hoverhot');
            $(".left_nav>.leftimg").stop(true,true).animate({left: "0px"},300);
            $(".newstext>.ntext>span:eq("+(ipages-1)+")").show().siblings('span').hide();
        }else{
            $(".pages>span").eq(ipages).addClass('hoverhot').siblings().removeClass('hoverhot');
            $(".left_nav>.leftimg").stop(true,true).animate({left: -ipages*w+"px"},300);
            ipages++;
            $(".newstext>.ntext>span:eq("+(ipages-1)+")").show().siblings('span').hide();
        }
        
    })
    $(".left_nav>.tright").click(function(){
        if(ipages==1) {
            ipages=n;
            $(".pages>span").eq(ipages-1).addClass('hoverhot').siblings().removeClass('hoverhot');
            $(".left_nav>.leftimg").stop(true,true).animate({left: -(ipages-1)*w+"px"},300);
            $(".newstext>.ntext>span:eq("+(ipages-1)+")").show().siblings('span').hide();
        }else{
            ipages--;
            $(".pages>span").eq(ipages-1).addClass('hoverhot').siblings().removeClass('hoverhot');
            $(".left_nav>.leftimg").stop(true,true).animate({left: -(ipages-1)*w+"px"},300);
            $(".newstext>.ntext>span:eq("+(ipages-1)+")").show().siblings('span').hide();
        }
        
    })
})