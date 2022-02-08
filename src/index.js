import './style.css';
import Logo from './logo.png';

const domBuilder = (() => {
  const buildSkeleton = () => {
    const container = document.querySelector('#container');

    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav-bar');

    const contentBox = document.createElement('div');
    contentBox.setAttribute('id', 'main-content');

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    container.appendChild(navBar);
    container.appendChild(contentBox);
    contentBox.appendChild(content);
    container.appendChild(footer);

    buildNavMenu();
  };

  const buildNavMenu = () => {
    const navItems = [
      {'name': 'home', 'link': 'index.html'},
      {'name': 'menu', 'link': 'menu.html'},
      {'name': 'contact', 'link': 'contact.html'},
    ];
    const ul = document.createElement('ul');

    const logo = new Image();
    logo.src = Logo;

    navItems.forEach((item) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = item.name[0].toUpperCase() + item.name.slice(1);
      link.href = item.link;

      if (window.location.pathname.includes(item.link)) {
        link.classList.add('current-page');
      }

      li.appendChild(link);
      ul.appendChild(li);
    });

    const navBar = document.querySelector('#nav-bar');
    navBar.appendChild(logo);
    navBar.appendChild(ul);
  }

  const fillContent = () => {
    // todo
  }

  return { buildSkeleton };
})();

domBuilder.buildSkeleton();