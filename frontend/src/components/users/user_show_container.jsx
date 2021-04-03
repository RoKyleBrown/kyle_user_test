import UserShow from './user_show';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        users: state.users.all,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: users => dispatch(getUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);