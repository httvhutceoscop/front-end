import _ from 'lodash';
import printMe from './another-module.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());