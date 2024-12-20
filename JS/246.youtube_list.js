const ITEM_LIST = [
    // 좌측 햄버거버튼 리스트
    [
        {play_no: 2, title: '새로운 재생목록을 추가해보세요.', master: '' },
    ],
    // 메인페이지 뮤직차트 리스트 (박스)
    [
        {id: 'kpop', src: 'master1', m_title: '종구', b_title: '다시 듣기'},
        {id: 'jpop', src: 'master4', m_title: '종구님을 위한 플레이리스트!', b_title: '스트레스 해소 J-POP'},
        {id: 'pop', src: 'pop', m_title: '팝 뮤직 추천리스트', b_title: '그루비룸 POP Music'}
    ],
    // 뮤직차트 리스트 음악목록 (k-pop)
    [
        {id: 'kpop_0', src: '꽃불', duration: '225', b_title: '꽃불', m_title: '심규선 (Lucia)'},
        {id: 'kpop_1', src: '마음대로', duration: '206', b_title: '마음대로', m_title: '콜드',},
        {id: 'kpop_2', src: '해바라기도가끔목이아프죠', duration: '286', b_title: '해바라기도 가끔 목이 아프죠', m_title: 'M.C The Max' },
        {id: 'kpop_3', src: 'andjuly', duration: '227', b_title: 'And July', m_title: '헤이즈 (Heize)' },
        {id: 'kpop_4', src: 'blueming', duration: '218', b_title: 'Blueming', m_title: 'IU (아이유)' },
        {id: 'kpop_5', src: 'dynamite', duration: '201', b_title: 'DYNAMITE', m_title: 'BTS (방탄소년단)' },
        {id: 'kpop_6', src: 'feelspecial', duration: '218', b_title: 'Feel Special', m_title: 'TWICE (트와이스)' },
        {id: 'kpop_7', src: 'fiesta', duration: '218', b_title: 'FIESTA', m_title: 'IZ*ONE (아이즈원)' },
        {id: 'kpop_8', src: 'happening', duration: '225', b_title: 'HAPPENING', m_title: 'AKMU (악동뮤지션)' },
        {id: 'kpop_9', src: 'jenga', duration: '211', b_title: 'JENGA', m_title: '헤이즈 (Heize)' },
        {id: 'kpop_10', src: 'never', duration: '197', b_title: 'NEVER', m_title: '국민의 아들 (PRODUCE 101)' },
        {id: 'kpop_11', src: 'notshy', duration: '180', b_title: 'NotShy', m_title: 'ITZY (잇지)' },
        {id: 'kpop_12', src: 'panorama', duration: '224', b_title: 'Panorama', m_title: 'IZ*ONE (아이즈원)' }
    ],
    // 뮤직차트 리스트 음악목록 (j-pop)
    [
        {id: 'jpop_0', src: 'hunchgray', duration: '250', b_title: 'Hunch Gray', m_title: 'ZUTOMAYO • Hunch Gray' },
        {id: 'jpop_1', src: 'spiral', duration: '242', b_title: 'spiral', m_title: 'LONGMAN' },
        {id: 'jpop_2', src: 'tattoo', duration: '297', b_title: 'TATTOO', m_title: 'OFFICIAL HIGE DANDISM' },
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
    ],
        // 새 앨범 및 싱글
    [
        {id: 'arnew_0', src: '여전히입술을', duration: '251', b_title: '여전히 입술을 깨물죠', m_title: '헤이즈(Heize)' },
        {id: 'arnew_1', src: '네모네모', duration: '178', b_title: '네모네모', m_title: 'YENA (최예나)' },
        {id: 'arnew_2', src: '아무것도없이', duration: '204', b_title: '아무것도 없이 너를 만나', m_title: 'Taeb2' },
        {id: 'arnew_3', src: '오직너에게만', duration: '209', b_title: '손해보기 싫어서 OST Part8', m_title: 'Colde (콜드)' },
        {id: 'arnew_4', src: '너나잘하셔', duration: '126', b_title: '너나잘하셔 (feat.meenoi)', m_title: 'Gist' },
        {id: 'arnew_5', src: 'gorilla', duration: '189', b_title: 'GORILLA芝居', m_title: 'Vaundy' },
        {id: 'arnew_6', src: 'teenageblue', duration: '226', b_title: 'Teenage Blue', m_title: 'Eve' },
        {id: 'arnew_7', src: '좋아해거짓말', duration: '188', b_title: '좋아해 거짓말 사랑해 또 거짓말', m_title: '온시온' },
        {id: 'arnew_8', src: 'seeyou', duration: '148', b_title: 'SEE YOU', m_title: '로꼬 (LOCO)' },
        {id: 'arnew_9', src: 'trouble', duration: '165', b_title: 'Trouble', m_title: 'Christopher 및 이영지' },
        {id: 'arnew_10', src: 'rerescue', duration: '233', b_title: 'RE RESCUE', m_title: 'REOL' },
        {id: 'arnew_11', src: 'mascara', duration: '215', b_title: 'MASCARA', m_title: 'King Gnu' },
        {id: 'arnew_12', src: '난설헌', duration: '341', b_title: '난설헌 蘭雪軒', m_title: '심규선' },
        {id: 'arnew_13', src: 'otonoke', duration: '187', b_title: 'Otonoke', m_title: 'Creepy Nuts' },
        {id: 'arnew_14', src: 'coyote', duration: '164', b_title: 'COYOTE', m_title: 'Tonny Richman' },
        {id: 'arnew_15', src: 'moonlit', duration: '155', b_title: 'Moonlit Floor', m_title: 'LISA' },
        {id: 'arnew_16', src: 'metrocity', duration: '201', b_title: 'Metrocity', m_title: 'natori 및 imase' },
        {id: 'arnew_17', src: 'rem', duration: '170', b_title: 'R.E.M', m_title: 'KiSS OF LIFE' },
        {id: 'arnew_18', src: 'musiam', duration: '151', b_title: 'MUSI-aM', m_title: 'Da-iCE' }
    ]
]
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
        {id: 'ar_gen', src: 'argen', b_title: '분위기 및 장르' },
        {id: 'ar_vid', src: 'arvid', b_title: '새 뮤직 비디오' },
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
        {id: 'ar_fam_11', src: 'arfam11', rank: '12', b_title: '소나기', m_title: '이클립스 • 선재 업고 튀어 OST' },
        {id: 'ar_fam_12', src: 'arfam12', rank: '13', b_title: '슬픈 초대장', m_title: '순순희 (지환)' },
        {id: 'ar_fam_13', src: 'arfam13', rank: '14', b_title: 'SOS (Sped Up version)', m_title: '피프티 피프티' },
        {id: 'ar_fam_14', src: 'arfam14', rank: '15', b_title: 'Heavy Is the Crown', m_title: 'Linkin Park' },
        {id: 'ar_fam_15', src: 'arfam15', rank: '16', b_title: '천상연 (선녀외전 OST)', m_title: '이창섭' },
        {id: 'ar_fam_16', src: 'arfam16', rank: '17', b_title: 'CRAZY', m_title: 'LE SSERAFIM' },
        {id: 'ar_fam_17', src: 'arfam17', rank: '18', b_title: 'Pretender', m_title: 'Official Hige Dandism' },
        {id: 'ar_fam_18', src: 'arfam18', rank: '19', b_title: 'MEOW', m_title: 'MEOVV' },
        {id: 'ar_fam_19', src: 'arfam19', rank: '20', b_title: '녹아내려요 Melt Down', m_title: 'DAY6' },
        {id: 'ar_fam_20', src: 'arfam20', rank: '21', b_title: '나는 아픈 건 딱 질색이니까', m_title: '(여자)아이들' },
        {id: 'ar_fam_21', src: 'arfam21', rank: '22', b_title: 'RISE', m_title: 'League of Legends OST' },
        {id: 'ar_fam_22', src: 'arfam22', rank: '23', b_title: '별별별 (See That?)', m_title: 'NMIXX' },
        {id: 'ar_fam_23', src: 'arfam23', rank: '24', b_title: 'Sticky', m_title: 'KISS OF LIFE' },
        {id: 'ar_fam_24', src: 'arfam24', rank: '25', b_title: 'Gravity', m_title: '피프티 피프티' },
        {id: 'ar_fam_25', src: 'arfam25', rank: '26', b_title: '처음 본 순간(영화 사랑의 하츄핑 OST)', m_title: '윈터 (WINTER)' },
        {id: 'ar_fam_26', src: 'arfam26', rank: '27', b_title: '클락션(Klaxon)', m_title: '(여자)아이들' },
        {id: 'ar_fam_27', src: 'arfam27', rank: '28', b_title: 'Love wins all', m_title: '아이유(IU)' },
        {id: 'ar_fam_28', src: 'arfam28', rank: '29', b_title: 'Touch', m_title: 'KATSEYE' },
        {id: 'ar_fam_29', src: 'arfam29', rank: '30', b_title: '가짜 아이돌', m_title: 'QWER' },
        {id: 'ar_fam_30', src: 'arfam30', rank: '31', b_title: 'Congratulations', m_title: 'DAY6(데이식스)' },
        {id: 'ar_fam_31', src: 'arfam31', rank: '32', b_title: 'Bubble Gum', m_title: 'NewJeans' },
        {id: 'ar_fam_32', src: 'arfam32', rank: '33', b_title: 'Home', m_title: '임영웅' },
        {id: 'ar_fam_33', src: 'arfam33', rank: '34', b_title: '해야 (HEYA)', m_title: 'IVE (아이브)' },
        {id: 'ar_fam_34', src: 'arfam34', rank: '35', b_title: '온기', m_title: '임영웅' },
        {id: 'ar_fam_35', src: 'arfam35', rank: '36', b_title: '에피소드', m_title: '이무진' },
        {id: 'ar_fam_36', src: 'arfam36', rank: '37', b_title: 'Drama', m_title: 'aespa' },
        {id: 'ar_fam_37', src: 'arfam37', rank: '38', b_title: '첫 만남은 계획대로 되지 않아', m_title: 'TWS' },
        {id: 'ar_fam_38', src: 'arfam38', rank: '39', b_title: 'MANIAC', m_title: 'VIVIZ (비비지)' },
        {id: 'ar_fam_39', src: 'arfam39', rank: '40', b_title: '숲', m_title: '최유리' },
    ],
    // 분위기 및 장르
    [
        {id:'ar_gen_0', backg: 'ffe780' , title: '힘이 필요할 때' },
        {id:'ar_gen_1', backg: 'e24b00' , title: '힙합' },
        {id:'ar_gen_2', backg: 'ffc200' , title: '출퇴큰 & 등하교' },
        {id:'ar_gen_3', backg: 'cc0000' , title: '사랑 노래' },
        {id:'ar_gen_4', backg: '0092bf' , title: '국내댄스' },
        {id:'ar_gen_5', backg: 'e24b00' , title: '한국 힙합' },
        {id:'ar_gen_6', backg: 'cc0000' , title: '록' },
        {id:'ar_gen_7', backg: 'ff8d40' , title: '운동할 때' },
        {id:'ar_gen_8', backg: 'ff78ff' , title: 'J팝' },
        {id:'ar_gen_9', backg: 'cc0000' , title: '국내 록/얼터너티브' },
        {id:'ar_gen_10', backg: '8c8c8c' , title: '슬픔' },
        {id:'ar_gen_11', backg: 'ffe780' , title: '계절 변화를 위한 테마' },
        {id:'ar_gen_12', backg: 'a4ffa4' , title: '행복한 기분' },
        {id:'ar_gen_13', backg: 'a4c5ff' , title: '국내 발라드' },
        {id:'ar_gen_14', backg: 'b47bff' , title: '파티 음악' },
        {id:'ar_gen_15', backg: 'a4c5ff' , title: '편안한 분위기' },
        {id:'ar_gen_16', backg: '7b3edb' , title: '국내 R&B' },
        {id:'ar_gen_17', backg: '606060' , title: '연말연시' },
        {id:'ar_gen_18', backg: 'cccccc' , title: '인디 & 얼터네이티브' },
        {id:'ar_gen_19', backg: '4deeff' , title: 'OST & 뮤지컬' },
        {id:'ar_gen_20', backg: '7b3edb' , title: 'R&B 및 소울' },
        {id:'ar_gen_21', backg: 'a4ffa4' , title: '2010년대' },
        {id:'ar_gen_22', backg: '7b3edb' , title: '잠잘 때' },
        {id:'ar_gen_23', backg: 'cccccc' , title: '집중할 때' },
        {id:'ar_gen_24', backg: '4c5cff' , title: '재즈' },
        {id:'ar_gen_25', backg: '00a513' , title: '포크/어쿠스틱' },
        {id:'ar_gen_26', backg: '0092bf' , title: '가족' },
        {id:'ar_gen_27', backg: 'ff78ff' , title: 'Pop' },
        {id:'ar_gen_28', backg: '00a513' , title: '크리스마스' },
        {id:'ar_gen_29', backg: 'a4ffa4' , title: '2000년대' },
        {id:'ar_gen_30', backg: 'cccccc' , title: '클래식' },
        {id:'ar_gen_31', backg: 'a4ffa4' , title: '1980년대' },
        {id:'ar_gen_32', backg: 'a4ffa4' , title: '1990년대' },
        {id:'ar_gen_33', backg: 'a4ffa4' , title: '트로트' },
        {id:'ar_gen_34', backg: '0092bf' , title: '댄스 & 일렉트로닉' },
        {id:'ar_gen_35', backg: '1d1d1d' , title: '블랙 라이브즈 매터' },
        {id:'ar_gen_36', backg: 'a4ffa4' , title: '1970년대 음악' },
        {id:'ar_gen_37', backg: 'a4ffa4' , title: '1960년대' },
        {id:'ar_gen_38', backg: '337dff' , title: '컨트리 & 아메리카나' },
        {id:'ar_gen_39', backg: 'ffc200' , title: '라틴' },
    ],
    // 새 뮤직 비디오
    [
        {id:'ar_video_0', src:'video0', title:'BIG Naughty X Kid Milli - Freestylin Official MV', b_title:'H1GHR MUSIC • 조회수 67만회', vid_src:'https://www.youtube.com/watch?v=eIkj7eBYsKI'},
        {id:'ar_video_1', src:'video1', title:'Supernova (KENZIE RE:WORKS)', b_title: 'aespa 및 KENZIE • 조회수 17만회', vid_src:'https://www.youtube.com/watch?v=xJgSJzNAEG8'},
        {id:'ar_video_2', src:'video2', title:'토네이도', b_title:'기안84 • 저허;스 3.1만회', vid_src:'https://www.youtube.com/watch?v=bNzrEhHUAf8'},
        {id:'ar_video_3', src:'video3', title:'맹그로브', b_title:'윤하 • 조회수 4.2만회', vid_src:'https://www.youtube.com/watch?v=2p2AiFY1Sm0'},
        {id:'ar_video_4', src:'video4', title:'SEE YOU', b_title:'Loco • 조회수 18만회', vid_src:'https://www.youtube.com/watch?v=LoCx5iKa_sM'},
        {id:'ar_video_5', src:'video5', title:'네모네모', b_title:'YENA (최예나) • 조회수 26만회', vid_src:'https://www.youtube.com/watch?v=MPp8hbuZwW0'},
        {id:'ar_video_6', src:'video6', title:'가슴으로 운다', b_title:'주호 • 조회수 1.8만회', vid_src:'https://www.youtube.com/watch?v=UQ6GnJufGx4'},
        {id:'ar_video_7', src:'video7', title:'청춘만화', b_title:'이무진 • 조회수 125만회', vid_src:'https://www.youtube.com/watch?v=1bZNp9d7pLM'},
        {id:'ar_video_8', src:'video8', title:'크리스토퍼, 이영지 - Trouble [Live Performance Video]', b_title:'워너뮤직코리아 • 조회수 407만회', vid_src:'https://www.youtube.com/watch?v=HCdKexnwGy8'},
        {id:'ar_video_9', src:'video9', title:'Sentimental Love', b_title:'Min Jiwoon • 조회수 74만회', vid_src:'https://www.youtube.com/watch?v=FDoWZFdxMWk'},
        {id:'ar_video_10', src:'video10', title:'안녕', b_title:'어반자카파 (URBAN ZAKAPA) • 조회수 31만회', vid_src:'https://www.youtube.com/watch?v=fEqkhH1pUbA'}
    ],
]
const ST_LIST = [
    // 제목 문단
    [
        {id: 'st_ms', src: 'st_ms', b_title: '종구님의 뮤직 스테이션' },
        {id: 'st_artist', src: 'st_artist', b_title: '종구님의 아티스트' },
    ],
    // 종구의 뮤직 스테이션
    [
        {id: 'st_ms_0', src: 'stms0', b_title: '좋아요 표시한 음악', m_title: '자동 재생목록 • 트랙 238개 • 12시간 이상', main_txt: '당신이 좋아할만한 노래들을 모은 재생목록입니다 !<br>좋아하는 음악을 마음대로 추가할 수 있습니다.'},
        {id: 'st_ms_1', src: 'stms1', b_title: 'Daily Music', m_title: '종구 • 트랙 17개 • 37분', main_txt: '종구님이 생성한 Daily Music 재생목록.' },
        {id: 'st_ms_2', src: 'stms2', b_title: 'BGM', m_title: '종구 • 트랙 23개 • 1시간 이상', main_txt: '종구님이 생성한 BGM 재생목록.'  },
        {id: 'st_ms_3', src: 'stms3', b_title: 'K-POP 모음', m_title: '종구 • 트랙 12개 • 29분', main_txt: '종구님이 생성한 K-POP 모음 재생목록.' },
        {id: 'st_ms_4', src: 'stms4', b_title: '저장한 콘텐츠', m_title: 'youtube Music • 트랙 114개 • 5시간 이상', main_txt: '종구님이 저장한 컨텐츠 재생목록.'},
    ],
    // 종구님의 아티스트
    [
        {id: 'st_art0', src: 'startist0', b_title: 'Kenshi Yonezu<br>(요네즈 켄시 / 米津 玄師)', m_title: '아티스트 • 구독자 738만명', url: 'https://www.youtube.com/channel/UCUCeZaZeJbEYAAzvMgrKOPQ'},
        {id: 'st_art1', src: 'startist1', b_title: 'Hoshino Gen<br>(호시노 겐)', m_title: '아티스트 • 구독자 159만명', url: 'https://www.youtube.com/channel/UCPKlrgZXnnb89nSeITvTdGA' },
        {id: 'st_art2', src: 'startist2', b_title: 'Hisaishi Joe<br>(히사이시 조)', m_title: '아티스트 • 구독자 122만명', url:'https://www.youtube.com/channel/UCxyzciBLt1Hyw06dlqwAIkw' },
        {id: 'st_art3', src: 'startist3', b_title: '다즈비<br>(DAZBEE)', m_title: '아티스트 • 구독자 136만명', url:'https://www.youtube.com/@Dazbeeee' },
        {id: 'st_art4', src: 'startist4', b_title: 'ZUTOMAYO', m_title: '아티스트 • 구독자 264만명', url:'https://www.youtube.com/channel/UCcd-GOvl9DdyPVHQxy58bOw' },
        {id: 'st_art5', src: 'startist5', b_title: '심규선<br>(Lucia)', m_title: '아티스트 • 구독자 8.91만명', url:'https://www.youtube.com/channel/UC4VMmTByZwTAaU3En8HQE6A' },
    ],
]
const ST_LIST_ITEM = [
    // 보관함 뮤직스테이션 최근 플레이리스트
    [
        {src: 'mpbli00', title: 'LADY', sub: 'Yonezu Kenshi'},
        {src: 'mpbli01', title: 'Fall In Love Alone', sub: 'Stacey Ryan'},
        {src: 'mpbli02', title: 'Spiral', sub: 'LONGMAN'},
        {src: 'mpbli03', title: '파리의왕', sub: '쏜애플'},
        {src: 'mpbli04', title: 'the Other Side', sub: 'the Greatest Showman'},
        {src: 'mpbli05', title: '요란 搖亂', sub: '심규선'},
        {src: 'mpbli06', title: '네모네모', sub: '최예나'},
        {src: 'mpbli07', title: '시퍼런 봄', sub: '쏜애플'},
        {src: 'mpbli08', title: 'Small girl (feat. 도경수)', sub: '이영지'},
        {src: 'mpbli09', title: 'Suzume', sub: 'RADWIMPS'},
        {src: 'mpbli10', title: '고민중독', sub: 'QWER'},
        {src: 'mpbli11', title: '못 죽는 기사와 비단 요람', sub: 'LUCY(루시)'},
        {src: 'mpbli12', title: '해바라기도 가끔 목이 아프죠', sub: 'M.C The Max'},
        {src: 'mpbli13', title: 'Wow Thing', sub: '소연,슬기,신비 및 청하'},
        {src: 'mpbli14', title: '마음대로', sub: '콜드 (COLDE)'},
        {src: 'mpbli15', title: '어떻게 지내', sub: '오반(OVAN)'},
        {src: 'mpbli16', title: '恋(Koi)', sub: 'Gen Hoshino'},
        {src: 'mpbli17', title: 'HERO', sub: 'Vaundy'},
        {src: 'mpbli18', title: '잘자요 아가씨', sub: 'ASMRZ(다나카&닛몰캐쉬)'},
        {src: 'mpbli19', title: '동창회 MEGA MIX', sub: '타임피버'}
    ],
    // 보관함 아티스트 TOP4 뮤직리스트
    [
        {src: 'sart0', title: 'KICK BACK', sub: 'Yonezu Kenshi'},
        {src: 'sart1', title: 'Lemon', sub: 'Yonezu Kenshi'},
        {src: 'sart2', title: 'Sayonara', sub: 'Yonezu Kenshi'},
        {src: 'sart3', title: '打上花火', sub: 'Yonezu Kenshi'},
        {src: 'sart4', title: '恋 (Koi)', sub: 'Gen Hoshino'},
        {src: 'sart5', title: '喜劇', sub: 'Gen Hoshino'},
        {src: 'sart6', title: 'アイデア', sub: 'Gen Hoshino'},
        {src: 'sart7', title: '不思議', sub: 'Gen Hoshino'},
        {src: 'sart8', title: 'Summer', sub: 'Joe Hisaishi'},
        {src: 'sart9', title: 'One Summer Day', sub: 'Joe Hisaishi'},
        {src: 'sart10', title: '인생의 회전목마', sub: 'Joe Hisaishi'},
        {src: 'sart11', title: 'Summer', sub: 'Joe Hisaishi'},
        {src: 'sart12', title: '回る空うさぎ', sub: '다즈비'},
        {src: 'sart13', title: 'Aijanai', sub: '다즈비'},
        {src: 'sart14', title: 'Adios', sub: '다즈비'},
        {src: 'sart15', title: 'Kousui', sub: '다즈비'},
        {src: 'sart16', title: 'TAIDADA', sub: 'ZUTOMAYO'},
        {src: 'sart17', title: 'KUZURI', sub: 'ZUTOMAYO'},
        {src: 'sart18', title: 'Byoushinwo Kamu', sub: 'ZUTOMAYO'},
        {src: 'sart19', title: 'Time Left', sub: 'ZUTOMAYO'},
        {src: 'sart20', title: '화조도', sub: '심규선'},
        {src: 'sart21', title: '요란', sub: '심규선'},
        {src: 'sart22', title: '꽃불', sub: '심규선'},
        {src: 'sart23', title: '부디', sub: '심규선'}
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
            <div class="mplt_box">
                <div class="music_title">${txt1}</div>
                <div class="music_sub">${txt2}</div>
            </div>
            <div class="curr_picture">
                <img src="${txt3}" alt="">
                <div class="mm_play">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope tp-yt-iron-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope tp-yt-iron-icon"><path fill="#fff" d="M6,4l12,8L6,20V4z" class="style-scope tp-yt-iron-icon"></path></g></svg>
                </div>
                <div class="mm_pause">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope tp-yt-iron-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope tp-yt-iron-icon"><path fill="#fff" d="M9,19H7V5H9ZM17,5H15V19h2Z" class="style-scope tp-yt-iron-icon"></path></g></svg>
                </div>
            </div>
            `
    $('.player_L').append(tmp)
}
function music_player_add(){
    let tmp = `
        <li class="music_list_add">
            <div class="mla_L">
                <div class="mla_title">현재 트랙 출처</div>
                <div class="mla_s_title">K-POP 뮤직 스테이션</div>
            </div>
            <div class="mla_R">
                <div class="mla_R_box">
                    <div class="mla_icon">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z" class="style-scope yt-icon"></path></g></svg>
                    </div>
                    <div class="mla_txt">저장</div>
                </div>
            </div>
        </li>
    `
    $('.music_list_main').append(tmp)
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

/////////////// 둘러보기 메인화면 구성 함수 //////////////////

function around_main(){
    let tmp = `
    <div class="main_around contents_area">
    </div>
    `
    $('.main').append(tmp)
}
function around_item_box(count){
    for(let i=0; i<count; i++){
        let tmp = `<div class="main_page_box" id="${AR_LIST[0][i].id}">
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
        <div class="swiper arSwiper${i}"><div class="mp_music_box swiper-wrapper"></div>
        </div>
        </div>
    `
    $('.main_around').append(tmp)
    }
}
function around_item_box_list(count){
    for(let i=0; i<count; i++){
        let tmp = `
                <div class="arnew mp_music_page swiper-slide" id="${AR_LIST[1][i].id}">
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
    for(let i=0; i<(count/4); i++){
        let tmp = `
            <div class="ma_famous_box swiper-slide" id="fam_box_${i}">
            </div>
        `
        $(`#ar_famous .mp_music_box`).append(tmp)
    }
}
function around_famous_item(count1, count2, count3){
    for(let i=count1; i<count2; i++){
        let tmp = `
            <div class="maf_item">
                <div class="mafi_img">
                    <img src="./img/youtube_music/famous/${AR_LIST[2][i].src}.jpg" alt="">
                </div>
                <div class="mafi_rank_box">
                    <div class="mafi_updown">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M18,15H6l6-6L18,15z" class="style-scope yt-icon"></path></g></svg>
                    </div>
                    <div class="mafi_rank">${AR_LIST[2][i].rank}</div>
                </div>
                <div class="mafi_title_box">
                    <div class="mafi_title">${AR_LIST[2][i].b_title}</div>
                    <div class="mafi_s_title">${AR_LIST[2][i].m_title}</div>
                </div>
            </div>
        `
        $(`#fam_box_${count3}`).append(tmp)
    }
}
function around_gen_list(count){
    for(let i=0; i<(count/4); i++){
        let tmp = `
            <div class="ma_gen_box swiper-slide" id="gen_box_${i}">
            </div>
        `
        $(`#ar_gen .mp_music_box`).append(tmp)
    }
}
function around_gen_item(count1, count2, count3){
    for(let i=count1; i<count2; i++){
        let tmp = `
            <div class="mag_item">
                <div class="mag_color" style="background: #${AR_LIST[3][i].backg};"></div>
                <div class="mag_txt">${AR_LIST[3][i].title}</div>
            </div>
        `
        $(`#gen_box_${count3}`).append(tmp)
    }
}
function around_vid_item(count){
    for(let i=0; i<count; i++){
        let tmp = `
            <div class="ma_vid_box swiper-slide" id="vid_box_${i}">
                <a class="mav_img_box" style="background: url(./img/youtube_music/musicvideo/${AR_LIST[4][i].src}.jpg) no-repeat center / cover;" href="${AR_LIST[4][i].vid_src}" target="_blank">
                    <div class="mav_hover">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope tp-yt-iron-icon" style="pointer-events: none; display: block;"><g class="style-scope tp-yt-iron-icon"><path fill="#fff" d="M6,4l12,8L6,20V4z" class="style-scope tp-yt-iron-icon"></path></g></svg>
                    </div>
                </a>
                <div class="mav_title">${AR_LIST[4][i].title}</div>
                <div class="mav_title_b">${AR_LIST[4][i].b_title}</div>
            </div>
        `
        $(`#ar_vid .mp_music_box`).append(tmp)
    }
}

/////////////// 보관함 페이지 메인화면 구성 함수 //////////////////

function storage_main(){
    let tmp = `
    <div class="main_storage contents_area">
    </div>
    `
    $('.main').append(tmp)
}
function storage_item_box(count){
    for(let i=0; i<count; i++){
        let tmp = `<div class="st_main_page_box" id="${ST_LIST[0][i].id}">
        <div class="st_title">
            <div class="st_big_title">${ST_LIST[0][i].b_title}</div>
        </div>
        <div class="swiper stSwiper${i}">
            <div class="st_music_box swiper-wrapper"></div>
        </div>
    </div>
    `
    $('.main_storage').append(tmp)
    }
}
function storage_item_box_list(count){
    for(let i=0; i<count; i++){
        let tmp = `
                <div class="st_music_page swiper-slide">
                <div class="st_music_pbox">
                    <div class="st_music_img" id="${ST_LIST[1][i].id}">
                        <img src="./img/youtube_music/storage/${ST_LIST[1][i].src}.jpg" alt="">
                    </div>
                    <div class="st_music_big_title">${ST_LIST[1][i].b_title}</div>
                    <div class="st_music_mini_title">${ST_LIST[1][i].m_title}</div>
                </div>
                <div class="st_music_pbox_list" id="stms_hover${i}">
                    <div class="st_mpbl_title">최근 플레이</div>
                </div>
            `
    $(`#st_ms .st_music_box`).append(tmp)
    }
}
function storage_recent_list(count1, count2, count3){
    for(let i=count1; i<count2; i++){
        let tmp = `
                    <div class="st_mpbl_item">
                        <div class="st_mpbli_img">
                            <img src="./img/youtube_music/storage/${ST_LIST_ITEM[0][i].src}.jpg" alt="">
                        </div>
                        <div class="st_mpbli_tbox">
                            <div class="st_mpbli_title">${ST_LIST_ITEM[0][i].title}</div>
                            <div class="st_mpbli_sub">${ST_LIST_ITEM[0][i].sub}</div>
                        </div>
                    </div>
                `
    $(`#stms_hover${count3}`).append(tmp)
    }
}
function storage_art_box_list(count){
    for(let i=0; i<count; i++){
        let tmp = `
                <div class="st_music_page swiper-slide" id="${ST_LIST[2][i].id}">
                <div class="st_music_pbox">
                    <div class="st_art_img">
                        <img src="./img/youtube_music/storage/${ST_LIST[2][i].src}.jpg" alt="">
                        <a href="${ST_LIST[2][i].url}" target="_blank"></a>
                    </div>
                    <div class="st_art_big_title">${ST_LIST[2][i].b_title}</div>
                    <div class="st_art_mini_title">${ST_LIST[2][i].m_title}</div>
                </div>
                <div class="st_music_pbox_list" id="sta_hover${i}">
                    <div class="st_mpbl_title">TOP4 Music</div>
                </div>
            `
    $(`#st_artist .st_music_box`).append(tmp)
    }
}
function storage_art_list(count1, count2, count3){
    for(let i=count1; i<count2; i++){
        let tmp = `
                    <div class="st_mpbl_item">
                        <div class="st_mpbli_img">
                            <img src="./img/youtube_music/storage/${ST_LIST_ITEM[1][i].src}.jpg" alt="">
                        </div>
                        <div class="st_mpbli_tbox">
                            <div class="st_mpbli_title">${ST_LIST_ITEM[1][i].title}</div>
                            <div class="st_mpbli_sub">${ST_LIST_ITEM[1][i].sub}</div>
                        </div>
                    </div>
                `
    $(`#sta_hover${count3}`).append(tmp)
    }
}
function storage_contents_box(count){
    let tmp = `
        <div class="scbox_main">
            <div class="scbox_L">
                <img src="./img/youtube_music/storage/${ST_LIST[1][count].src}.jpg" alt="">
                <div class="scbox_title">${ST_LIST[1][count].b_title}</div>
                <div class="scbox_sub">${ST_LIST[1][count].m_title}</div>
                <div class="scbox_txt">${ST_LIST[1][count].main_txt}</div>
                <div class="scbox_func">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block;"><g class="style-scope yt-icon"><path fill="#000" d="M6,4l12,8L6,20V4z" class="style-scope yt-icon"></path></g></svg>
                </div>
            </div>
            <div class="scbox_R"></div>
        </div>
    `
    $('.main').append(tmp)
}
function storage_contents_item(count, tmp1){
    for(let i=0; i<count; i++){
        let time = Math.floor(ITEM_LIST[tmp1][i].duration % 60)
        if(time < 10){
            time = '0'+ time
        }
        let tmp = `
        <div class="scbr_item" id="${ITEM_LIST[tmp1][i].id}">
            <div class="scbr_img">
                <div class="scbr_play">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="#fff" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M6,4l12,8L6,20V4z" class="style-scope yt-icon"></path></g></svg>
                </div>
                <img src="./img/youtube_music/${ITEM_LIST[tmp1][i].src}.jpg" alt="">
            </div>
            <div class="scbr_txt">
                <div class="scbr_title">${ITEM_LIST[tmp1][i].b_title}</div>
                <div class="scbr_s_title">${ITEM_LIST[tmp1][i].m_title}</div>
            </div>
            <div class="scbr_time">${Math.floor(ITEM_LIST[tmp1][i].duration / 60)}:${time}</div>
            <div class="scbr_icon_box">
                <div class="scbr_icon_cir" id="scbr_icon_hate">
                    <svg class="scbr_icon scbr_hate_b scbr_icon_act" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none;"><g class="style-scope yt-icon"><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09 -0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z" class="style-scope yt-icon"></path></g></svg>
                    <svg class="scbr_icon scbr_hate_f" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none;"><g class="style-scope yt-icon"><path d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z" class="style-scope yt-icon"></path></g></svg>
                </div>
                <div class="scbr_icon_cir" id="scbr_icon_like">
                    <svg class="scbr_icon scbr_like_b scbr_icon_act" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none;"><g class="style-scope yt-icon"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" class="style-scope yt-icon"></path></g></svg>
                    <svg class="scbr_icon scbr_like_f" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none;"><g class="style-scope yt-icon"><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z" class="style-scope yt-icon"></path></g></svg>
                </div>
                <div class="scbr_icon_cir btn_more">
                    <svg class="scbr_icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none;"><g class="style-scope yt-icon"><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z" class="style-scope yt-icon"></path></g></svg>
                </div>
                <div class="scbr_icon_rec">
                    <svg class="scbr_icon chk_box_b scbr_icon_act" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none;"><g class="style-scope yt-icon"><path d="M3 3V21H21V3H3ZM20 20H4V4H20V20Z" class="style-scope yt-icon"></path></g></svg>
                    <svg class="scbr_icon chk_box_f" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none;"><g class="style-scope yt-icon"><path d="M3 3V21H21V3H3ZM9.65 17L5.85 13.2L7.26 11.79L9.64 14.17L16.73 7.08L18.14 8.49L9.65 17Z" class="style-scope yt-icon"></path></g></svg>    
                </div>
            </div>
        </div>
    `
    $('.scbox_R').append(tmp)
    }
}

/////////////// 계정 클릭 뉴윈도우 //////////////////
function login_new_window(){
    let tmp = 
    `
    <div class="login_menu">
        <div class="login_menu_top">
            <div class="master"><p>익명</p></div>
            <div class="master_list">
                <h1>익명</h1>
                <h1>@익명의-Guest</h1>
                <p>Music 계정으로 로그인</p>
            </div>
        </div>
        <div class="login_menu_mid">
            <div class="lmm_item">
                <div class="lmm_icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path></g></svg>
                </div>
                <div class="lmm_txt">내 채널</div>
            </div>
            <div class="lmm_item">
                <div class="lmm_icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z M12.45,10.95c-0.67-0.22-1.18-0.47-1.52-0.72c-0.34-0.26-0.52-0.57-0.52-0.95c0-0.41,0.15-0.73,0.44-0.98 c0.29-0.25,0.71-0.37,1.24-0.37c0.55,0,1.23,0.15,1.53,0.44C13.8,8.53,13.93,8.75,14,9h2c-0.07-0.46-0.26-0.88-0.49-1.27 c-0.33-0.55-0.78-0.98-1.37-1.28C13.79,6.27,13.41,6.17,13,6.09V5h-2v1.12c-0.31,0.07-0.62,0.16-0.9,0.29 C9.5,6.7,9.04,7.08,8.72,7.58C8.4,8.07,8.24,8.63,8.24,9.26c0,1.21,0.6,2.18,1.8,2.9c0.44,0.26,1.04,0.53,1.79,0.8 c0.75,0.27,1.27,0.53,1.56,0.77c0.29,0.24,0.43,0.59,0.43,1.05c0,0.42-0.14,0.74-0.43,0.97c-0.29,0.23-0.69,0.35-1.21,0.35 c-1.05,0-1.92-0.37-2.18-1.1H8c0.08,0.42,0.22,0.81,0.44,1.16c0.35,0.57,0.86,1.02,1.52,1.35c0.33,0.16,0.67,0.28,1.04,0.37V19h2 v-1.05c0.79-0.11,1.45-0.38,1.97-0.81c0.69-0.57,1.03-1.37,1.03-2.38c0-0.91-0.28-1.67-0.85-2.28S13.69,11.36,12.45,10.95z"></path></g></svg>
                </div>
                <div class="lmm_txt">유료 멤버십</div>
            </div>
            <div class="lmm_item">
                <div class="lmm_icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z"></path></g></svg>
                </div>
                <div class="lmm_txt">계정 전환</div>
            </div>
            <div class="lmm_item">
                <div class="lmm_icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"></path></g></svg>
                </div>
                <div class="lmm_txt">로그아웃</div>
            </div>
        </div>
        <div class="login_menu_bot">
            <div class="lmm_item">
                <div class="lmm_icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path></g></svg>
                </div>
                <div class="lmm_txt">재생 기록</div>
            </div>
            <div class="lmm_item">
                <div class="lmm_icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"></path></g></svg>
                </div>
                <div class="lmm_txt">설정</div>
            </div>
            <div class="lmm_item">
                <div class="lmm_icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,2L4,5.67v5.49c0,1.47,0.3,2.9,0.81,4.22c0.17,0.44,0.37,0.86,0.6,1.28c0.16,0.3,0.34,0.6,0.52,0.88 c1.42,2.17,3.52,3.82,5.95,4.44L12,22l0.12-0.03c2.43-0.61,4.53-2.26,5.95-4.43c0.19-0.29,0.36-0.58,0.52-0.88 c0.22-0.41,0.43-0.84,0.6-1.28C19.7,14.05,20,12.62,20,11.15V5.67L12,2z M12,3.1l6.11,2.8L12,11.15L5.89,5.9L12,3.1z M5.75,15.01 C5.25,13.75,5,12.45,5,11.15v-4.7l6.23,5.35l-4.98,4.28C6.05,15.71,5.88,15.36,5.75,15.01z M17.23,16.99 C15.91,19,14.06,20.41,12,20.97C9.94,20.41,8.09,19,6.77,16.99c0-0.01-0.01-0.01-0.01-0.02l5.24-4.5l5.24,4.5 C17.23,16.98,17.23,16.98,17.23,16.99z M19,11.15c0,1.3-0.25,2.6-0.75,3.86c-0.14,0.35-0.3,0.7-0.5,1.08l-4.98-4.28L19,6.45V11.15z"></path></g></svg>
                </div>
                <div class="lmm_txt">서비스 약관 및 개인정보처리방침</div>
            </div>
            <div class="lmm_item">
                <div class="lmm_icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path></g></svg>

                </div>
                <div class="lmm_txt">고객센터</div>
            </div>
            <div class="lmm_item">
                <div class="lmm_icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"></path></g></svg>
                </div>
                <div class="lmm_txt">의견 보내기</div>
            </div>
        </div>
    </div>
    `
    $('.master').append(tmp)
}

load_items(7)
load_music_main(3)
load_music_item_kpop($(ITEM_LIST)[2].length)
load_music_item_jpop($(ITEM_LIST)[3].length)
load_music_item_pop($(ITEM_LIST)[4].length)