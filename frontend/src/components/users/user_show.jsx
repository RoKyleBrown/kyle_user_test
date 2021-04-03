import React, { useEffect } from 'react';

const UserShow = (props) => {

    useEffect(() => {
        props.getUsers();
    }, [])
    if (!props.users.length) return (<div>Hello React!!</div> )
    return (
        <div>
            {props.users.map( user => user.email)}
        </div>
    )
}

export default UserShow;