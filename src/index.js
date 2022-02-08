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
  };

  const buildNavMenu = () => {
    // todo
  }

  const fillContent = () => {
    // todo
  }

  return { buildSkeleton };
})();

domBuilder.buildSkeleton();