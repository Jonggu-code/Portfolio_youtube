const ITEM_LIST = [
    // 좌측 햄버거버튼 리스트
    [
        {play_no: 2, title: 'Daily Music', master: '종구' },
        {play_no: 3, title: 'BGM', master: '종구' },
        {play_no: 4, title: 'K-POP 모음', master: '종구' },
        {play_no: 5, title: '여러분의 음악', master: 'everyone' },
        {play_no: 6, title: '국힙 플리', master: 'goodjob' },
        {play_no: 'late', title: '나중에 볼 에피소드', master: '자동 재생목록' },
        {play_no: 'recom', title: 'J-POP 모음', master: '자동 재생목록' }
    ],
    // 메인페이지 뮤직차트 리스트 (박스)
    [
        {id: 'kpop', src: 'master1', m_title: '종구', b_title: '다시 듣기'},
        {id: 'jpop', src: '15564061374196190970', m_title: '종구님을 위한 플레이리스트!', b_title: '스트레스 해소 J-POP'},
        {id: 'pop', src: 'pop', m_title: '팝 뮤직 추천리스트', b_title: '그루비룸 POP Music'}
    ],
    // 뮤직차트 리스트 음악목록 (k-pop)
    [
        {id: 'kpop_0', src: '꽃불', duration: '225', b_title: '꽃불', m_title: '심규선 (Lucia)' },
        {id: 'kpop_1', src: '마음대로', duration: '206', b_title: '마음대로', m_title: '콜드' },
        {id: 'kpop_2', src: '해바라기도가끔목이아프죠', duration: '286', b_title: '해바라기도 가끔 목이 아프죠', m_title: 'M.C The Max' },
        {id: 'kpop_3', src: 'andjuly', duration: '227', b_title: 'And July', m_title: '헤이즈 (Heize)' },
        {id: 'kpop_4', src: 'blueming', duration: '218', b_title: 'Blueming', m_title: 'IU (아이유)' },
        {id: 'kpop_5', src: 'dynamite', duration: '201', b_title: 'DYNAMITE', m_title: 'BTS (방탄소년단)' },
        {id: 'kpop_6', src: 'feelspecial', duration: '218', b_title: 'Feel Special', m_title: 'TWICE (트와이스)' },
        {id: 'kpop_7', src: 'fiesta', duration: '218', b_title: 'FIESTA', m_title: 'IZ*ONE (아이즈원)' },
        {id: 'kpop_8', src: 'happening', duration: '225', b_title: 'HAPPENING', m_title: 'AKMU (악동뮤지션)' },
        {id: 'kpop_9', src: 'jenga', duration: '211', b_title: 'JENGA', m_title: '헤이즈 (Heize)' },
        {id: 'kpop_10', src: 'never', duration: '197', b_title: 'NEVER', m_title: '국민의 아들<br>(PRODUCE 101)' },
        {id: 'kpop_11', src: 'notshy', duration: '180', b_title: 'NotShy', m_title: 'ITZY (잇지)' },
        {id: 'kpop_12', src: 'panorama', duration: '224', b_title: 'Panorama', m_title: 'IZ*ONE (아이즈원)' }
    ],
    // 뮤직차트 리스트 음악목록 (j-pop)
    [
        {id: 'jpop_0', src: 'Hunchgray', duration: '250', b_title: 'Hunch Gray', m_title: 'ZUTOMAYO • Hunch Gray' },
        {id: 'jpop_1', src: 'spiral', duration: '242', b_title: 'spiral', m_title: 'LONGMAN' },
        {id: 'jpop_2', src: 'TATTOO', duration: '297', b_title: 'TATTOO', m_title: 'OFFICIAL HIGE DANDISM' },
        {id: 'jpop_3', src: 'omoino1', duration: '281', b_title: '幾億光年 - Ikuokukonen', m_title: 'Omoinotake' },
        {id: 'jpop_4', src: 'omoino2', duration: '297', b_title: 'One Day', m_title: 'Omoinotake' },
        {id: 'jpop_5', src: 'rain', duration: '297', b_title: 'Rain', m_title: 'SEKAI NO OWARI' },
        {id: 'jpop_6', src: 'soulsoup', duration: '297', b_title: 'SOULSOUP', m_title: 'OFFICIAL HIGE DANDISM' },
        {id: 'jpop_7', src: 'overflow', duration: '201', b_title: 'Overflow', m_title: 'King Gnu' },
        {id: 'jpop_8', src: 'sayonara', duration: '201', b_title: 'Sayonara, Mata Itsuka!', m_title: 'kenshi Yonezu' },
        {id: 'jpop_9', src: 'suzume', duration: '236', b_title: 'Suzume', m_title: 'RADWIMPS' },
        {id: 'jpop_10', src: 'hero', duration: '200', b_title: 'HERO', m_title: 'Vaundy' },
        {id: 'jpop_11', src: 'humanlike', duration: '240', b_title: 'Humanlike', m_title: 'Tatsuya Kitani' }
    ],
    // 뮤직차트 리스트 음악목록 (pop)
    [
        {id: 'pop_0', src: '777', duration: '165', b_title: '777', m_title: 'Bruno Mars' },
        {id: 'pop_1', src: 'tinyriot', duration: '205', b_title: 'Tiny Riot', m_title: 'Sam Ryder' },
        {id: 'pop_2', src: 'losecontrol', duration: '211', b_title: 'Lose Control', m_title: 'Teddy Swims' },
        {id: 'pop_3', src: 'outoftime', duration: '214', b_title: 'Out Of Time', m_title: 'The Weeknd' },
        {id: 'pop_4', src: 'thatshil', duration: '146', b_title: `That's Hilarious`, m_title: 'Charlie Puth' },
        {id: 'pop_5', src: 'rise', duration: '192', b_title: `RISE`, m_title: 'The Glitch Mob, Mako' },
        {id: 'pop_6', src: 'iwontworried', duration: '149', b_title: `I Ain't Worried`, m_title: 'OneRepublic' },
        {id: 'pop_7', src: 'countingstars', duration: '258', b_title: `Counting Stars`, m_title: 'OneRepublic' },
        {id: 'pop_8', src: 'maniac', duration: '182', b_title: `Maniac`, m_title: 'Conan Gray' },
        {id: 'pop_9', src: 'theotherside', duration: '215', b_title: `The Other Side`, m_title: 'The Greatest Showman OST' },
        {id: 'pop_10', src: 'thegreatestshow', duration: '302', b_title: `The Greatest Show`, m_title: 'The Greatest Showman OST' }
    ]
]

