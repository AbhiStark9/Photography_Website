// change nav on scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0)
})

// Swiper JS Gallery section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    }
})


// Nav links

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn?.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn?.addEventListener('click', closeNav);


if(document.body.clientWidth < 1024){
    nav.querySelectorAll('li a').forEach(navLink =>{
        navLink.addEventListener('click', closeNav)
    }
    )
}


