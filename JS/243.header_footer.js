$(document).ready(function() {
    $('.tb_item').eq(0).css({top: 0});

    let tb_idx = 0;
    let tb_length = $('.tb_item').length;
    setInterval(() => {
        // 위로 내보낼거
        $('.tb_item').eq(tb_idx % tb_length).animate({
            top: '-100%'
        }, 500)

        // 아래서 들어올거
        $('.tb_item').eq((tb_idx+1) % tb_length).css({
            top: '100%'
        }).animate({
            top: 0
        }, 500)

        tb_idx+=1;
    }, 500 + 1000);



    $('.nav_item, .nav_pan').hover(function(){
        // 판 펼치기
        $('.nav_pan').addClass('active')

        if($(this).hasClass('nav_item')) {
            $('.nav_pan_item').css({display: 'none'}).eq($(this).index()).css({display: 'flex'})
        }
    },function(){
        // 판 접기
        $('.nav_pan').removeClass('active') 
    })


})