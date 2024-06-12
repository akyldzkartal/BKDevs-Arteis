const upAnimationElements = document.querySelectorAll("#animation-u, #animation-d, #animation-r, #animation-l, #pop-up");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.3,
    }
);

upAnimationElements.forEach(element => {
    observer.observe(element);
});
