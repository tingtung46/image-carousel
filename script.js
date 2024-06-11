const imgs = document.querySelectorAll('[data-img-url]');
const slider = document.querySelector('.slider');
const indexButtons = document.querySelectorAll('.index-container > button');
const arrowButtons = document.querySelectorAll('[data-index-change]');
const navContainer = document.querySelector('.nav-container');
let id;
let isSliding = false;
let currIndex = 0;

imgs.forEach((div) => {
    div.style.backgroundImage = `url(./img/${div.getAttribute('data-img-url')})`;
});

const slide = (nextIndex) => {
    if (nextIndex < 0) nextIndex = imgs.length - 1;
    if (nextIndex >= imgs.length) nextIndex = 0;
    indexButtons[currIndex].style.backgroundColor = '';
    indexButtons[nextIndex].style.backgroundColor = 'white';
    slider.style.transform = `translateX(-${(nextIndex / imgs.length) * 100}%)`;
    currIndex = nextIndex;
};

indexButtons[0].style.backgroundColor = 'white';

indexButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        slide(index);
    });
});

arrowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const indexChange = +button.getAttribute('data-index-change');
        slide(currIndex + indexChange);
    });
});

const startAutoSlide = () => {
    if (!isSliding) {
        id = setInterval(() => slide(currIndex + 1), 5000);
        isSliding = true;
    };
};

const stopAutoSlide = () => {
    clearInterval(id);
    isSliding = false;
};

navContainer.addEventListener('mouseover', () => stopAutoSlide());
navContainer.addEventListener('mouseout', () => startAutoSlide());

document.addEventListener('touchstart', (e) => {
    if (e.target !== navContainer && !navContainer.contains(e.target))
        startAutoSlide();
});