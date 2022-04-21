import Swiper, {Pagination, EffectFade} from "swiper";

export const heroSlider = () => {
    const el = document.querySelector('.hero__video_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 15,
            modules: [Pagination, EffectFade],
            pagination: {
                el: '.hero__video_action_fr',
                type: 'fraction',

            },
            // effect: 'fade',
            // fadeEffect: {
            //     crossFade: true
            // },
            breakpoints: {
                1150: {
                    modules: [EffectFade],
                    slidesPerView: 1,
                    spaceBetween: 0,
                }
            }
        });
    }
}