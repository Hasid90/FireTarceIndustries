document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Thank you for contacting FireGuard! We will get back to you soon.');
    this.reset();
};

// Animate product cards on scroll using Intersection Observer
window.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.product-card');
    const options = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__bounceInUp');
                entry.target.style.setProperty('animation-delay', (([...cards].indexOf(entry.target) + 1) + 's'));
                observer.unobserve(entry.target);
            }
        });
    }, options);
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Animate service cards on scroll using Intersection Observer
window.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.about-content .product-card');
    if (serviceCards.length) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__bounceInUp');
                    entry.target.style.setProperty('animation-delay', (([...serviceCards].indexOf(entry.target) + 1) + 's'));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        serviceCards.forEach(card => observer.observe(card));
    }
});