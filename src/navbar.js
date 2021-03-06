/*
  eslint-disable no-unused-vars, no-alert, no-undef,
  no-underscore-dangle,import/prefer-default-export
*/

const navbarDom = (count) => {
  const navBar = document.createElement('div');
  navBar.className = 'nav-bar';
  const navLogo = document.createElement('div');
  navLogo.classList.add('logo');
  navBar.appendChild(navLogo);

  const searchBar = document.createElement('div');
  const search = document.createElement('input');
  searchBar.classList.add('search-bar');
  search.id = 'search';
  search.type = 'search';
  search.name = 'search';
  search.placeholder = 'Search a project';
  searchBar.appendChild(search);
  navBar.appendChild(searchBar);

  const nav = document.createElement('div');
  nav.className = 'nav';
  const plus = document.createElement('a');
  plus.id = 'addForm';
  const icon = document.createElement('i');
  icon.className = 'las la-plus';
  plus.appendChild(icon);
  nav.appendChild(plus);

  const pie = document.createElement('a');
  const iconPie = document.createElement('i');
  iconPie.className = 'las la-chart-pie';
  pie.appendChild(iconPie);
  const text = document.createElement('span');
  text.innerText = ` ${count}`;
  pie.appendChild(text);
  nav.appendChild(pie);
  navBar.appendChild(nav);

  return navBar;
};

export { navbarDom };