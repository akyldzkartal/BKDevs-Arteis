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





const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    });
});

function show() {
    mainMenu.style.display = 'flex';
    setTimeout(() => {
        mainMenu.style.top = '0';
    }, 10); // Set a slight delay for the transition to work
}

function close() {
    mainMenu.style.top = '-140%';
    setTimeout(() => {
        mainMenu.style.display = 'none';
    }, 300); // Match this timeout with your CSS transition duration
}
