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
