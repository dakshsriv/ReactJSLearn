import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css'; // <-- LINK STYLESHEET IN THIS FILE

ReactDOM.render(
<Router history={createBrowserHistory()} >
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/jokes" component={Jokes}/>
    </Switch>
</Router>, 
document.getElementById('root')); 
// Live-server is needed to be installed