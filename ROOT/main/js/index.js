const button = document.querySelector('.theme')
const userTheme = localStorage.getItem('theme')
let status = false

// 처음 이용객의 테마를 읽음
document.addEventListener('DOMContentLoaded', () => {
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
	$('.side_nav_menu_bt a').on('click', function(e) {
		e.preventDefault();
        alert("0");

        $('main').removeClass('side_off');
        $('main').addClass('side_on');
		// var $target = $(this).parent();
		// $('#mobile_gnb li').not($target).removeClass('on');
		// $target.toggleClass('on');
	});	
	// $('#mobile_gnb .depth2 > li:not(.no_child) > a').on('click', function(e) {
	// 	e.preventDefault();
	// 	var $target = $(this).parent();
	// 	$('#mobile_gnb .depth2 > li').not($target).removeClass('on');
	// 	$target.toggleClass('on');
	// });
	// $('#mobile_header .btn_menu').on('click', function(e) {
	// 	e.preventDefault();
	// 	$('#mobile_header').toggleClass('menu_open');
	// 	$('#mobile_gnb li').removeClass('on');
	// 	$('.dimmed_bg').toggle();
	// });
	// $('.dimmed_bg').on('click', function(e) {
	// 	e.preventDefault();
	// 	$('#mobile_header').removeClass('menu_open');
	// 	$('.dimmed_bg').hide();
	// });