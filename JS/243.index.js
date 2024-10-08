$(document).ready(function () {
    let bn_count = $('.banner').length

    for (let i = 0; i < bn_count; i++) {
    console.log(1)
    $('.indi_box').append(`<div class="indi ${i == 0 ? 'active' : ''}"></div>`)
    }

    let idx = 0;
    let timer = 1000
    $('#btnL').click(function () { 
    slide('100%', (idx - 1) % bn_count, '-100%');
    })
    $('#btnR').click(function () {
    slide('-100%', (idx + 1) % bn_count, '100%');
    })
    $('.indi').click(function(){
    if($(this).index() > idx) {
        slide('-100%', $(this).index(), '100%');
    }
    else if($(this).index() < idx) {
        slide('100%', $(this).index(), '-100%');
    }

      // active 줬다뺐다 
    indi_chg($(this).index()) 
    })

    // 자동 슬라이드 켰다 껐다
    $('.main_banner').hover(function(){
    clearInterval(interval)
    }, function(){
    auto_slide();
    })


    // 오토 슬라이드 
    let interval;
    function auto_slide() {
    interval = setInterval(() => {
        $('#btnR').trigger('click')
    }, timer + 3000);
    }
    auto_slide()

    function indi_chg(ttt) {
    $('.indi').removeClass('active')
    $('.indi').eq(ttt).addClass('active')
    }

    let btn_life = true
    function slide(o_pos, c_bang, c_pos) {
    $('.banner').eq(idx % bn_count).animate({
        left: o_pos
    }, timer)
      // 들어올판
        $('.banner').eq(c_bang).animate({
        left: c_pos
        },0).animate({
        left: 0
        }, timer)
        
        idx=c_bang
        
        indi_chg(idx)
    }
    
    
});