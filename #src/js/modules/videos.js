export const videos = () => {
    const heroVidBtns = document.querySelectorAll('.hero__video_slider_sl_layer_btn');
    const videoBtn = document.querySelector('.video__body_action_play');
    
    if(heroVidBtns.length > 0) {
        heroVidBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.parentElement.classList.add('active');
            });
        });
    }

    if(videoBtn) {
        videoBtn.addEventListener('click', () => {
            videoBtn.parentElement.classList.add('active');
        });
    }
};