// HAMBURGER-MENU
const menuBurger = document.querySelector('.header-menu__burger');
const menu = document.querySelector('.header-menu');
if (menuBurger) {
    menuBurger.addEventListener('click', function(e) {
        document.body.classList.toggle('--lock');
        menuBurger.classList.toggle('header-menu__burger--active');
        menu.classList.toggle('header-menu--active');
    });
}
// SCROLL-TO-SECTION
const menuLinks = document.querySelectorAll('.header-menu__link[data-goto]');
if  (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if (menuBurger.classList.contains('header-menu__burger--active')) {
                document.body.classList.remove('--lock');
                menuBurger.classList.remove('header-menu__burger--active');
                menu.classList.remove('header-menu--active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
// MODAL-VIDEO
const openModalBtn = document.getElementById('openModal');
const modalBody = document.getElementById('modalBody')
const modal = document.getElementById('videoModal');
const closeModalBtn = document.getElementById('closeModal');
openModalBtn.addEventListener('click', () => {
    modal.classList.add('modal--visible')
    let videoUrl = openModalBtn.dataset.video;
    if (videoUrl.includes('?')) {
        videoUrl += '&autoplay=1';
    } else {
        videoUrl += '?autoplay=1'
    }
    modalBody.innerHTML = `<iframe width="1236" height="695" src="${videoUrl}" title="Iced Lavender Matcha | The Starbucks Coffee Company" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;   
});
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal()
    }
});
function closeModal () {
    modal.classList.remove('modal--visible')
    modalBody.innerHTML = '';
}
// PRODUCT-SWIPER
const swiper = new Swiper ('.swiper', { 
    loop: true,  
    slidesPerView: 1.5,
    spaceBetween: 26,
    initialSlide: 0,
    slideToClickedSlide: false,
    navigation: {
        prevEl: '.swiper-btn-next',
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
// LAZY LOADING
document.addEventListener('DOMContentLoaded', () => {
    const lazySections = document.querySelectorAll('.lazy-bg');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.backgroundImage = `url(${entry.target.dataset.bg})`;
          observer.unobserve(entry.target);
        }
      });
    });
  
    lazySections.forEach(section => observer.observe(section));
}); 