const RECO_LIST = ['출퇴근길','행복한 기분','팟캐스트','에너지 충전','운동','휴식','집중','슬픔','로맨스','잠잘 때','파티']

const ADD_LIST = [
    // 스크롤 페이지
    [
        {id: 'addpage1', m_title: '편안해지는 시간', b_title: '분위기 있는 가을 노래'},
        {id: 'addpage2', m_title: '', b_title: '맞춤 믹스'},
        {id: 'addpage3', src: 'zutomayoicon', m_title: '아래 아티스트를 좋아한다면', b_title: 'ZUTOMAYO'},
    ],
    // 애드 페이지 1 (가을 감성)
    [
        {id: 'fall_0', src: 'fall0', b_title: '가을 감성 테마 가요', m_title: '버스커 버스커(Busker Busker), 윤종신, 규현(KYUHYUN) 및 윤도현' },
        {id: 'fall_1', src: 'fall1', b_title: '감성에 젖어드는 혼술 발라드', m_title: '김나영, 허각, 한동근 및 노을' },
        {id: 'fall_2', src: 'fall2', b_title: '낙엽을 밟으며 듣는 국내 발라드', m_title: '김나영, 노을, 임한별 및 신예영' },
        {id: 'fall_3', src: 'fall3', b_title: '감성에 젖게 하는 팝 발라드', m_title: 'Billie Eillish(빌리 아일리시), Sarah Kang,  Patrick Hizon 및 imemine' },
        {id: 'fall_4', src: 'fall4', b_title: '센치한 감성의 국내 인디', m_title: '잔나비, 허회경, 마크툽 및 공기남' },
        {id: 'fall_5', src: 'fall5', b_title: '외로움을 자극하는 국내 록', m_title: '검정치마, 쏜애플 (THORNAPPLE), 몽니 및 오왠' },
        {id: 'fall_6', src: 'fall6', b_title: '부드러운 국내 감성 힙합', m_title: '기리보이(Giriboy), IIIBOI, BIG Naugthy(서동현) 및 릴러말즈' },
        {id: 'fall_7', src: 'fall7', b_title: '가을 감성 OST', m_title: '다비치, 태연, 멜로망스(MeloMance) 및 윤미래' },
        {id: 'fall_8', src: 'fall8', b_title: '도시 감성 국내 힙합/R&B', m_title: 'IIIBOI, pH-1, 이영지 및 박재범' },
        {id: 'fall_9', src: 'fall9', b_title: '추억의 국내 올드송 멜로디', m_title: '변진섭, 해바라기, 녹색지대 및 이문세' }
    ],
    // 애드 페이지 2 (맞춤 믹스)
    [
        {id: 'mix_0', src: 'mix0', b_title: '나만의 믹스', m_title: '바운디, Yorushika, Omoinotake 및 헤이즈(Heize)' },
        {id: 'mix_1', src: 'mix1', b_title: '다시보기 믹스', m_title: 'Omoinotake, 쏜애플 및 Kenshi Yonezu' },
        {id: 'mix_2', src: 'mix2', b_title: '최신음악 믹스', m_title: 'OFFICIAL HIGE DANDISM, Eve, natori 및 Livingston' },
        {id: 'mix_3', src: 'mix3', b_title: '나만을 위한 추천 믹스', m_title: '런치, 백예린, ZUTOMAYO 및 잔나비' },
        {id: 'mix_4', src: 'mix4', b_title: '나만을 위한 맞춤 믹스 1', m_title: '바운디, 쏜애플, 런치 및 혁오' },
        {id: 'mix_5', src: 'mix5', b_title: '나만을 위한 맞춤 믹스 2', m_title: 'QWER, fromis_9(프로미스나인), XIN 및 황치열' },
        {id: 'mix_6', src: 'mix6', b_title: '나만을 위한 맞춤 믹스 3', m_title: 'Teddy Swims, Sabrina, Carpenter 및 Stacey' },
        {id: 'mix_7', src: 'mix7', b_title: '나만을 위한 맞춤 믹스 4', m_title: '쏜애플, 루시, Oshio Kotaro 및 심규선 (Lucia)' },
        {id: 'mix_8', src: 'mix8', b_title: '나만을 위한 맞춤 믹스 5', m_title: 'Samuel Kim, Creepy Nuts 및 OneRepublic' },
        {id: 'mix_9', src: 'mix9', b_title: '나만을 위한 맞춤 믹스 6', m_title: 'Eve, Ado 및 요아소비' },
        {id: 'mix_10', src: 'mix10', b_title: '나만을 위한 맞춤 믹스 7', m_title: 'Jimmy Fontana, Matsuda Seiko 및 안리' }
    ],
    // 애드 페이지 3 (아티스트 - ZUTOMAYO)
    [
        {id: 'artist_0', src: 'artist0', b_title: 'Ado', m_title: '구독자 704 만명' },
        {id: 'artist_1', src: 'artist1', b_title: 'kyougen', m_title: '앨범 • Ado' },
        {id: 'artist_2', src: 'artist2', b_title: '미나미', m_title: '구독자 146 만명' },
        {id: 'artist_3', src: 'artist3', b_title: 'Eve', m_title: '구독자 504 만명' },
        {id: 'artist_4', src: 'artist4', b_title: '레이와 시대 J-Pop', m_title: '킹 누, Ado, OFFICIAL HIGE DANDISM 및 Yuuri' },
        {id: 'artist_5', src: 'artist5', b_title: '야마', m_title: '구독자 115 만명' },
        {id: 'artist_6', src: 'artist6', b_title: 'Polkadot Stingrey', m_title: '구독자 45.3 만명' },
        {id: 'artist_7', src: 'artist7', b_title: 'Anison! - 애니메이션 송 -', m_title: '요아소비, Eve, Tatsuya Kitani 및 Mame' },
        {id: 'artist_8', src: 'artist8', b_title: '일본 록 리플레이', m_title: '킹누, ZUTOMAYO 및 Novelbright' },
        {id: 'artist_9', src: 'artist9', b_title: 'Bunka', m_title: '앨범 • Eve' }
    ]
]

