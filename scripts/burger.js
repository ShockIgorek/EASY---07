const header = document.querySelector('.header');
const burgerMenuButton = header.querySelector('.burger__button');
const burgerMenu = header.querySelector('.burger');



function menu(selector) {
    selector.classList.toggle('burger_open')
}
function button(selector) {
    selector.classList.toggle('burger__button_open')
}

burgerMenuButton.addEventListener('click', () => {
    menu(burgerMenu);
    button(burgerMenuButton);
});
burgerLink.addEventListener('click', () => {
    menu(burgerMenu);
    button(burgerMenuButton);
});