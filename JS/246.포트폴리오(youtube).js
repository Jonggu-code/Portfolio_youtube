$(document).ready(function(){

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

    ////////////////   클릭 위치 계산함수    //////////////////

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
    let volume_value;
    let v_volume = $('.volume_bar_hover');
    let muted = $('.volume_icon');
    let muted_on = $('.muted_icon')
    let chk = false;
    function volume_pos(){
        $('.volume_bar_active').css({
            width: `${clickPercentage * 100}%`
        })
        $('.volume_circle').css({
            left: `${clickPercentage * 100}%`
        })
    }

////////////////   볼륨 조절 관련 이벤트    //////////////////

    $('.volume_bar_hover').mousedown(function(event){
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
    $('.volume_bar_hover').mousemove(function(event){
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
    $('.volume_bar_hover').mouseup(function(event){ 
        $('.volume_circle').css({
            transform: 'translate(-50%,-50%) scale(1)'
        })
        chk=false; 
    })
    $('.pb_right_control').mouseenter(function(event){ 
        chk=false; 
    })
    $('.pb_right_control').mouseleave(function(event){ 
        chk=false; 
    })

////////////////   음소거 관련 클릭이벤트    //////////////////

    muted.click(function(){   
        $('#v_player')[0].muted=true; // 음소거를 실행해라 라는 뜻 

        v_volume.css('left').split('px')[0] = 0 // 실제 볼륨 0으로 변경
        $('.volume_bar_active').css({
            width: `0%`
        })
        $('.volume_circle').css({
            left: `0%`
        })
    }) 

    muted_on.click(function(){
        $('#v_player')[0].muted=false; // 음소거를 취소해라
        $('.volume_bar_active').css({
            width: `${volume_value}`
        })
        $('.volume_circle').css({
            left: `${volume_value}`
        })
    })

    let play_interval;
    let time_play;
    let bar_inc = 0;
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

        $('.bar_circle').css({
            left: `${clickPercentage_main100}%`
        })
        $('.play_bar_active').css({
            width: `${clickPercentage_main100}%`
        })
        bar_inc = clickPercentage_main100
    })

    ////////////////  무한루프 클릭이벤트    //////////////////

    let loop = true;
    $('.loop').click(function(){
        if(loop == true){
            $('#loop').css({
                fill: '#fff'
            })
            loop = false
        }
        else if(loop == false){
            $('.loop').css({
                display: 'none'
            })
            $('.loop_one').css({
                display: 'block'
            })
            loop = true
        }
    })

    $('.loop_one').click(function(){
        $('.loop_one').css({
            display: 'none'
        })
        $('.loop').css({
            display: 'block'
        })
        $('#loop').css({
            fill: '#8b8b8b'
        })
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
        $('.volume_icon').css({
            display: 'none'
        })
        $('.muted_icon').css({
            display: 'block'
        })
    })

    $('.muted_icon').click(function(){
        $('.volume_icon').css({
            display: 'block'
        })
        $('.muted_icon').css({
            display: 'none'
        })
        $('.volume_bar_active').css({
            width: `${volume_value * 100}%`
        })
        $('.volume_circle').css({
            left: `${volume_value * 100}%`
        })
    })

    ////////////////   플레이타임 폰트 생성   //////////////////

    let time = document.getElementsByClassName('pb_play_time')[0]

    ////////////////   이미지 클릭 이벤트    //////////////////
    
    let mm_time = 0;
    let ss_time = 0;
    let movie_leng = 0;
    let linked = 0;
    function streaming(cate) {
        $('.pb_play').css({ display: 'none' })
        $('.pb_pause').css({ display: 'block' })
        clearInterval(play_interval)
        clearInterval(time_play)
        let img_link = `<img src="./img/youtube_music/${ITEM_LIST[cate][linked].src}.jpg" alt=""></img>`
        let music_box = `<video src="./media/${ITEM_LIST[cate][linked].src}.mp4" class="${ITEM_LIST[cate][linked].id}" id="v_player"></video>`

        $('.music_player > video').remove()
        $('.music_player').append(music_box)
        $('.pb_thumbnail > img').remove()
        $('.pb_thumbnail').append(img_link)
        $('.pb_title_b').html(`${ITEM_LIST[cate][linked].b_title}`)
        $('.pb_title_m').html(`${ITEM_LIST[cate][linked].m_title}`)
        $('#v_player')[0].play()

        time_m = 0;
        time_s = '00';
        bar_inc = 0;
        
        movie_leng = $(ITEM_LIST)[cate][linked].duration
        mm_time = Math.floor(movie_leng / 60)
        ss_time = Math.floor(movie_leng % 60)
        ss_time = ss_time<10?"0"+ss_time:ss_time

        $('.player_bar').css({
            display: 'flex'
        })

        time_play = setInterval(() => {
            play_time()
        }, 1000);
        play_interval = setInterval(() => {
            music_play()
        }, 1000)

        // 자동 재생 

        $('#v_player').on('ended', function() {
            $('.pb_next').trigger('click')
        });
    }

////////////////   뮤직 장르별 클릭 이벤트    //////////////////

    $('.kpop').click(function(){
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
    
////////////////   하단 플레이바 막대기 조절 함수    //////////////////

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
    
////////////////   하단 플레이바 플레이타임 함수    //////////////////

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

    // 이미지 클릭 후 플레이어창 띄우면 리스트 업데이트
    function make_player_list(){
        cate_chk = $('#v_player').attr('class').split('_')[0]

        if(cate_chk == 'kpop'){
            $('.music_list_item').remove()
            list_chk = $('.kpop').length
            music_list_item(list_chk, 2)
        }
        else if (cate_chk == 'jpop'){
            $('.music_list_item').remove()
            list_chk = $('.jpop').length
            music_list_item(list_chk, 3)
        }
        else if (cate_chk == 'pop'){
            $('.music_list_item').remove()
            list_chk = $('.pop').length
            music_list_item(list_chk, 4)
        }
    } 

    $('.player_updown').click(function(){
        if(btn == true){
            $(this).css({ transform: 'rotateZ(180deg)' })
            $('.main_player').css({ height: '91.5%' })
            $('body').css({ overflow: 'hidden' })
            btn = false;
        }
        else if(btn == false){
            $(this).css({ transform: 'rotateZ(0deg)' })
            $('.main_player').css({ height: '0' })
            $('body').css({ overflow: 'visible' })
            btn = true;
        }
    });

    // 앞으로 넘어가기

    $('.pb_next').click(function(){
        cate_chk = $('#v_player').attr('class').split('_')[0]
        if(cate_chk == 'kpop'){
            linked = linked + 1
            linked = linked % $(ITEM_LIST)[2].length
            streaming(2)
        }
        else if (cate_chk == 'jpop'){
            linked = linked + 1
            linked = linked % $(ITEM_LIST)[3].length
            streaming(3)
        }
        else if (cate_chk == 'pop'){
            linked = linked + 1
            linked = linked % $(ITEM_LIST)[4].length
            streaming(4)
        }
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
    })

////////////////   무한스크롤 관련   //////////////////

    let d_height = $(document).height();
    let w_height = $(window).height();
    let add_length = 0;

    $(window).scroll(function(){
        let s_bot = $(window).scrollTop() + w_height
        console.log(d_height, w_height, s_bot)
        add_length = 1

        if(d_height <= (s_bot + 1)) {
            load_scroll_noicon(ADD_LIST[0].length)
            for(let i=0; i<3; i++) {
                load_scroll_item(ADD_LIST[add_length].length, add_length)
                add_length += 1
            }
            d_height = $(document).height();
            ttt()
        }
    })

////////////////   main_player   //////////////////

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
    
    // $('.music_list_item').click(function(event){
    $(document).on('click','.music_list_item', function(){
        $('.player_L').empty()
        let tmp1 = $(this).find('.mli_title').text()
        let tmp2 = $(this).find('.mli_s_title').text()
        let tmp3 = $(this).find('.mli_img > img').attr('src')
        
        music_player_title(tmp1, tmp2, tmp3)

        cate_chk = $('#v_player').attr('class').split('_')[0]

        if(cate_chk == 'kpop'){
            linked = $(this).index()
            streaming(2)
            play_time()
        }
        else if (cate_chk == 'jpop'){
            linked = $(this).index()
            streaming(3)
            play_time()
        }
        else if (cate_chk == 'pop'){
            linked = $(this).index()
            streaming(4)
            play_time()
        }
    })

    let mm_play = true;
    $(document).on('click','.curr_picture > img', function(){

        if(mm_play == true){
            $('.pb_pause').trigger('click')
            mm_play = false;
            $('.mm_play').css({
                opacity: '0.5',
                transform: 'scale(2)',
                transition: 'all 1s'
            }).animate({opacity:0},1000)
        }

        else if(mm_play == false){
            $('.pb_play').trigger('click')
            mm_play = true;
        }
    })
    
    ttt()

///////////////////   main_around   /////////////////////
    $('#side_home').click(function(){
        $('.main').empty()
        d_height = $(document).height();
    
        // 기본 재구성
        load_main_nav()
        load_main_nav_list(11)
        load_music_main(3)
        load_music_item_kpop($(ITEM_LIST)[2].length)
        load_music_item_jpop($(ITEM_LIST)[3].length)
        load_music_item_pop($(ITEM_LIST)[4].length)
        ttt()

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
        $('.main').empty()
        around_main()
        around_item_box($(AR_LIST)[0].length)
        around_item_box_list($(AR_LIST)[1].length)
        ttt()
    })


});

