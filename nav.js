document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const wrapper = document.getElementById('tools-wrapper');
    const menu = document.getElementById('tools-menu-dropdown');

    if (!wrapper || !menu) return;

    let hoverCount = 0;

    const openMenu = () => {
        menu.style.display = 'block';
    };

    const closeMenu = () => {
        menu.style.display = 'none';
    };

    wrapper.addEventListener('mouseenter', () => {
        hoverCount++;
        openMenu();
    });

    wrapper.addEventListener('mouseleave', (e) => {
        // If moving INTO the dropdown, do nothing
        if (menu.contains(e.relatedTarget)) return;
        hoverCount--;
        if (hoverCount <= 0) closeMenu();
    });

    menu.addEventListener('mouseenter', () => {
        hoverCount++;
        openMenu();
    });

    menu.addEventListener('mouseleave', () => {
        hoverCount--;
        if (hoverCount <= 0) closeMenu();
    });
});
