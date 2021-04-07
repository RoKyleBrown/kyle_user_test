import React, { useEffect, useState } from 'react';
import LoadGif from '../preload/logo_gif';
import './user_show.css';
import ModOne from './modules/mod_one';
import aviBack from '../../assets/avi_back.png';
import ModTwo from './modules/mod_two';
import burger from '../../assets/burger.png';
import { dropDown } from '../app';
import { useAuth } from '../../contexts/auth-context';

const UserShow = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const { logout, currentUser } = useAuth();



    useEffect(() => {
        props.getUser(currentUser.email);
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, [])

    if (isLoading===true) {
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
                        <p onClick={async () => {
                                try {
                                    await logout();
                                    props.history.push('/login')
                                } catch {}
                            }}
                        >Log Out</p>
                    </div>
                </div>
                <div className="profile">
                    <div id="mod1-contain">
                        <div className="avi-contain">
                            <div className="avi-flex">
                                <img className="avi" src={props.user.photos} alt="avitar" />
                            </div>
                            <img className="avi-back" src={aviBack} alt="avi-back" />
                            <div id="name-contain"><h2>{props.user.full_name}</h2></div>
                        </div>
                        <div className="mod-image">
                            <ModOne />
                        </div>
                        
                    </div>
                    <div id="mod2-contain">
                        <ModTwo user={props.user}/>
                    </div>
                    {/* info */}
                </div>
            </div>
        )
    }
}

export default UserShow;