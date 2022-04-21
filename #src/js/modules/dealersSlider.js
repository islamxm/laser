import Swiper, {Navigation} from "swiper";

export const dealersSlider = () => {
    const el = document.querySelector('.dealers__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            spaceBetween: 0,
            slidesPerView: 2,
            modules: [Navigation], 
            navigation: {
               prevEl: '.dealers__head_nav_prev',
               nextEl: '.dealers__head_nav_next'
            },
            breakpoints: {
                1150: {
                    spaceBetween: 0,
                    slidesPerView: 3,
                }
            }
        });
    }
}