window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});