let offset = 0;
const sliderImg = document.querySelector('.project-img');

document.querySelector('.project-switcher__item-right').addEventListener('click', function() {
    offset = offset + 679;

    if (offset > 1358) {
        offset = 0;
    };

    sliderImg.style.left = -offset + 'px';
});

document.querySelector('.project-switcher__item-left').addEventListener('click', function() {
    offset = offset - 679;

    if (offset < 0) {
        offset = 1358;
    };

    sliderImg.style.left = -offset + 'px';
});

document.querySelector('.project-switcher__item-1').addEventListener('click', function() {
    offset = 0;

    sliderImg.style.left = -offset + 'px';
});

document.querySelector('.project-switcher__item-2').addEventListener('click', function() {
    offset = 679;

    sliderImg.style.left = -offset + 'px';
});

document.querySelector('.project-switcher__item-3').addEventListener('click', function() {
    offset = 1358;

    sliderImg.style.left = -offset + 'px';
});

document.querySelector('.carousel-link__item-1').addEventListener('click', function() {
    offset = 0;

    sliderImg.style.left = -offset + 'px';
});

document.querySelector('.carousel-link__item-2').addEventListener('click', function() {
    offset = 679;

    sliderImg.style.left = -offset + 'px';
});

document.querySelector('.carousel-link__item-3').addEventListener('click', function() {
    offset = 1358;

    sliderImg.style.left = -offset + 'px';
});