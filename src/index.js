/*eslint-disable no-unused-vars*/
import React from "react";
import {render} from "react-dom";
import App from "./App";
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
/*eslint-enable no-unused-vars*/

import store from './store/index';


render((
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>
  ), document.getElementById("root"));
