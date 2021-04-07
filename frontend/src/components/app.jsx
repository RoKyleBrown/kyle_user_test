import React, {useEffect, useState} from 'react';
import UserShowContainer from './users/user_show_container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/auth-context';
import Signup from './auth/signup';
import './app.css';
import $ from 'jquery';
import Login from './auth/login';
import PrivateRoute from "./private-route";

export const dropDown = (e) => {
    debugger;
    if ( e.target.classList[0] === "burger"){
        $(".drop-down").addClass("drop-down-clicked");
        $(".burger").addClass("burger-open");
        $(".burger").removeClass("burger");
    } else {
        $(".drop-down").removeClass("drop-down-clicked");
        $(".burger-open").addClass("burger");
        $(".burger-open").removeClass("burger-open");
    }
    
};

const App = () => {

    return (
        <div id="app" >
                    <AuthProvider>
                            <Switch>
                                <PrivateRoute exact path='/' component={UserShowContainer} />
                                <Route path='/signup' component={Signup} />
                                <Route path='/login' component={Login} />
                            </Switch>
                    </AuthProvider>
            </div>
    )
};

export default App;

