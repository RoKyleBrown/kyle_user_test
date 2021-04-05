import React, {useEffect, useState} from 'react';
import UserShowContainer from './users/user_show_container';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import $ from 'jquery';

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
                <Switch>
                    <Route path="/" component={UserShowContainer}/>
                </Switch>

        </div>
    )
};

export default App;

