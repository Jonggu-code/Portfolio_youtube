const ITEM_LIST = [
    // best
    [
        {item_no: 1, src: '1.jpg', title: '얼핏보면 전등같은 빗자루세트', o_price: 90000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 2, src: '2.jpg', title: '하얀 원통', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 3, src: '3.jpg', title: '원피스 같지만 알고보면 앞치마', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 4, src: '4.jpg', title: '검정 핸드백 같은 토트백', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 5, src: '5.jpg', title: '상의 같지만 뎅뎅이 하의', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: '7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:2, src: '2.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:1, src: '1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: '3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: '4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: '7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, src: '5.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:1, src: '1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: '4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, src: '2.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: '3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'}
    ]
    ,
    // new
    [ 
        {item_no:1, covered_src: '4.jpg', src: '1.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, covered_src: '8.jpg', src: '2.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, covered_src: '6.jpg', src: '3.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, covered_src: '7.jpg', src: '4.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, covered_src: '8.jpg', src: '5.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, covered_src: '2.jpg', src: '6.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, covered_src: '4.jpg', src: '7.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, covered_src: '1.jpg', src: '8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:9, covered_src: '7.jpg', src: '4.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:10, covered_src: '8.jpg', src: '5.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:11, covered_src: '2.jpg', src: '6.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:12, covered_src: '4.jpg', src: '7.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:13, covered_src: '1.jpg', src: '8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
         
    ],
    [],
    [],
    [],
    [],
    []
];

const menu_array = ['best','new','outer','top','bottom','acc','bag_shoes'];
const title_array = ['BEST','NEW 5%','OUTER','TOP','BOTTOM','ACC','BAG & SHOES'];


 


function load_items(el, count, cateNo) {
    for(let i=0; i<count; i++) {
        console.log(ITEM_LIST[0][i].src)

        let tmp = `<li class="${menu_array[cateNo]}_item">
            <div class="sec_item_img">
                <a href="#">
                    <img src="./img/theComma/items/${menu_array[cateNo]}/${ITEM_LIST[0][i].src}" alt=""> 
                `
                if(cateNo == 1) {
                    tmp += `<img src="./img/theComma/items/new/8.jpg" alt=""> `
                }
                // ${ /*tmp += cateNo==1?`<img src="./img/theComma/items/new/8.jpg" alt=""> `:'' */ }

            tmp+= `</a>
            </div>
            <div class="sec_item_desc">
                <div class="item_desc_title">${ITEM_LIST[0][i].title}</div>
                <div class="o_price">${ITEM_LIST[0][i].o_price.toLocaleString('ko')}원</div>
                <div class="s_price">${ITEM_LIST[0][i].s_price.toLocaleString('ko')}원</div>
                <div class="item_desc">${ITEM_LIST[0][i].desc}</div>
            </div>
        </li>`

        el.append(tmp);
    }
}
load_items($('#best .sec_item_box'), 8, 0)
load_items($('#new .sec_item_box'), 8, 1)