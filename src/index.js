import './style.css';
import Logo from './logo.png';

const content = document.querySelector('#content');
const logoDiv = document.createElement('div');
const logo = new Image();
logo.src = Logo;
logoDiv.appendChild(logo);
content.appendChild(logoDiv);