import Swiper, {Pagination} from "swiper";

export const heroSlider = () => {
    const el = document.querySelector('.hero__video_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 0,
            modules: [Pagination],
            pagination: {
                el: '.hero__video_action_fr',
                type: 'fraction',

            }
        });
    }
}