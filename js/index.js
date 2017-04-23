require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const listTitles = ['List Title 1', 'List Title 2', 'List Title 3'];

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Board title='Board Title' lists={listTitles} />, document.getElementById('app'))
);
