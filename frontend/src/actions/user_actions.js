import * as APIUtil from '../util/users_util';

export const RECEIVE_USERS = "RECEIVE_USERS";


export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});


export const getUsers = () => dispatch => {

    return APIUtil.getUsers().then(users => dispatch(receiveUsers(users)))
};
