import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';

import './index.css';
import store from './redux/store'
import Header from './components/Header/Header'
import JobListContainer from './containers/JobList/JobList.container'
import JobCreateContainer from './containers/JobCreate/JobCreate.container'
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={JobListContainer}/>
        <Route exact path="/new" component={JobCreateContainer}/>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