const AR_LIST = [
    // 제목 문단
    [
        {id: 'ar_new', src: 'arnew', b_title: '새 앨범 및 싱글' },
        {id: 'ar_famous', src: 'arfamous', b_title: '인기곡' },
    ],
    // 새 앨범 및 싱글
    [
        {id: 'ar_new_0', src: 'arnew0', b_title: '여전히 입술을 깨물죠', m_title: '싱글 • 헤이즈(Heize)' },
        {id: 'ar_new_1', src: 'arnew1', b_title: '네모네모', m_title: '앨범 • YENA (최예나)' },
        {id: 'ar_new_2', src: 'arnew2', b_title: '아무것도 없이 너를 만나', m_title: '싱글 • Taeb2' },
        {id: 'ar_new_3', src: 'arnew3', b_title: '손해보기 싫어서 OST Part8', m_title: '싱글 • Colde (콜드)' },
        {id: 'ar_new_4', src: 'arnew4', b_title: '너나잘하셔 (feat.meenoi)', m_title: '싱글 • Gist' },
        {id: 'ar_new_5', src: 'arnew5', b_title: 'GORILLA芝居', m_title: '싱글 • Vaundy' },
        {id: 'ar_new_6', src: 'arnew6', b_title: 'Teenage Blue', m_title: '싱글 • Eve' },
        {id: 'ar_new_7', src: 'arnew7', b_title: '좋아해 거짓말 사랑해 또 거짓말', m_title: '싱글 • 온시온' },
        {id: 'ar_new_8', src: 'arnew8', b_title: 'SEE YOU', m_title: '싱글 • 로꼬 (LOCO)' },
        {id: 'ar_new_9', src: 'arnew9', b_title: 'Trouble', m_title: '싱글 • Christopher 및 이영지' },
        {id: 'ar_new_10', src: 'arnew10', b_title: 'RE RESCUE', m_title: '싱글 • REOL' },
        {id: 'ar_new_11', src: 'arnew11', b_title: 'MASCARA', m_title: '싱글 • King Gnu' },
        {id: 'ar_new_12', src: 'arnew12', b_title: '난설헌 蘭雪軒', m_title: '싱글 • 심규선' },
        {id: 'ar_new_13', src: 'arnew13', b_title: 'Otonoke', m_title: '싱글 • Creepy Nuts' },
        {id: 'ar_new_14', src: 'arnew14', b_title: 'COYOTE', m_title: '앨범 • Tonny Richman' },
        {id: 'ar_new_15', src: 'arnew15', b_title: 'Moonlit Floor', m_title: '싱글 • LISA' },
        {id: 'ar_new_16', src: 'arnew16', b_title: 'Metrocity', m_title: '싱글 • natori 및 imase' },
        {id: 'ar_new_17', src: 'arnew17', b_title: 'R.E.M', m_title: '싱글 • KiSS OF LIFE' },
        {id: 'ar_new_18', src: 'arnew18', b_title: 'MUSI-aM', m_title: '앨범 • Da-iCE' }
    ],
    // 인기곡 차트
    [
        {id: 'ar_fam_0', src: 'arfam0', rank: '1', b_title: '내 이름 맑음', m_title: 'QWER • 2nd Mini Album' },
        {id: 'ar_fam_1', src: 'arfam1', rank: '2', b_title: 'HAPPY', m_title: 'DAY6(데이식스)' },
        {id: 'ar_fam_2', src: 'arfam2', rank: '3', b_title: 'Welcome to the Show', m_title: 'DAY6(데이식스)' },
        {id: 'ar_fam_3', src: 'arfam3', rank: '4', b_title: 'Supernova', m_title: 'aespa' },
        {id: 'ar_fam_4', src: 'arfam4', rank: '5', b_title: '고민중독', m_title: 'QWER' },
        {id: 'ar_fam_5', src: 'arfam5', rank: '6', b_title: 'Supersonic', m_title: 'fromis_9 (프로미스나인)' },
        {id: 'ar_fam_6', src: 'arfam6', rank: '7', b_title: 'Supernatural', m_title: 'NewJeans' },
        {id: 'ar_fam_7', src: 'arfam7', rank: '8', b_title: 'How Sweet', m_title: 'NewJeans' },
        {id: 'ar_fam_8', src: 'arfam8', rank: '9', b_title: 'Small girl(feat. D.O)', m_title: '이영지 및 도경수' },
        {id: 'ar_fam_9', src: 'arfam9', rank: '10', b_title: 'Magnetic', m_title: 'ILLIT • SUPER REAL ME' },
        {id: 'ar_fam_10', src: 'arfam10', rank: '11', b_title: 'Armageddon', m_title: 'aespa' },
    ]
]

