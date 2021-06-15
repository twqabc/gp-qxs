
$(function(){
            $(".topnav>.navMenu>.secnav").mouseenter(function(event) {
                $(this).children('ul').show().end().siblings('.secnav').children('ul').hide()
                $(".navMenu>li:eq(0)").removeClass('index')
            });
            $(".topnav>.navMenu>.secnav").mouseleave(function(event) {
                $(this).children('ul').hide();
                $(".navMenu>li:eq(0)").addClass('index')
            });
})