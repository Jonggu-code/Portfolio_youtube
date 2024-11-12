$(document).ready(function(){
///////////////////////  헤더 이벤트  ////////////////////////
let win_width = false;

    // side_pl_box 클릭이벤트
    $(document).on('click','.side_pl_box', function(){
        $('#side_storage').trigger('click')
    });

    // 화면로드시 햄버버튼 반응형
    $(window).on('load',function(){
        if(window.innerWidth <= 1000) {
            $('.hamber_btn').trigger('click')
            win_width = true;
        }
    });

    // 사이드 메뉴 반응형
    window.addEventListener('resize', function(){
        let win_act = window.innerWidth;

        if(win_act < 1000 && !win_width) {
            win_width = true;
            $('.hamber_btn').trigger('click')
        }
        else if(win_act > 1000 && win_width) {
            win_width = false;
            $('.hamber_btn').trigger('click')
        }
    });

    $(document).on('mousedown','.music_list_title',function(event){
        $(this).addClass('music_list_title_active')
    })
    $(document).on('mouseup','.music_list_title',function(){
        setTimeout(() => {
            $(this).removeClass('music_list_title_active')
        },10);
    })

    // 햄버거버튼 클릭시 배경조정
    $(document).on('mousedown','.hamber_btn',function(event){
        $(this).addClass('hamber_active')
    })
    $(document).on('mouseup','.hamber_btn',function(){
        setTimeout(() => {
            $(this).removeClass('hamber_active')
        },10);
    })

    // 햄버거버튼 클릭
    $(document).on('click','.hamber_btn',function(){
        $('.side_menu').children(':not(.side_nav)').toggleClass('side_menubar_etc');
        $('.side_menu').toggleClass('side_menu_act');
        $('.side_nav').toggleClass('side_nopad');
        $('.side_icon').toggleClass('side_nomar');
        $('.side_icon_f').toggleClass('side_nomar');
        $('.side_menubar').toggleClass('side_menubar_act');
        $('.side_txt').toggleClass('side_txt_act')
    });

    // 검색창 클릭
    $('#find_input').focus(function(){
        $('.search_box').css({
            background: '#090909'
        })
    }).blur(function(){
        $('.search_box').css({
            background: 'rgba(255,255,255,0.2)'
        })
    })
    $('#find_input').on("input", function(){
        if($(this).val().length > 0){
            $('.search_null').show();
        }
        else {
            $('.search_null').hide();
        }
    });
    $('.search_null').click(function(){
        $('#find_input').val("");
        $(this).hide();
    })

    // 계정 클릭
    let login_menu = true;
    $(document).on('click','.master',function(){
        if(login_menu == true){
            login_new_window()
            login_menu = false;
        }
        else{
            $('.master').find('.login_menu').remove()
            login_menu = true;
        }
    });

////////////  사이드메뉴(홈, 둘러보기, 보관함) 클릭 이벤트  //////////////////

    $('#side_home').click(function(){
        $('.side_icon').css({display:'block'})
        $('.side_icon_f').css({display:'none'})
        $('.side_home').css({display:'none'})
        $('.side_home_f').css({display:'block'})
    })
    $('#side_around').click(function(){
        $('.side_icon').css({display:'block'})
        $('.side_icon_f').css({display:'none'})
        $('.side_around').css({display:'none'})
        $('.side_around_f').css({display:'block'})
    })
    $('#side_storage').click(function(){
        $('.side_icon').css({display:'block'})
        $('.side_icon_f').css({display:'none'})
        $('.side_storage').css({display:'none'})
        $('.side_storage_f').css({display:'block'})
    })

////////////////   플레이바 클릭 위치 계산함수    //////////////////

    let barWidth;
    let barOffset;
    let clickX;
    let clickPercentage;

    function click_pos(nural) {
        barWidth = nural.width(); //progress-bar의 너비
        barOffset = nural.offset().left; // progress-bar의 페이지 상의 왼쪽 경계
        clickX = event.pageX - barOffset;
        // 클릭한 위치의 X 좌표 (progress-bar 내에서)

        // 클릭 위치를 백분율로 계산
        clickPercentage = (clickX / barWidth)
    }

    let volume_value = 1;
    let v_volume = $('.volume_bar_hover');
    let muted = $('.volume_icon');
    let muted_on = $('.muted_icon')
    let chk = false;

////////////////   볼륨바 클릭 위치 계산함수    //////////////////

    function volume_pos(){
        $('.volume_bar_active').css({ width: `${clickPercentage * 100}%` })
        $('.volume_circle').css({ left: `${clickPercentage * 100}%` })
    }

////////////////   볼륨 조절 관련 이벤트    //////////////////

    $('.volume_bar_hover').mousedown(function(){
        $('.volume_circle').css({
            transform: 'translate(-50%,-50%) scale(1.5)'
        })
        chk=true;
        click_pos($(this))
        // 클릭된 위치가 만약 0이면 muted 의 if문 실행
        if((clickPercentage * 100) < 10) {
            muted.trigger('click')
        }
        else if ((clickPercentage * 100) > 10) {
            muted_on.trigger('click')
        }
        // 클릭된 위치가 만약 0이 아니면 video.volume 에 그 값을 주기
        $('#v_player')[0].volume = clickPercentage;
        volume_value = clickPercentage;
        volume_pos()
    })
    $('.volume_bar_hover').mousemove(function(){
        click_pos($(this))
        if(chk) {
            // 클릭된 위치가 만약 0이면 muted 의 if문 실행
            if((clickPercentage * 100) < 10) {
                muted.trigger('click')
            }
            else if ((clickPercentage * 100) > 10) {
                muted_on.trigger('click')
            }
            // 클릭된 위치가 만약 0이 아니면 video.volume 에 그 값을 주기
            $('#v_player')[0].volume = clickPercentage;
            volume_pos()
        }
    })
    $('.volume_bar_hover').mouseup(function(){ 
        $('.volume_circle').css({ transform: 'translate(-50%,-50%) scale(1)' })
        chk=false; 
    })
    $('.pb_right_control').mouseenter(function(){ chk=false; })
    $('.pb_right_control').mouseleave(function(){ chk=false; })

////////////////   음소거 관련 클릭이벤트    //////////////////

    muted.click(function(){   
        $('#v_player')[0].muted=true; // 음소거를 실행해라 라는 뜻 

        v_volume.css('left').split('px')[0] = 0 // 실제 볼륨 0으로 변경
        $('.volume_bar_active').css({ width: `0%` })
        $('.volume_circle').css({ left: `0%` })
    }) 

    muted_on.click(function(){
        $('#v_player')[0].muted=false; // 음소거를 취소해라
        $('.volume_bar_active').css({ width: `${volume_value}` })
        $('.volume_circle').css({ left: `${volume_value}` })
    })

////////////////   음소거 관련 클릭이벤트    //////////////////

    let play_interval;
    let time_play;
    let time_m = 0;
    let time_s = '00';

////////////////   하단 재생바 클릭이벤트    //////////////////

    $('.play_bar_hover').click(function(event) {
        $('.pb_pause').trigger('click')
        let barWidth_main = $(this).width();
        let barOffset_main = $(this).offset().left;
        let clickX_main = event.pageX - barOffset_main;

        let clickPercentage_main100 = (clickX_main / barWidth_main) * 100;
        let clickPercentage_main = (clickX_main / barWidth_main);

        let newTime_main = clickPercentage_main * $('#v_player')[0].duration;

        $('#v_player')[0].currentTime = newTime_main;

        time_m = Math.floor(newTime_main / 60);
        time_s = Math.floor(newTime_main % 60);
        time_s = time_s < 9 ? '0' + (+time_s + 1) : +time_s + 1
        play_time()

        $('.pb_play').trigger('click')

        $('.bar_circle').css({ left: `${clickPercentage_main100}%` })
        $('.play_bar_active').css({ width: `${clickPercentage_main100}%` })
        bar_inc = clickPercentage_main100
    })

////////////////  무한루프 클릭이벤트    //////////////////

    let loop = true;

    $('.loop').click(function(){
        if(loop == true){
            $('#loop').css({ fill: '#fff' })
            loop = false
        }
        else if(loop == false){
            $('.loop').css({ display: 'none' })
            $('.loop_one').css({ display: 'block' })
            loop = true
        }
    })

    $('.loop_one').click(function(){
        $('.loop_one').css({ display: 'none' })
        $('.loop').css({ display: 'block' })
        $('#loop').css({ fill: '#8b8b8b' })
    })

////////////////  랜덤재생 클릭이벤트  //////////////////
    
    let random = true;
    $('.random').click(function(){
        if(random == true){
            $('.random').css({
                transform: 'rotateX(540deg)',
                transition: 'all 0.5s linear'
            })
            $('#random').css({
                fill: '#fff'
            })
            random = false;
        }
        else if(random == false){
            $('.random').css({
                transform: 'rotateX(0deg)',
            })
            $('#random').css({
                fill: '#8b8b8b'
            })
            random = true;
        }
    })

////////////////  음소거 클릭이벤트  //////////////////

    $('.volume_icon').click(function(){
        $('.volume_icon').css({ display: 'none' })
        $('.muted_icon').css({ display: 'block' })
    })

    $('.muted_icon').click(function(){
        $('.volume_icon').css({ display: 'block' })
        $('.muted_icon').css({ display: 'none' })
        $('.volume_bar_active').css({ width: `${volume_value * 100}%` })
        $('.volume_circle').css({ left: `${volume_value * 100}%` })
    })

////////////////  좋아요, 싫어요 클릭  //////////////////
    $('.pb_btn_up').click(function(event){
        $(this).children('svg').toggleClass('scbr_icon_act')
        $(this).parents('.pb_btn_box').find('.thumbDn_f').removeClass('scbr_icon_act')
        $(this).parents('.pb_btn_box').find('.thumbDn_b').addClass('scbr_icon_act')
        event.stopPropagation();
    })
    $('.pb_btn_down').click(function(event){
        $(this).children('svg').toggleClass('scbr_icon_act')
        $(this).parents('.pb_btn_box').find('.thumbUp_f').removeClass('scbr_icon_act')
        $(this).parents('.pb_btn_box').find('.thumbUp_b').addClass('scbr_icon_act')
        event.stopPropagation();
    })

////////////////   음악재생 이벤트    //////////////////
    
    let mm_time = 0;
    let ss_time = 0;
    let movie_leng = 0;
    let linked = 0;
    function streaming(cate) {
        $('.pb_play').css({ display: 'none' })
        $('.pb_pause').css({ display: 'block' })
        mm_play = true;
        ly_box = true;
        let img_link = `<img src="./img/youtube_music/${ITEM_LIST[cate][linked].src}.jpg" alt=""></img>`
        let music_box = `<video src="./media/${ITEM_LIST[cate][linked].src}.mp4" class="${ITEM_LIST[cate][linked].id}" id="v_player"></video>`
        let music_ly = `<div class="music_ly">${ITEM_LIST[cate][linked].ly}</div>`

        $('.music_player').empty()
        $('.music_player').append(music_box)
        $('.music_player').append(music_ly)
        $('.pb_thumbnail > img').remove()
        $('.pb_thumbnail').append(img_link)
        $('.pb_title_b').html(`${ITEM_LIST[cate][linked].b_title}`)
        $('.pb_title_m').html(`${ITEM_LIST[cate][linked].m_title}`)
        $('#v_player')[0].play()
        $('#v_player')[0].volume = volume_value;
        
        movie_leng = $(ITEM_LIST)[cate][linked].duration
        mm_time = Math.floor(movie_leng / 60)
        ss_time = Math.floor(movie_leng % 60)
        ss_time = ss_time<10?"0"+ss_time:ss_time

        time_m = 0;
        time_s = '00';
        bar_inc = 0;
        play_time()
        music_play()
        clearInterval(play_interval)
        clearInterval(time_play)

        // 하단 플레이어 나오게하는 기능
        $('.player_bar').css({ display: 'flex' })

        time_play = setInterval(() => { play_time() }, 1000);
        play_interval = setInterval(() => { music_play() }, 1000)

        // 자동 재생 

        $('#v_player').on('ended', function() {
            $('.pb_next').trigger('click')
        });
    }

////////////////   뮤직 장르별 클릭 이벤트    //////////////////

$(document).on('click', '.arnew', function(){
    linked = $(this).index()
    streaming(5)
    make_player_list()

    $('.player_L').empty()
    let tmpp1 = $(this).find('.mp_music_big_title').text()
    let tmpp2 = $(this).find('.mp_music_mini_title').text()
    let tmpp3 = $(this).find('.mp_music_img > img').attr('src')

    music_player_title(tmpp1, tmpp2, tmpp3)
})
    $('.kpop').click(function(){
        linked = $(this).index()
        streaming(2)
        make_player_list()

        // 뮤직 플레이어 메인 이미지 수정
        $('.player_L').empty()
        let tmpp1 = $(this).find('.mp_music_big_title').text()
        let tmpp2 = $(this).find('.mp_music_mini_title').text()
        let tmpp3 = $(this).find('.mp_music_img > img').attr('src')

        music_player_title(tmpp1, tmpp2, tmpp3)
    })
    $('.jpop').click(function(){
        linked = $(this).index()
        streaming(3)
        make_player_list()

        $('.player_L').empty()
        let tmpp1 = $(this).find('.mp_music_big_title').text()
        let tmpp2 = $(this).find('.mp_music_mini_title').text()
        let tmpp3 = $(this).find('.mp_music_img > img').attr('src')

        music_player_title(tmpp1, tmpp2, tmpp3)
    })
    $('.pop').click(function(){
        linked = $(this).index()
        streaming(4)
        make_player_list()

        $('.player_L').empty()
        let tmpp1 = $(this).find('.mp_music_big_title').text()
        let tmpp2 = $(this).find('.mp_music_mini_title').text()
        let tmpp3 = $(this).find('.mp_music_img > img').attr('src')

        music_player_title(tmpp1, tmpp2, tmpp3)
    })
    
////////////////   하단 플레이바 재생길이 함수    //////////////////
let bar_inc = 0;
    function music_play() {
        $('.bar_circle').css({
            left: `${bar_inc}%`
        })
        $('.play_bar_active').css({
            width: `${bar_inc}%`
        })
        bar_inc += (100 / movie_leng)

        if(bar_inc > 100 || bar_inc == 0){
            clearInterval(play_interval)
        }
    }
    
////////////////   하단 플레이바 시간초 함수    //////////////////
let time = document.getElementsByClassName('pb_play_time')[0]

    function play_time() { 
        time.innerHTML = `${time_m}:${time_s} / ${mm_time}:${ss_time}`
        if ((""+ss_time).length < 2 && ss_time < 10) {
            ss_time = '0'+ss_time
        }
        time_s = time_s < 9 ? '0' + (+time_s + 1) : +time_s + 1
        if(time_s > 59){
            time_m = +time_m + 1
            time_s = '00'
        }
        if(time_m >= mm_time && time_s >= ss_time + 1){
            clearInterval(time_play)
        }
    }

////////////////   하단 버튼 클릭이벤트    //////////////////

    // 퍼즈 버튼 클릭
    $('.pb_pause').click(function(){
        $('#v_player')[0].pause()
        $('.pb_pause').css({ display: 'none' })
        $('.pb_play').css({ display: 'block' })
        clearInterval(play_interval)
        clearInterval(time_play)
    })

    // 재생 버튼 클릭
    $('.pb_play').click(function(){
        $('#v_player')[0].play()
        $('.pb_play').css({ display: 'none' })
        $('.pb_pause').css({ display: 'block' })
        time_play = setInterval(() => {
            play_time()
        }, 1000);
        play_interval = setInterval(() => {
            music_play()
        }, 1000)
    })

    // 플레이어 창 띄우기 버튼 클릭
    let btn = true;
    let cate_chk;
    let list_chk;

// 하단 플레이바 클릭시 플레이어 창 띄우기
    $(document).on('click','.pb_center',function(){
        $('.player_updown').trigger('click')
    })
    
    // 좋아요, 싫어요 클릭시 플레이어창 안뜨게 하기(클릭이벤트 전파방지)
    $('.pb_btn_up').click(function(event){
        event.stopPropagation(); // 이벤트 전파 방지
    })
    $('.pb_btn_down').click(function(event){
        event.stopPropagation();
    })
    
    // 사이드 메뉴 클릭시 플레이어창 넣기
    $('.side_menu').click(function(){
        btn = false
        $('.player_updown').trigger('click')
    })

    $('.player_updown').click(function(){
        if(btn == true){
            $(this).css({ transform: 'rotateZ(180deg)' })
            $('.main_player').css({ top: '80px' })
            $('body').css({ overflow: 'hidden' })
            btn = false;
        }
        else if(btn == false){
            $(this).css({ transform: 'rotateZ(0deg)' })
            $('.main_player').css({ top: '100%' })
            $('body').css({ overflow: 'visible' })
            btn = true;
        }
    });

    // 이미지 클릭 후 플레이어창 띄우면 리스트 업데이트
    function make_player_list(){
        cate_chk = $('#v_player').attr('class').split('_')[0]
        $('.music_list_main').empty()
        music_player_add()
        $('.music_list_item').remove()

        if(cate_chk == 'kpop'){
            list_chk = $('.kpop').length
            music_list_item(list_chk, 2)
        }
        else if (cate_chk == 'jpop'){
            list_chk = $('.jpop').length
            music_list_item(list_chk, 3)
        }
        else if (cate_chk == 'pop'){
            list_chk = $('.pop').length
            music_list_item(list_chk, 4)
        }
        else if (cate_chk == 'arnew'){
            list_chk = $('.arnew').length
            music_list_item(list_chk, 5)
        }
    } 

    // 앞으로 넘어가기
    $('.pb_next').click(function(){
        cate_chk = $('#v_player').attr('class').split('_')[0]

        if(cate_chk == 'kpop'){
            linked = (linked + 1) % $(ITEM_LIST)[2].length 
            streaming(2)
        }
        else if (cate_chk == 'jpop'){
            linked = (linked + 1) % $(ITEM_LIST)[3].length 
            streaming(3)
        }
        else if (cate_chk == 'pop'){
            linked = (linked + 1) % $(ITEM_LIST)[4].length 
            streaming(4)
        }
        else if (cate_chk == 'arnew'){
            linked = (linked + 1) % $(ITEM_LIST)[5].length 
            streaming(5)
        }
        let tmp1 = $('.pb_title_b').text()
        let tmp2 = $('.pb_title_m').text()
        let tmp3 = $('.pb_thumbnail > img').attr('src')
        $('.music_title').text(tmp1)
        $('.music_sub').text(tmp2)
        $('.curr_picture > img').attr('src', tmp3)
    })
    
    // 뒤로 넘어가기
    $('.pb_prev').click(function(){
        cate_chk = $('#v_player').attr('class').split('_')[0]
        if(cate_chk == 'kpop'){
            if(linked == 0){ linked = $(ITEM_LIST)[2].length } // 제자리 걸음
            linked = linked - 1
            streaming(2)
        }
        else if (cate_chk == 'jpop'){
            if(linked == 0){ linked = $(ITEM_LIST)[3].length }
            linked = linked - 1
            streaming(3)
        }
        else if (cate_chk == 'pop'){
            if(linked == 0){ linked = $(ITEM_LIST)[4].length }
            linked = linked - 1
            streaming(4)
        }
        else if (cate_chk == 'arnew'){
            if(linked == 0){ linked = $(ITEM_LIST)[5].length }
            linked = linked - 1
            streaming(5)
        }
        let tmp1 = $('.pb_title_b').text()
        let tmp2 = $('.pb_title_m').text()
        let tmp3 = $('.pb_thumbnail > img').attr('src')
        $('.music_title').text(tmp1)
        $('.music_sub').text(tmp2)
        $('.curr_picture > img').attr('src', tmp3)
    });

////////////////   무한스크롤 관련   //////////////////

    let d_height = $(document).height();
    let w_height = $(window).height();
    let add_length = 0;
    let scroll_ok = true;

    $(window).scroll(function(){
        let s_bot = $(window).scrollTop() + w_height
        console.log(d_height, w_height, s_bot)
        add_length = 1

        if(d_height <= (s_bot + 200) && scroll_ok == true) {
            load_scroll_noicon(ADD_LIST[0].length)
            for(let i=0; i<3; i++) {
                load_scroll_item(ADD_LIST[add_length].length, add_length)
                add_length += 1
            }
            d_height = $(document).height();
            swiper_event()
        }
    })

///////////////////   보관함 재생목록 클릭 이벤트  /////////////////////

$(document).on('click','.st_music_img',function(){
    $('html, body').scrollTop(0);
    scroll_ok = false;
    $('.main').empty()
    d_height = $(document).height();
    let curr_idx = $(this).attr('id').split('_')[2]

    // 왼쪽 화면구성단
    storage_contents_box(curr_idx)

    // 오른쪽 화면구성단
    storage_contents_item(ITEM_LIST[+curr_idx+2].length, +curr_idx+2)
});

///////////////////   보관함 재생목록 리스트 클릭이벤트  /////////////////////

$(document).on('click','.scbr_item', function(){
    $('.player_L').empty()
    $('.music_list_item').remove()
    play_time()
    music_play()    
    let tmp1 = $(this).find('.scbr_title').text()
    let tmp2 = $(this).find('.scbr_s_title').text()
    let tmp3 = $(this).find('.scbr_img > img').attr('src')
    cate_chk = $(this).attr('id').split("_")[0]

    music_player_title(tmp1, tmp2, tmp3)

    if(cate_chk == 'kpop'){
        linked = $(this).index()
        streaming(2)
        list_chk = ITEM_LIST[2].length
        music_list_item(list_chk, 2)
    }
    else if (cate_chk == 'jpop'){
        linked = $(this).index()
        streaming(3)
        list_chk = ITEM_LIST[3].length
        music_list_item(list_chk, 3)
    }
    else if (cate_chk == 'pop'){
        linked = $(this).index()
        streaming(4)
        list_chk = ITEM_LIST[4].length
        music_list_item(list_chk, 4)
    }
    else if (cate_chk == 'arnew'){
        linked = $(this).index()
        streaming(5)
        list_chk = ITEM_LIST[5].length
        music_list_item(list_chk, 5)
    }
});

////////////////   보관함 음악리스트 호버 이벤트   //////////////////
let hover_lock = false;
$(document).on('mouseenter', '.scbr_item', function(){
    if(hover_lock) return; // 기능 잠그기
    $(this).find('.scbr_txt').css({width: '40%'})
    $(this).find('.scbr_time').css({display: 'none'})
    $(this).find('.scbr_icon_box').css({display: 'flex'})
});
$(document).on('mouseleave', '.scbr_item', function(){
    if(hover_lock) return; // 기능 잠그기
    $(this).find('.scbr_icon_box').css({display: 'none'})
    $('.scbr_txt').css({width: '82%'})
    $('.scbr_time').css({display: 'block'})
});

////////////////   보관함 음악리스트 아이콘클릭  //////////////////

$(document).on('click', '#scbr_icon_like', function(event){
    $(this).children('svg').toggleClass('scbr_icon_act')
    $(this).parents('.scbr_icon_box').find('.scbr_hate_f').removeClass('scbr_icon_act')
    $(this).parents('.scbr_icon_box').find('.scbr_hate_b').addClass('scbr_icon_act')
    event.stopPropagation();
});

$(document).on('click', '#scbr_icon_hate', function(event){
    $(this).children('svg').toggleClass('scbr_icon_act')
    $(this).parents('.scbr_icon_box').find('.scbr_like_f').removeClass('scbr_icon_act')
    $(this).parents('.scbr_icon_box').find('.scbr_like_b').addClass('scbr_icon_act')
    event.stopPropagation();
});

////////////////   보관함 체크박스 아이콘클릭  //////////////////

$(document).on('click', '.scbr_icon_rec', function(event){
    // item 호버 잠금
    hover_lock = true;

    // 체크박스를 제외한 요소 컨트롤
    $('.scbr_time').addClass('perpect_none')
    $('.scbr_icon_cir').addClass('perpect_none')
    $('.scbr_icon_box').addClass('perpect_flex')
    $('.scbr_icon_rec').addClass('perpect_flex')
    $('.scbr_txt').css({width: '40%'})

    // 체크박스 관련 토글클래스
    $(this).children('svg').toggleClass('scbr_icon_act')
    $(this).children('svg:nth-child(2)').toggleClass('chked')
    $(this).parents('.scbr_item').toggleClass('scbr_item_act')
    $('.scbr_control_box').css({bottom: '13%'})
    $('.scbr_cb_leng').text( `${$('.chked').length}개 선택`)

    event.stopPropagation();
});

////////////////   보관함 음악리스트 컨트롤박스  //////////////////

$(document).on('click','#control_reset',function(){
    hover_lock = false;

    // 체크박스를 제외한 요소 리셋
    $('.scbr_time').removeClass('perpect_none')
    $('.scbr_icon_cir').removeClass('perpect_none')
    $('.scbr_icon_box').removeClass('perpect_flex')
    $('.scbr_icon_rec').removeClass('perpect_flex')
    $('.scbr_txt').css({width: '82%'})

    // 체크박스 요소 리셋
    $('.scbr_icon_box').css({display: 'none'})
    $('.scbr_txt').css({width: '82%'})
    $('.scbr_time').css({display: 'block'})
    $('.scbr_icon_rec').children('svg').addClass('scbr_icon_act')
    $('.scbr_icon_rec').children('svg:nth-child(2)').removeClass('scbr_icon_act')
    $('.scbr_icon_rec').children('svg:nth-child(2)').removeClass('chked')
    $('.scbr_item').removeClass('scbr_item_act')
    $('.scbr_control_box').css({bottom: '-100px'})
    event.stopPropagation();
});

////////////////   보관함 재생버튼 클릭 이벤트   //////////////////

$(document).on('click','.scbox_func',function(){
    $('.scbr_item:first').trigger('click')
});

////////////////   플레이어 팝업창 클릭 이벤트   //////////////////

    $('.music_list_title').click(function(event){
        $('.music_list_title').css({
            borderBottom: '1px solid #3a3a3a',
            color: '#7c7c7c'
        })
        $(this).css({
            borderBottom: '1px solid #fff',
            color: '#fff'
        })
    })

    
    
    $(document).on('click','.music_list_item', function(){
        $('.player_L').empty()
        play_time()
        music_play()    
        let tmp1 = $(this).find('.mli_title').text()
        let tmp2 = $(this).find('.mli_s_title').text()
        let tmp3 = $(this).find('.mli_img > img').attr('src')
        
        music_player_title(tmp1, tmp2, tmp3)

        cate_chk = $('#v_player').attr('class').split('_')[0]

        if(cate_chk == 'kpop'){
            linked = $(this).index() - 1
            streaming(2)
        }
        else if (cate_chk == 'jpop'){
            linked = $(this).index() - 1
            streaming(3)
        }
        else if (cate_chk == 'pop'){
            linked = $(this).index() - 1
            streaming(4)
        }
        else if (cate_chk == 'arnew'){
            linked = $(this).index() - 1
            streaming(5)
        }
    }) // 제이쿼리 방식으로 안돼서 자바스크립트 방식으로 변경

    let mm_play = true;

    $(document).on('click','.curr_picture', function(){
        if(mm_play == true){
            $('.pb_pause').trigger('click')
            mm_play = false;
            $('.mm_pause').css({
                opacity: '1',
            }).animate({opacity:0},500)
        }

        else if(mm_play == false){
            $('.pb_play').trigger('click')
            mm_play = true;
            $('.mm_play').css({
                opacity: '1',
            }).animate({opacity:0},500)

        }
    }) // 이하 동일, 플레이어 창에서의 클릭이벤트는 전부 자바스크립트 방식으로 변경해야할듯. 제이쿼리 방식이 안먹음

    $(document).on('mousedown','.music_list_title',function(){
        $(this).toggleClass('')
    });
////////////////   플레이어 전체트랙 클릭이벤트   //////////////////
    $(document).on('click','.mlt_track',function(){
        make_player_list()
    });
////////////////   플레이어 가사 클릭이벤트   //////////////////
    $(document).on('click','.mlt_ly',function(){
        $('.music_list_main').empty()
        let lyrics = $('#v_player').attr('class').split('_')[1]
        let genre = $('#v_player').attr('class').split('_')[0]
        if(genre == 'kpop'){ music_list_lyrics(0,lyrics) }
        else if(genre == 'jpop'){ music_list_lyrics(1,lyrics) }
        else if(genre == 'pop'){ music_list_lyrics(2,lyrics) }
        else if(genre == 'arnew'){ music_list_lyrics(3,lyrics) }
    });


    swiper_event()

///////////////////   사이드 3페이지 메뉴 클릭이벤트  /////////////////////

    $('#side_home').click(function(){
        $('html, body').scrollTop(0);
        scroll_ok = true;
        $('.main').empty()
        d_height = $(document).height();
    
        // 기본 재구성
        load_music_main(3)
        load_music_item_kpop($(ITEM_LIST)[2].length)
        load_music_item_jpop($(ITEM_LIST)[3].length)
        load_music_item_pop($(ITEM_LIST)[4].length)
        swiper_event()

        // 메인페이지 클릭 이벤트
        $('.kpop').click(function(){
            console.log(1111)
            linked = $(this).index()
            streaming(2)
            play_time()
            music_play()
            make_player_list()
    
            // 뮤직 플레이어 메인 이미지 수정
    
            $('.player_L').empty()
            let tmpp1 = $(this).find('.mp_music_big_title').text()
            let tmpp2 = $(this).find('.mp_music_mini_title').text()
            let tmpp3 = $(this).find('.mp_music_img > img').attr('src')
    
            music_player_title(tmpp1, tmpp2, tmpp3)
        })
    
        $('.jpop').click(function(){
            linked = $(this).index()
            streaming(3)
            play_time()
            music_play()
            make_player_list()
    
            $('.player_L').empty()
            let tmpp1 = $(this).find('.mp_music_big_title').text()
            let tmpp2 = $(this).find('.mp_music_mini_title').text()
            let tmpp3 = $(this).find('.mp_music_img > img').attr('src')
    
            music_player_title(tmpp1, tmpp2, tmpp3)
        })
        
        $('.pop').click(function(){
            linked = $(this).index()
            streaming(4)
            play_time()
            music_play()
            make_player_list()
    
            $('.player_L').empty()
            let tmpp1 = $(this).find('.mp_music_big_title').text()
            let tmpp2 = $(this).find('.mp_music_mini_title').text()
            let tmpp3 = $(this).find('.mp_music_img > img').attr('src')
    
            music_player_title(tmpp1, tmpp2, tmpp3)
        })
    })
    $('#side_around').click(function(){
        $('html, body').scrollTop(0);
        scroll_ok = false;
        let count1 = 0;
        let count2 = 4;
        let count3 = 0;
        let count11 = 0;
        let count22 = 4;
        let count33 = 0;
        $('.main').empty()
        around_main()
        around_item_box(AR_LIST[0].length)
        around_item_box_list(AR_LIST[1].length)
        around_famous_list(AR_LIST[2].length)
        around_gen_list(AR_LIST[3].length)
        for(let i=0; i<10; i++){
            around_famous_item(count1, count2, count3)
            count1 += 4
            count2 += 4
            count3 += 1
        }
        for(let i=0; i<10; i++){
            around_gen_item(count11, count22, count33)
            count11 += 4
            count22 += 4
            count33 += 1
        }
        around_vid_item(AR_LIST[4].length)
        swiper_event()
    })
    $('#side_storage').click(function(){
        let count1 = 0;
        let count2 = 4;
        let count3 = 0;
        let count11 = 0;
        let count22 = 4;
        let count33 = 0;
        $('html, body').scrollTop(0);
        $('.main').empty()
        storage_main()
        storage_item_box(ST_LIST[0].length)
        storage_item_box_list(ST_LIST[1].length)
        for(let i=0; i<5; i++){
            storage_recent_list(count1,count2,count3)
            count1 += 4
            count2 += 4
            count3 += 1
        }
        storage_art_box_list(ST_LIST[2].length)
        for(let i=0; i<6; i++){
            storage_art_list(count11,count22,count33)
            count11 += 4
            count22 += 4
            count33 += 1
        }
        swiper_event()
    })
    
    $('#side_home').trigger('click')

});

