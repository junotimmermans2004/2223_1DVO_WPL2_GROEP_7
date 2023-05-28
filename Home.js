window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var container = document.querySelector('.container');
    var containerRect = container.getBoundingClientRect();

    if (containerRect.bottom < window.innerHeight) {
        footer.style.bottom = '0';
    } else {
        footer.style.bottom = '-100px';
    }
});
    