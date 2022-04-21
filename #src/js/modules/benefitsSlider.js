import Swiper, {Navigation} from 'swiper';

export const benefitsSlider = () => {
    const el = document.querySelector('.benefits__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            spaceBetween: 80,
            slidesPerView: 3,
            modules: [Navigation],
            navigation: {
                prevEl: '.benefits__head_nav_prev',
                nextEl: '.benefits__head_nav_next'
            }
        });
    }
};