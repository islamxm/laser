export const cardFunc = () => {
    const cardBtns = document.querySelectorAll('.card__head_btn');

    if(cardBtns.length > 0) {
        cardBtns.forEach(btn => {
            btn.addEventListener('mouseover', () => {
                btn.parentElement.parentElement.classList.add('active');
            });
            btn.addEventListener('mouseleave', () => {
                btn.parentElement.parentElement.classList.remove('active');
            });
        });
    }
};