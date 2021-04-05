import React from 'react';
import UserShowContainer from './users/user_show_container';
import { Switch, Route } from 'react-router-dom';
import './app.css';

const App = () => {

    return (<div>

        <Switch>
            <Route path="/" component={UserShowContainer} />
        </Switch>

    </div>)
};

export default App;