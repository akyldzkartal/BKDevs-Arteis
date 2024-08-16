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

menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    });
});

function show() {
    mainMenu.style.display = 'flex';
    setTimeout(() => {
        mainMenu.style.top = '0';
    }, 10); 
}

function close() {
    mainMenu.style.top = '-140%';
    setTimeout(() => {
        mainMenu.style.display = 'none';
    }, 1000); 
}


