import {
    RECEIVE_USERS,
} from "../actions/user_actions";

const UsersReducer = (state = { all: {}, new: undefined }, action) => {

    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USERS:
            newState.all = action.users.data;
            return newState;
        default:
            return state;
    }
};

export default UsersReducer;