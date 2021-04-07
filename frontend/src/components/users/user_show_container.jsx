import UserShow from './user_show';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.all,
        history: ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: user => dispatch(getUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);