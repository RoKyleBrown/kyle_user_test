import React, { useEffect, useState } from 'react';
import LoadGif from '../preload/logo_gif';
import './user_show.css';
import ModOne from './modules/mod_one';
import aviBack from '../../assets/avi_back.png';
import avi from '../../assets/candi.jpeg';
import ModTwo from './modules/mod_two';
import burger from '../../assets/burger.png';
import { dropDown } from '../app';

const UserShow = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        props.getUsers();
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, [])

    if (isLoading==true) {
        return (
            <LoadGif/> 
        )
    } else {
        return (
            <div id="show-container">
                <div id="nav">
                    <div>
                        <img className="burger" src={burger} 
                        onClick={(e) => dropDown(e)}
                        alt="drop-down"/>
                    </div>
                    <div className="drop-down">
                        <p>Search</p>
                        <p>Log Out</p>
                    </div>
                </div>
                <div className="profile">
                    {/* {props.users.map(user => user.email)} */}
                    {/* pic/name */}
                    <div id="mod1-contain">
                        <div className="avi-contain">
                            <div className="avi-flex">
                                <img className="avi" src={avi} alt="avitar" />
                            </div>
                            <img className="avi-back" src={aviBack} alt="avi-back" />
                            <div id="name-contain"><h2>Candi Coe</h2></div>
                        </div>
                        <div className="mod-image">
                            <ModOne />
                        </div>
                        
                    </div>
                    <div id="mod2-contain">
                        <ModTwo />
                    </div>
                    {/* info */}
                </div>
            </div>
        )
    }
}

export default UserShow;