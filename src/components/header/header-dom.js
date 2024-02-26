function createHeader() {
  const header = document.querySelector('.header');

  const h1 = document.createElement('h1');
  h1.classList.add('header-title');
  h1.innerText = 'Task Tracker';
  header.appendChild(h1);

  const headerNav = createHeaderNav();
  header.appendChild(headerNav);
}

function createHeaderNav() {
  const nav = document.createElement('nav');
  nav.classList.add('header-nav');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('header-button');
  homeBtn.innerHTML = 'Home';

  nav.appendChild(homeBtn);

  return nav;
}

export default createHeader;