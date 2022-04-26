import Swiper, {Pagination, EffectFade, Autoplay} from "swiper";

export const heroSlider = () => {
    const el = document.querySelector('.hero__slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 0,
            modules: [Pagination, EffectFade],
            
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                prevEl: '.hero__prev',
                nextEl: '.hero__next'
            },
            pagination: {
                el:'.hero__pag',
                type: 'bullets',
                bulletClass: 'hero__pag_item',
                bulletActiveClass: 'active'
            }
           
        });
    }
}