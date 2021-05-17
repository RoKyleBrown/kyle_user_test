import { findUsers } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users.all
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        findUsers: query => dispatch(findUsers(query)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Search);