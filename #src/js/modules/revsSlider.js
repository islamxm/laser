import Swiper, {Navigation, Pagination} from 'swiper';

export const revsSlider = () => {
    const el = document.querySelector('.revs__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 20,
            modules: [Navigation, Pagination],
            navigation: {
                prevEl: '.revs__head_nav_prev',
                nextEl: '.revs__head_nav_next'
            },
            pagination: {
                el: '.revs__body_pag',
                type: 'bullets',
                bulletClass: 'revs__body_pag_item',
                bulletActiveClass: 'active'
            },
            breakpoints: {
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 60
                },

                850: {
                    slidesPerView: 2,
                    spaceBetween: 40
                }
            }
        })
    }
}