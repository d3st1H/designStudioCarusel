let offsetDescription = 0;
const sliderDescription = document.querySelector('.completed-projects__description__slider');

document.querySelector('.project-switcher__item-right').addEventListener('click', function() {
    offsetDescription = offsetDescription + 513;

    if (offsetDescription > 1026) {
        offsetDescription = 0;
    };

    sliderDescription.style.left = -offsetDescription + 'px';
});

document.querySelector('.project-switcher__item-left').addEventListener('click', function() {
    offsetDescription = offsetDescription - 513;

    if (offsetDescription < 0) {
        offsetDescription = 1026;
    };

    sliderDescription.style.left = -offsetDescription + 'px';
});

document.querySelector('.project-switcher__item-1').addEventListener('click', function() {
    offsetDescription = 0;

    sliderDescription.style.left = -offsetDescription + 'px';
});

document.querySelector('.project-switcher__item-2').addEventListener('click', function() {
    offsetDescription = 513;

    sliderDescription.style.left = -offsetDescription + 'px';
});

document.querySelector('.project-switcher__item-3').addEventListener('click', function() {
    offsetDescription = 1026;

    sliderDescription.style.left = -offsetDescription + 'px';
});

document.querySelector('.carousel-link__item-1').addEventListener('click', function() {
    offsetDescription = 0;

    sliderDescription.style.left = -offsetDescription + 'px';
});

document.querySelector('.carousel-link__item-2').addEventListener('click', function() {
    offsetDescription = 513;

    sliderDescription.style.left = -offsetDescription + 'px';
});

document.querySelector('.carousel-link__item-3').addEventListener('click', function() {
    offsetDescription = 1026;

    sliderDescription.style.left = -offsetDescription + 'px';
    document.activeElement('.carousel-link__item-3');
});

