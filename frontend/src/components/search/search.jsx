import React, { useRef, useState } from 'react';

const Search = (props) => {
    const searchRef = useRef();
    const [users, setUsers] = useState([]);

    const update =  (e) => {
        e.preventDefault();
        debugger;
        props.findUsers(searchRef.current.value)
         .then( setUsers(props.users))
    }

    const queryRes = () => {
        if (!users) {
            return null;
        } else if (!!Object.keys(users).length) {
         return(
            <div>
                {users.map( user => 
                    <p>{user.full_name}</p>
                    )}
            </div>
        )   
        } else {
            return null;
        }
    }

    debugger;
    return (
        <div>
            <form action="">
                <input type="text"
                    ref={searchRef}
                    onChange={update}
                />
            </form>
            {queryRes()}
        </div>
    );
}


export default Search;