////////////////   왼쪽 사이드 메뉴바 관련   //////////////////

function load_items(count){
    for(let i=0; i<count; i++){
        let tmp = `<div class="side_pl_box" id="playlist${ITEM_LIST[0][i]}">
            <div class="side_pl_title">
                <h1>${ITEM_LIST[0][i].title}</h1>
                <h2>${ITEM_LIST[0][i].master}</h2>
            </div>
            <div class="side_pl_play">
                <div class="side_pl_btn">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M6,4l12,8L6,20V4z" class="style-scope yt-icon"></path></g></svg>
                </div>
            </div>
        </div>`

        $('.side_menu').append(tmp);
    }
}

////////////////   검색창 밑 네비게이션바 관련    //////////////////
function load_main_nav() {
    let tmp = `<div class="main_nav contents_area">`
    $('.main').append(tmp)
}
function load_main_nav_list(count){
    for(let i=0; i<count; i++){
        let tmp = `
            <div class="main_nav_list" id="main_nav_list1">
            ${RECO_LIST[i]}</div>
        </div>
        `

        $('.main_nav').append(tmp);
    }
}

////////////  메인 화면 3장르 뮤직박스 타이틀 생성(기본, 아이콘O)  ///////////////

function load_music_main(count){
    for(let i=0; i<count; i++){
        let tmp = `<div class="main_page_box contents_area" id="${ITEM_LIST[1][i].id}">
                <div class="mp_title_page">
                <div class="mp_master_icon"><img src="./img/youtube_music/${ITEM_LIST[1][i].src}.jpg" alt=""></div>
                <div class="mp_title">
                    <div class="mp_mini_title">${ITEM_LIST[1][i].m_title}</div>
                    <div class="mp_big_title">${ITEM_LIST[1][i].b_title}</div>
                </div>
                <div class="mp_navi">
                    <div class="swiper-button-prev${i} btn">◀</div>
                    <div class="swiper-button-next${i} btn">▶</div>
                    <div class="mp_more">+ more</div>
                </div>
            </div>
            <div class="swiper mySwiper${i}"><div class="mp_music_box swiper-wrapper"></div>
            </div>
            </div>
        `

        $('.main').append(tmp)
    }
}

