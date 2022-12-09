window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
    if (this.window.pageYOffset > 12) {
        /*insertar codigo idea poner un div que aparezca*/
    }
});