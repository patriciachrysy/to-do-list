const navbarDom = () => {
    const navBar = document.createElement('div');
    navBar.className = 'nav-bar';
    const navLogo = document.createElement('div');
    navLogo.classList.add('logo');
    navBar.appendChild(navLogo);

    // searchbar
    const searchBar = document.createElement('div');
    const search = document.createElement('input');
    searchBar.classList.add('search-bar');
    search.id = 'search';
    search.type = 'search';
    search.name = 'search';
    search.placeholder = 'Search a project'
    searchBar.appendChild(search);
    navBar.appendChild(searchBar);

    // nav
    const nav = document.createElement('div');
    nav.className = 'nav';
    const plus = document.createElement('a');
    const icon = document.createElement('i');
    icon.className = 'las la-plus';
    plus.appendChild(icon);
    nav.appendChild(plus);

    const pie = document.createElement('a');
    const iconPie = document.createElement('i');
    iconPie.className = 'las la-chart-pie';
    pie.appendChild(iconPie);
    pie.innerHTML = 10;
    nav.appendChild(pie);
    navBar.appendChild(nav);

    return navBar;

};

export default navbarDom