///////////// 메인 화면 3장르 뮤직박스 타이틀 생성(기본, 아이콘X)  ////////////////

function load_music_main_noicon(count){
    for(let i=0; i<count; i++){
        let tmp = `<div class="main_page_box contents_area" id="${ITEM_LIST[1][i].id}">
                <div class="mp_title_page">
                <div class="mp_title">
                    <div class="mp_mini_title">${ITEM_LIST[1][i].m_title}</div>
                    <div class="mp_big_title">${ITEM_LIST[1][i].b_title}</div>
                </div>
                <div class="mp_navi">
                    <div class="swiper-button-prev${i} btn">◀</div>
                    <div class="swiper-button-next${i} btn">▶</div>
                    <div class="mp_more">+ more</div>
                </div>
            </div>
            <div class="swiper mySwiper${i}"><div class="mp_music_box swiper-wrapper"></div>
            </div>
            </div>`

        $('.main').append(tmp)
    }
}

/////////////// 무한스크롤 타이틀박스 생성 함수 //////////////////

function load_scroll(count){
    for(let i=0; i<count; i++){
        let tmp = `<div class="main_page_box contents_area" id="${ADD_LIST[0][i].id}">
                <div class="mp_title_page">
                <div class="mp_master_icon"><img src="./img/youtube_music/addpage/${ADD_LIST[0][i].src}.jpg" alt=""></div>
                <div class="mp_title">
                    <div class="mp_mini_title">${ADD_LIST[0][i].m_title}</div>
                    <div class="mp_big_title">${ADD_LIST[0][i].b_title}</div>
                </div>
                <div class="mp_navi">
                    <div class="swiper-button-prev${i+3} btn">◀</div>
                    <div class="swiper-button-next${i+3} btn">▶</div>
                    <div class="mp_more">+ more</div>
                </div>
            </div>
            <div class="swiper mySwiper${i+3}"><div class="mp_music_box swiper-wrapper"></div>
            </div>
            </div>`

        $('.main').append(tmp)
    }
}

