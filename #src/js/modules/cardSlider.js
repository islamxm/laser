import Swiper, {Pagination, Navigation} from "swiper";

export const cardSlider = () => {
    const mainSliderEl = document.querySelector('.models__body_slider');
    const cardSliderEls = document.querySelectorAll('.card__body_slider');

    if(mainSliderEl) {
        const sl = new Swiper(mainSliderEl, {
            slidesPerView: 2,
            spaceBetween: 80,
            modules: [Navigation],
            navigation: {
                prevEl: '.models__head_nav_prev',
                nextEl: '.models__head_nav_next'
            },
            enabled: false,
            breakpoints: { 
                1150: {
                    enabled: true,
                }
            }
        });
    }

    if(cardSliderEls.length > 0) {
        cardSliderEls.forEach(el => {
            const sl = new Swiper(el, {
                slidesPerView: 1,
                spaceBetween: 10,
                modules: [Pagination],
                pagination: {
                    el: '.pagination',
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'pagination__item',
                    bulletElement: 'div',
                    clickable: true
                }
            });
        });
    }
};