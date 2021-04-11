import { connect } from 'react-redux';
import { getUser, updateUser } from '../../actions/user_actions';
import UserShowUpdate from './user_show_update';


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.all,
        history: ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: user => dispatch(getUser(user)),
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShowUpdate);