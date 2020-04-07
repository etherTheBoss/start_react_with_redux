import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducer  from './components/store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer,
    applyMiddleware(thunk), 
);

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
