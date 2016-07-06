import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Blog from './components/blog.jsx';
import Store from './store';
import './styles/styles.styl';

const render = () => {
  ReactDOM.render(
    <Provider store={ Store }>
      <Router history={ browserHistory }>
        <Route path="*" component={ Blog }/>
      </Router>
    </Provider>,
    document.getElementById('blogga')
  );
};

render();
