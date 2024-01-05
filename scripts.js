
function smoothScrollTo(targetElement) {
    const target = document.querySelector(targetElement);
    if (target) {

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        smoothScrollTo(this.getAttribute('href'));
    });
});
