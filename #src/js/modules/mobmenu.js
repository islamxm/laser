export const mobmenu = () => {
    const btn = document.querySelector('.header__burger');
    const menu = document.querySelector('.mobmenu');

    if(btn && menu) {
        btn.addEventListener('click', ()=> {
            menu.classList.toggle('active');
        });
    }
};