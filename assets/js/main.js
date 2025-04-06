// HAMBURGER-MENU
const menuBurger = document.querySelector('.header-menu__burger');
if (menuBurger) {
    const menu = document.querySelector('.header-menu');
    menuBurger.addEventListener('click', function(e) {
        document.body.classList.toggle('--lock')
        menuBurger.classList.toggle('header-menu__burger--active');
        menu.classList.toggle('header-menu--active');
    });
}

// MODAL-VIDEO
const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModalBtn = document.getElementById('closeModal');
const videoUrl = "https://www.youtube.com/embed/aW70-G77F9Y?autoplay=1";

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalVideo.src = videoUrl;
});

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal()
    }
});

function closeModal () {
    modal.style.display = 'none';
    modalVideo.src = "";
}

// PRODUCT-SWIPER
const swiper = new Swiper ('.swiper', { 
    loop: true,  
    slidesPerView: 1.5,
    spaceBetween: 26,
    initialSlide: 0,
    slideToClickedSlide: true,
    navigation: {
        prevEl: '.swiper-btn-next',
    },
    on: {
        slideChange: function () {
            document.querySelectorAll('.swiper-slide').forEach(slide => {
                slide.classList.remove('active-slide');
            });
            document
            .querySelector('.swiper-slide-next')
            ?.classList.add('active-slide');
        }
    },
    breakpoints: {
        600: { slidesPerView: 2, spaceBetween: 40 },
        730: { slidesPerView: 2.5, spaceBetween: 46 },
        1200: { slidesPerView: 3.5, spaceBetween: 54 }
    }
});



// SCROLL-TOP
const scrollTop = document.getElementById('scrollTop');
scrollTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
});