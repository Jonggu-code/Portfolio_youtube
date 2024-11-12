var swiper;
var swiper1;
var swiper2;
var swiper3;
var swiper4;
var swiper5;
var swiper6;
var swiper7;
var swiper8;
var swiper9;
var swiper10;
var swiper11;

function swiper_event() {
    swiper = new Swiper(".mySwiper0", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        breakpoints: {
            700: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1000: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1299: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next0",
            prevEl: ".swiper-button-prev0",
        },
        effect: 'slide',
        speed: 700
    });
    swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        breakpoints: {
            700: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1000: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1299: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        effect: 'slide',
        speed: 700
    });
    swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        breakpoints: {
            700: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1000: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1299: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        effect: 'slide',
        speed: 700
    });
    swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        breakpoints: {
            700: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1000: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1299: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
        },
        effect: 'slide',
        speed: 700
    });

    swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        breakpoints: {
            700: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1000: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1299: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4",
        },
        effect: 'slide',
        speed: 700
    });
    
    swiper5 = new Swiper(".mySwiper5", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        breakpoints: {
            700: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1000: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1299: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next5",
            prevEl: ".swiper-button-prev5",
        },
        effect: 'slide',
        speed: 700
    });
    swiper6 = new Swiper(".arSwiper0", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        breakpoints: {
            700: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1000: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1299: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next0",
            prevEl: ".swiper-button-prev0",
        },
        effect: 'slide',
        speed: 700
    });
    swiper7 = new Swiper(".arSwiper1", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        breakpoints: {
            1000: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            1299: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        effect: 'slide',
        speed: 700
    });
    swiper8 = new Swiper(".arSwiper2", {
        slidesPerView: 3,
        slidesPerGroup: 2,
        breakpoints: {
            1000: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1299: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        effect: 'slide',
        speed: 700
    });
    swiper9 = new Swiper(".arSwiper3", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        breakpoints: {
            1399: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
        },
        effect: 'slide',
        speed: 700
    });
    swiper10 = new Swiper(".stSwiper0", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        breakpoints: {
            700: {
                slidesPerView: 2,
                slidesPerGroup: 2 
            },
            1299: {
                slidesPerView: 3,
                slidesPerGroup: 3 
            }
        },
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
        },
        effect: 'slide',
        speed: 700
    });
    swiper11 = new Swiper(".stSwiper1", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        breakpoints: {
            700: {
                slidesPerView: 2,
                slidesPerGroup: 2 
            },
            1299: {
                slidesPerView: 3,
                slidesPerGroup: 3 
            }
        },
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
        },
        effect: 'slide',
        speed: 700
    });
}


/////////////////////////////