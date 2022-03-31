$(function(){
    var cnt3btn = $('.content.cnt03> .btn');
    var atg = ('.artGroup');
    atg.find('.article:last').prependTo(atg);
    atg.css('marginLeft','-20%');


    cnt3btn.last().find('i:eq(1)').click(function(){
        alert('!!');
        atg.animate({
            marginLeft : '-40%'
        },500,function(){
            atg.find('.article:last').appendTo(atg);
            atg.css('marginLeft','-20%');
        });
        
    });
    cnt3btn.first().find('i:eq(0)').click(function(){
        alert('!!');
        $('.artGroup>.article').first().appendTo('.artGroup');
    });
    $('.nav>li').eq(3).mouseover(function(){
        $('.menu>li').css({
            display : 'block',
            opacity : '1'
        });
    });
    $('.menu').mouseleave(function(){
        $('.menu>li').css({
            display : 'none'
        });
    });
});
