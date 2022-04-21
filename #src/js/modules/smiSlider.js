import Swiper, {Navigation} from 'swiper';

export const smiSlider = () => {
    const el = document.querySelector('.smi__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 20,
            modules: [Navigation],
            navigation: {
                prevEl: '.smi__head_nav_prev',
                nextEl: '.smi__head_nav_next'
            },
            breakpoints: {
                1150: {
                    spaceBetween: 60,
                    slidesPerView: 3,
                }
            }
        });
    }

    // window.addEventListener('load', () => {
    //     const slides = document.querySelectorAll('.smi__body_slider_sl');

    //     let arr = [];
    //     let max;
        
    //     slides.forEach(sl => {
    //         arr.push(sl.scrollHeight);
    
    //         max = Math.max(...arr);
    //         console.log(max);
    //         sl.style.cssText = `height: ${Math.max(...arr)}px !important`;
    //     });

    //     console.log(arr);
    //     console.log(max);
    // });
};