window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    const img1 = document.getElementById('imgwhite');
    const img2 = document.getElementById('imgblue');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
        img1.style.display = 'none';
        img2.style.display = 'flex';
    } else {
        navbar.classList.remove('sticky');
        img2.style.display = 'none';
        img1.style.display = 'flex';
    }
});