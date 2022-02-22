import './style.css';
import Logo from './logo.png';
import Leeloo from './leeloo.jpg';

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
    buildFooter();
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

  const buildFooter = () => {
    const footerDiv = document.querySelector('#footer');

    footerDiv.textContent = 'Copyright © 2022 Gabriel Peterson';
  };

  return { buildSkeleton };
})();

const addContent = (() => {
  const identifyCurrentPage = () => {
    const fullPath = window.location.pathname;
    const currentPage = fullPath.substring(fullPath.lastIndexOf('/') + 1);
    return currentPage;
  };

  const insertContent = () => {
    switch (identifyCurrentPage()) {
      case 'index.html':
        insertIndexContent();
        break;
      case 'menu.html':
        insertMenuContent();
        break;
      case 'contact.html':
        insertContactContent();
        break;
      default:
        console.log('Page content not found');
        break;
    }
  };

  const insertIndexContent = () => {
    const indexContent = document.querySelector('#content');

    const headerLine = document.createElement('h1');
    headerLine.textContent = 'Best food you have ever eaten';

    const description = document.createElement('p');
    description.textContent = 'Delicious since 2022';

    const leelooPhoto = new Image();
    leelooPhoto.src = Leeloo;

    indexContent.appendChild(headerLine);
    indexContent.appendChild(description);
    indexContent.appendChild(leelooPhoto);
  };

  const insertMenuContent = () => {
    console.log('menu is loaded');
  };

  const insertContactContent = () => {
    console.log('contact is loaded');
  };

  return { insertContent };

})();

domBuilder.buildSkeleton();
addContent.insertContent();