function load_scroll_noicon(count){
    for(let i=0; i<count; i++){
        let tmp = `<div class="main_page_box contents_area" id="${ADD_LIST[0][i].id}">
                <div class="mp_title_page">
                <div class="mp_title">
                    <div class="mp_mini_title">${ADD_LIST[0][i].m_title}</div>
                    <div class="mp_big_title">${ADD_LIST[0][i].b_title}</div>
                </div>
                <div class="mp_navi">
                    <div class="swiper-button-prev${i+3} btn">◀</div>
                    <div class="swiper-button-next${i+3} btn">▶</div>
                    <div class="mp_more">+ more</div>
                </div>
            </div>
            <div class="swiper mySwiper${i+3}"><div class="mp_music_box swiper-wrapper"></div>
            </div>
            </div>`

        $('.main').append(tmp)
    }
}

function load_scroll_item(count, el){
    for(let i=0; i<count; i++){
        let tmp = `
                <div class="add mp_music_page swiper-slide" id="${ADD_LIST[el][i].id}">
                    <div class="mp_music_img">
                        <div class="mp_img_hover"></div>
                        <div class="mp_play_btn">
                        <div class="mp_play_on">▶</div>
                    </div>
                        <div class="mp_btn_more">
                            <div class="mp_circle"> </div>
                            <div class="mp_circle"> </div>
                            <div class="mp_circle"> </div>
                        </div>
                    <img src="./img/youtube_music/addpage/${ADD_LIST[el][i].src}.jpg" alt="">
                    </div>
                    <div class="mp_music_big_title">${ADD_LIST[el][i].b_title}</div>
                    <div class="mp_music_mini_title">${ADD_LIST[el][i].m_title}</div>
                </div>
            `
        $(`#addpage${el} .mp_music_box`).append(tmp)
    }
}

