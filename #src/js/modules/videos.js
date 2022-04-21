export const videos = () => {
    const heroVidBtns = document.querySelectorAll('.hero__video_slider_sl_layer_btn');
    if(heroVidBtns.length > 0) {
        heroVidBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.parentElement.classList.add('active');
            });
        });
    }
};