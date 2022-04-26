import Swiper from 'swiper';

export const vdsSlider = () => {
    const el = document.querySelector('.vds__slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 15,

            breakpoints: {
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                }
            }
        });
    }
}