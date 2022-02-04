import './style.css';
import Logo from './logo.png';

const domBuilder = (() => {
  const buildSkeleton = () => {
    const content = document.querySelector('#content');
    const logoDiv = document.createElement('div');
    const logo = new Image();
    logo.src = Logo;
    logoDiv.appendChild(logo);
    content.appendChild(logoDiv);
    const test = document.createElement('div');
    test.textContent = 'Test';
    logoDiv.appendChild(test);
  };

  return { buildSkeleton };
})();

domBuilder.buildSkeleton();