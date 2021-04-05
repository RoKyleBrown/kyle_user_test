import React, { useEffect, useState } from 'react';
import LoadGif from '../preload/logo_gif';
import './user_show.css';
import ModOne from './modules/mod_one';
import aviBack from '../../assets/avi_back.png';
import avi from '../../assets/candi.jpeg';

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
                <div className="profile">
                    {/* {props.users.map(user => user.email)} */}
                    {/* pic/name */}
                    <div id="mod1-contain">
                        <div className="avi-contain">
                            <div className="avi-flex">
                                <img className="avi" src={avi} />
                            </div>
                            <img className="avi-back" src={aviBack} />
                        </div>
                        <div className="mod-image">
                            <ModOne />
                        </div>
                        
                    </div>
                    <div id="mod2-contain">
                        <ModOne />
                    </div>
                    {/* info */}
                </div>
            </div>
        )
    }
}

export default UserShow;