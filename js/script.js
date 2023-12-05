const colors = ['#ff0000', '#00ff00', '#0000ff'];

const header = document.querySelector(".header");

let idx = 0;

//일정 시간마다 배경색 변경 함수
function changeBackground(){
    header.style.backgroundColor = colors[idx];
    idx = (idx+1) % colors.length;
}
//3초를 주기로 메서드 실행
setInterval(changeBackground, 3000);

function toggleSidebar() {
    const header = document.querySelector('.header');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const contentToggleBtn = document.querySelector('.content-toggle-btn');

    if (sidebar.style.left === '-250px') {//안 보이는 상태
        sidebar.style.left = '0';
        content.style.marginLeft = '250px';
        header.style.marginLeft = '250px';
        contentToggleBtn.textContent = "◀";
        contentToggleBtn.style.left = '261px';
    } else {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
        header.style.marginLeft = '0';
        contentToggleBtn.textContent = "▶";
        contentToggleBtn.style.left = '11px';
    }
}

let lastScrollTop = 0;
window.addEventListener('scroll', function(event){
    const contentToggleBtn = document.querySelector('.content-toggle-btn');
    const computedStyle = window.getComputedStyle(contentToggleBtn);

    const lastValue = computedStyle.getPropertyValue('bottom').replace('px', '');

    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        contentToggleBtn.style.bottom = parseInt(lastValue)-(currentScrollTop-lastScrollTop)+'px';
        console.log(currentScrollTop-lastScrollTop);
        /*contentToggleBtn.style.bottom =*/
    } else {
        contentToggleBtn.style.bottom = parseInt(lastValue)+(lastScrollTop-currentScrollTop)+'px';
        console.log(lastScrollTop-currentScrollTop);
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

});
