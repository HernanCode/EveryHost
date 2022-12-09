window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    let image = document.querySelector('.image');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
        image.classList.add('sticky)')
    } else {
        navbar.classList.remove('sticky');
        image.classList.remove('sticky)')
    }
});