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


  // 내활동
	// $('.cont_timeline_list_title_btn').on('click', function() {

  //   const list_container = $(this).closest('li');
  //   const slide_container = $(list_container).children('.timeline_list_box');

  //   $(slide_container).slideToggle();
	// });	

  $('.cont_timeline_list_title_box').on('click', function() {
    $(this).siblings('.timeline_list_box').slideToggle();
	});	

