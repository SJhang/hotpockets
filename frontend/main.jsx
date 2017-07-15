import React from 'react';
import ReactDOM from 'react-dom';
import Root from  './components/root';
import $ from 'jquery';
import configureStore from './store/store';

require('../assets/sass/application.scss');

document.addEventListener("DOMContentLoaded", ()=> {
	let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
	const root = document.querySelector('#root');
	ReactDOM.render(<Root store={store}/>, root);
});
