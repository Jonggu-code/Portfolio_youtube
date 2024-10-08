
let key_value = get_url_info("cateNo");
console.log(key_value)
load_items($('.sec .sec_item_box'), 12, key_value);

// document.getElementsByClassName('sec_title')[0].innerHTML = title_array[key_value]
$('.sec_title').html(title_array[key_value])


$(document).ready(function(){

    // 무한스크롤
    let f_o_top = $('.footer').offset().top;
    $(window).scroll(function(){
        let s_bot = $(window).scrollTop() + $(window).height()

        if(s_bot >= f_o_top) {
            load_items($('.sec .sec_item_box'), 8, key_value);
            f_o_top = $('.footer').offset().top;
        }

    })
});