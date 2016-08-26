import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import * as ACTIONS from './actions/bench_actions.js';
import SearchContainer from './components/search_container.js';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
  const store = window.store = configureStore();
  window.requestBenches = ACTIONS.requestBenches;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

const Root = ({store}) => (
  <Provider store={store}>
    <SearchContainer />
  </Provider>
);
