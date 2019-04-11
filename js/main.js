var item = $('.menu-item');
var itemSubLink = $('.sub-menu a');
var tab = $('.tab');
var section = $('.notice, .pds');


/*
item.attr('tabindex', '0');
마크업에 tabindex를 안 넣었을 경우, 스크립트에서 추가하면 된다.
*/
itemSubLink.attr('class', 'icon-dot-circled'); // sub-menu a 를 찾아서 icon-dot-circled 클래스를 추가해준다.


// 메인 메뉴의 하위 메뉴 제어를 위한 스크립트 
// Focusin 포커스를 받았을때 

// on이라는 이벤트 메소드는 멀티 이벤트를 사용할 수 있다
/*
item.on('mouseover', function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act'); // 클래스를 생성하라는 명령어이기 때문에 . 은생략 
}); 

item.on('focusin', function(){ // 포커스를 받게 추가해줌 
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
})
*/

item.on('mouseover focusin', function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act'); // 클래스를 생성하라는 명령어이기 때문에 . 은생략 
}); 


/* 탭 콘텐츠 제어를 위한 스크립트

tab.on('click', function(){
    section.removeClass('board-act');
    $(this).parent().addClass('board-act');
});
*/

tab.on('click keyup', function(e){
    e.preventDefault();
    if(e.keyCode === 32 || e.keyCode === 13 || e.type === 'click'){
        section.removeClass('board-act');
        $(this).parent().addClass('board-act');
    }
});