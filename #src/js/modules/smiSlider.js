import Swiper, {Navigation} from 'swiper';

export const smiSlider = () => {
    const el = document.querySelector('.smi__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            spaceBetween: 60,
            slidesPerView: 3,
            modules: [Navigation],
            navigation: {
                prevEl: '.smi__head_nav_prev',
                nextEl: '.smi__head_nav_next'
            }
        });
    }
};