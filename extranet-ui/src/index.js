import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/configStore';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
