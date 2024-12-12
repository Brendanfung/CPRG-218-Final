/*applies hover effect to nav bar based on the current pages html*/
window.addEventListener('DOMContentLoaded', (event) => {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html'; 
    const navItems = document.querySelectorAll('.nav--list .item');
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const linkHref = link.getAttribute('href').split("/").pop(); 
        if (linkHref === currentPage) {
            item.classList.add('active');
        }
    });
});