/////////////// 메인 화면 장르별 박스 생성 함수 (K-POP) //////////////////

function load_music_item_kpop(count){
    for(let i=0; i<count; i++){
        let tmp = `
                <div class="kpop mp_music_page swiper-slide" id="${ITEM_LIST[2][i].id}">
                    <div class="mp_music_img">
                        <div class="mp_img_hover"></div>
                        <div class="mp_play_btn">
                        <div class="mp_play_on">▶</div>
                    </div>
                        <div class="mp_btn_more">
                            <div class="mp_circle"> </div>
                            <div class="mp_circle"> </div>
                            <div class="mp_circle"> </div>
                        </div>
                    <img src="./img/youtube_music/${ITEM_LIST[2][i].src}.jpg" alt="">
                    </div>
                    <div class="mp_music_big_title">${ITEM_LIST[2][i].b_title}</div>
                    <div class="mp_music_mini_title">${ITEM_LIST[2][i].m_title}</div>
                </div>
            `
        $('#kpop .mp_music_box').append(tmp)
    }
}

/////////////// 메인 화면 장르별 박스 생성 함수 (J-POP) //////////////////

function load_music_item_jpop(count){
    for(let i=0; i<count; i++){
        let tmp = `
                        <div class="jpop mp_music_page swiper-slide" id="${ITEM_LIST[3][i].id}">
                            <div class="mp_music_img">
                                <div class="mp_img_hover"></div>
                                <div class="mp_play_btn">
                                <div class="mp_play_on">▶</div>
                                </div>
                                <div class="mp_btn_more">
                                    <div class="mp_circle"> </div>
                                    <div class="mp_circle"> </div>
                                    <div class="mp_circle"> </div>
                                </div>
                                <img src="./img/youtube_music/${ITEM_LIST[3][i].src}.jpg" alt="">
                            </div>
                        <div class="mp_music_big_title">${ITEM_LIST[3][i].b_title}</div>
                    <div class="mp_music_mini_title">${ITEM_LIST[3][i].m_title}</div>
                </div>
            `

        $('#jpop .mp_music_box').append(tmp)
    }
}

/////////////// 메인 화면 장르별 박스 생성 함수 (POP) //////////////////

function load_music_item_pop(count){
    for(let i=0; i<count; i++){
        let tmp = `
                        <div class="pop mp_music_page swiper-slide" id="${ITEM_LIST[4][i].id}">
                            <div class="mp_music_img">
                                <div class="mp_img_hover"></div>
                                <div class="mp_play_btn">
                                <div class="mp_play_on">▶</div>
                                </div>
                                <div class="mp_btn_more">
                                    <div class="mp_circle"> </div>
                                    <div class="mp_circle"> </div>
                                    <div class="mp_circle"> </div>
                                </div>
                                <img src="./img/youtube_music/${ITEM_LIST[4][i].src}.jpg" alt="">
                            </div>
                        <div class="mp_music_big_title">${ITEM_LIST[4][i].b_title}</div>
                    <div class="mp_music_mini_title">${ITEM_LIST[4][i].m_title}</div>
                </div>
            `

        $('#pop .mp_music_box').append(tmp)
    }
}

/////////////// main_player 함수//////////////////

function music_player_title(txt1, txt2, txt3){
    let tmp = `
            <div class="music_title">${txt1}</div>
            <div class="music_sub">${txt2}</div>
            <div class="curr_picture"><img src="${txt3}" alt=""></div>
            `

    $('.player_L').append(tmp)
}

