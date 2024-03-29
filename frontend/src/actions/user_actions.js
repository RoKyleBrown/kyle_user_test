import * as APIUtil from '../util/users_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";


export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});


export const getUsers = () => dispatch => {

    return APIUtil.getUsers().then(users => dispatch(receiveUsers(users)))
};

export const getUser = (email) => dispatch => {
            
    return APIUtil.getUser(email).then(user => dispatch(receiveUsers(user)))
};

export const updateUser = (user) => dispatch => {

    return APIUtil.updateUser(user).then(user => dispatch(receiveUser(user)))
};

export const findUsers = (query) => dispatch => {

    return APIUtil.findUsers(query).then(users => dispatch(receiveUsers(users)))
};
