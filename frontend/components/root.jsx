import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

// custom components
import App from './app';

const Root = ({store}) => {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}></Route>
      </Router>
    </Provider>
  )
}

export default Root;