function music_list_item(count, tmp1){
    for(let i=0; i<count; i++){
        let time = Math.floor(ITEM_LIST[tmp1][i].duration % 60)
        if(time < 10){
            time = '0'+ time
        }
        let tmp = `
        <li class="music_list_item">
            <div class="mli_img">
                <div class="mli_play">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="#fff" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M6,4l12,8L6,20V4z" class="style-scope yt-icon"></path></g></svg>
                </div>
                <img src="./img/youtube_music/${ITEM_LIST[tmp1][i].src}.jpg" alt="">
            </div>
            <div class="mli_txt">
                <div class="mli_title">${ITEM_LIST[tmp1][i].b_title}</div>
                <div class="mli_s_title">${ITEM_LIST[tmp1][i].m_title}</div>
            </div>
            <div class="mli_time">
            ${Math.floor(ITEM_LIST[tmp1][i].duration / 60)}:${time}</div>
        </li>
    `
    $('.music_list_main').append(tmp)
    }
}

/////////////// main_around 페이지 구성 함수//////////////////

function around_main(){
    let tmp = `
    <div class="main_around contents_area">
    
    </div>
    `
    $('.main').append(tmp)
}

function around_item_box(count){
    for(let i=0; i<count; i++){
        let tmp = `<div class="main_page_box contents_area" id="${AR_LIST[0][i].id}">
        <div class="mp_title_page">
        <div class="mp_title">
            <div class="mp_big_title">${AR_LIST[0][i].b_title}</div>
        </div>
            <div class="mp_navi">
                <div class="swiper-button-prev${i} btn">◀</div>
                <div class="swiper-button-next${i} btn">▶</div>
                <div class="mp_more">+ more</div>
            </div>
        </div>
        <div class="swiper mySwiper${i}"><div class="mp_music_box swiper-wrapper"></div>
        </div>
        </div>
    `
    $('.main_around').append(tmp)
    }
}

function around_item_box_list(count){
    for(let i=0; i<count; i++){
        let tmp = `
                <div class="mp_music_page swiper-slide" id="${AR_LIST[1][i].id}">
                    <div class="mp_music_img">
                        <div class="mp_img_hover"></div>
                        <div class="mp_play_btn">
                        <div class="mp_play_on">▶</div>
                    </div>
                        <div class="mp_btn_more">
                            <div class="mp_circle"> </div>
                            <div class="mp_circle"> </div>
                            <div class="mp_circle"> </div>
                        </div>
                    <img src="./img/youtube_music/around/${AR_LIST[1][i].src}.jpg" alt="">
                    </div>
                    <div class="mp_music_big_title">${AR_LIST[1][i].b_title}</div>
                    <div class="mp_music_mini_title">${AR_LIST[1][i].m_title}</div>
                </div>
            `
    $(`#ar_new .mp_music_box`).append(tmp)
    }
}

function around_famous_list(count){
    for(let i=0; i<count; i++){
        let tmp = `
            <div class="ma_famous_box swiper-slide" id="">
                <div class="maf_item">
                    <div class="mafi_img">
                        <img src="./img/youtube_music/famous/내이름맑음.jpg" alt="">
                    </div>
                    <div class="mafi_rank_box">
                        <div class="mafi_updown">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M18,15H6l6-6L18,15z" class="style-scope yt-icon"></path></g></svg>
                        </div>
                        <div class="mafi_rank">1</div>
                    </div>
                    <div class="mafi_title_box">
                        <div class="mafi_title">내 이름 맑음</div>
                        <div class="mafi_s_title">QWER</div>
                    </div>
                </div>
            </div>
        `


    $(`#ar_famous .mp_music_box`).append(tmp)
    }


}
/////////////// main_around 페이지 구성 함수//////////////////

load_items(7)
load_main_nav()
load_main_nav_list(11)
load_music_main(3)
load_music_item_kpop($(ITEM_LIST)[2].length)
load_music_item_jpop($(ITEM_LIST)[3].length)
load_music_item_pop($(ITEM_LIST)[4].length)