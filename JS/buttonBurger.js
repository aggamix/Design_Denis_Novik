const burgerMenu = document.querySelector('.burger-menu');
const burgerIcons = document.querySelector('.burger-menu__icons');

// добавляю картинку-крестик для меню
const crossIcons = document.createElement('img');
crossIcons.setAttribute('src', '/Icons/Cross.svg');
crossIcons.setAttribute('alt', '');
crossIcons.setAttribute('class', 'burger-menu__cross');
crossIcons.style['display'] = 'none'; // сразу прячем
burgerMenu.append(crossIcons); // добавляю на страницу

// при нажатии прячем бургер
burgerIcons.addEventListener('click', hideBurger);

function hideBurger() {
    crossIcons.style['display'] = 'block';
    burgerIcons.style['display'] = 'none';
}

// при нажатии прячу крестик и возвращаю бургер
crossIcons.addEventListener('click', hideCross);

function hideCross() {
    crossIcons.style['display'] = 'none';
    burgerIcons.style['display'] = 'block';
}