const button = document.querySelector('.theme');
const userTheme = localStorage.getItem('theme');
let status = false;


// 처음 이용객의 테마를 읽음
document.addEventListener('DOMContentLoaded', () => {
  // alert(userTheme);
  clickDarkMode();
  clickLightMode()
  if (userTheme === 'dark') {
      clickDarkMode()
  } else if (userTheme === 'light') {
      clickLightMode()
  }
})


// 버튼클릭
button.addEventListener('click', () => {
  if (status === false) {
      clickDarkMode()
  } else if (status === true) {
      clickLightMode()
  }
})

// 다크/라이트 전환이벤트
function clickDarkMode() {
  localStorage.setItem("theme", "dark")
  document.documentElement.setAttribute('data-theme', 'dark')
  button.innerText='Light'
  button.classList.remove('light_bt');
  button.classList.add('dark_bt');
  status = true
}
function clickLightMode() {
  localStorage.setItem("theme", "light")
  document.documentElement.setAttribute('data-theme', 'light')
  button.innerText='Dark'
  button.classList.remove('dark_bt');
  button.classList.add('light_bt');
  status = false
}


/* mobile nav */	
$('.side_nav_menu_bt a').on('click', function() {
  // e.preventDefault();
  if($("main").hasClass("side_off")) {
    $('main').removeClass('side_off');
    $('main').addClass('side_on');
  } else {
    $('main').removeClass('side_on');
    $('main').addClass('side_off')
  }

});	

$(window).resize(function(){ 
  if (window.innerWidth < 1143) {
    /* 이하일때의 스크립트 */ 
    if($("main").hasClass("side_on")) {
      $('main').removeClass('side_on');
      $('main').addClass('side_off');
    }
  } 
  // else {
  //   /* 이상일때의 스크립트 */ 
  //   if($("main").hasClass("side_off")) {
  //     $('main').removeClass('side_off');
  //     $('main').addClass('side_on');
  //   }
  // }
}).resize();


// 툴팁 - 팝업오픈
$('.chat_list button.icon_box_28').on('click', function() {
  const clientRect = this.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
  const relativeTop = clientRect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.

  $('.list_tooltip_menu').css('top', relativeTop);
  $('.modal_list_tooltip_menu').fadeIn(100);
});	


// 툴팁 - 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
  var LayerPopup = $(".modal_list_tooltip_menu");
  if(LayerPopup.has(e.target).length === 0){
    $('.modal_list_tooltip_menu').fadeOut(100);
  }
});


// 내 활동 설정
$(document).on('click', '.toggleBG', function () {
  var toggleBG = $(this);
  var toggleFG = $(this).find('.toggleFG');
  var left = toggleFG.css('left');

  if(left == '0px') {
    // toggleBG.css('background', 'rgba(95, 114, 189, 0.3)');
    toggleFG.css('background', 'rgba(87, 0, 145, 1)');
    toggleActionStart(toggleFG, 'TO_RIGHT');

    if(toggleBG.is('.auto_save')){
      $('.auto_save_txt').text("자동 저장 사용중");
    }else if (toggleBG.is('.auto_del')) {
      $('.auto_del_txt').text("자동 삭제 사용중");
    };
    
  }else {
    // toggleBG.css('background', 'rgba(95, 114, 189, 0.2)');
    toggleFG.css('background', 'rgba(95, 114, 189, 0.3)');
    toggleActionStart(toggleFG, 'TO_LEFT');
    if(toggleBG.is('.auto_save')){
      $('.auto_save_txt').text("자동 저장 사용 안함");
    }else if (toggleBG.is('.auto_del')) {
      $('.auto_del_txt').text("자동 삭제 사용 안함");
    };
  }
});

// 토글 버튼 이동 모션 함수
function toggleActionStart(toggleBtn, LR) { // 0.01초 단위로 실행    
  var intervalID = setInterval(function() { // 버튼 이동
    var left = parseInt(toggleBtn.css('left'));
    left += (LR == 'TO_RIGHT') ? 5 : -5;
    if(left >= 0 && left <= 22) {
      left += 'px';
      toggleBtn.css('left', left);
    }},10);

    setTimeout(function(){clearInterval(intervalID);
  }, 201);
}


// 내 활동
// $('.cont_timeline_list_title_btn').on('click', function() {
//   const list_container = $(this).closest('li');
//   const slide_container = $(list_container).children('.timeline_list_box');

//   $(slide_container).slideToggle();
// });	

$('.cont_timeline_list_title_box').on('click', function() {
  $(this).siblings('.timeline_list_box').slideToggle();
});	









