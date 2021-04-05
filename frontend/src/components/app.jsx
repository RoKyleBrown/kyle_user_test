import React, {useEffect, useState} from 'react';
import UserShowContainer from './users/user_show_container';
import { Switch, Route } from 'react-router-dom';
import './app.css';

const App = () => {


    return (
        <div id="app" >

            <Switch>
                <Route path="/" component={UserShowContainer} />
            </Switch>

        </div>
    )
};

export default App;