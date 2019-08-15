import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = 800;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());