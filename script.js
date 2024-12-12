/*applies hover effect to nav bar based on the current pages html*/
window.addEventListener('DOMContentLoaded', (event) => {
    const currentPage = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll('.nav--list .item');
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});
