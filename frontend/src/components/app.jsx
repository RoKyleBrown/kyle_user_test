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

window.addEventListener('wheel', (e) => {
    
    if (document.body.scrollTop !== 0) {

        $(".burger").addClass("burger-b");
        dropDown(e);
    } else {
        $(".burger").removeClass("burger-b");
        $(".burger-open").removeClass("burger-b");
    }
})
window.addEventListener('resize', (e) => {
    
    if (document.body.scrollTop !== 0) {

        $(".burger").addClass("burger-b");
    } else {
        $(".burger").removeClass("burger-b");
        $(".burger-open").removeClass("burger-b");
    }
})

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

