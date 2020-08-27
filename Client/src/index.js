
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
import Entities from './Pages/Entities/Entities';
import Assets from './Pages/FirstPage/FirstPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
<Switch>
<Route exact path='/' >
 <Redirect to="/Assets" />
</Route>
  <Route path='/Assets' component={Assets} />
    <Route path='/Entities' component={Entities} />
</Switch>
</BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
