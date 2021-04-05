import React, { useEffect, useState } from 'react';
import LoadGif from '../preload/logo_gif';
import './user_show.css';

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
                {/* {props.users.map(user => user.email)} */}
            </div>
        )
    }
}

export default UserShow;