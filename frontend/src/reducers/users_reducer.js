import {
    RECEIVE_USERS,
    RECEIVE_USER
} from "../actions/user_actions";

const UsersReducer = (state = { all: {}, new: undefined }, action) => {

    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USERS:
            newState.all = action.users.data;
            return newState;
        case RECEIVE_USER:
            newState.all = action.user.data;
            return newState;
        default:
            return state;
    }
};

export default UsersReducer;