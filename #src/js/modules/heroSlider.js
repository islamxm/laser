import Swiper, {Pagination, EffectFade, Autoplay, Navigation} from "swiper";

export const heroSlider = () => {
    const el = document.querySelector('.hero__slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 0,
            modules: [Pagination, EffectFade, Navigation],
            
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 4000
            },
            navigation: {
                prevEl: '.hero__prev',
                nextEl: '.hero__next'
            },
            pagination: {
                el:'.hero__pag',
                type: 'bullets',
                bulletClass: 'hero__pag_item',
                bulletActiveClass: 'active',
                clickable: true
            }
           
        });
    }
}