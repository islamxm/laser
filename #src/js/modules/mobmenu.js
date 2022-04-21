export const mobmenu = () => {
    const btn = document.querySelector('.header__burger');
    const menu = document.querySelector('.mobmenu');

    if(window.innerWidth < 1150 && btn && menu) {
        btn.addEventListener('click', ()=> {
            menu.classList.toggle('active');
        });
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth < 1150 && btn && menu) {
            btn.addEventListener('click', ()=> {
                menu.classList.toggle('active');
            });
        }
    });
};