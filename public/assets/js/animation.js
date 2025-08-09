const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-active');
            observer.unobserve(entry.target); // Optional: Stop observing once animated
        }
    });
});

// Observe the elements you want to animate
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll-into-view');
elementsToAnimate.forEach((element) => {
    observer.observe(element);
});
console.log('animation.js loaded and observer initialized for elements:', elementsToAnimate);
