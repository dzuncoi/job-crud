import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import 'antd/dist/antd.css';

import './index.css';
import store from './redux/store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App}/>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
