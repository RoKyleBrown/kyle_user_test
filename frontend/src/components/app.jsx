import UserShowContainer from './users/user_show_container';
import UserShowUpdateContainer from './users/user_show_update_container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/auth-context';
import Signup from './auth/signup';
import './app.css';
import Login from './auth/login';
import PrivateRoute from "./private-route";
import "../jquery/jquery-ops";


const App = () => {

    return (
        <div id="app" >
                    <AuthProvider>
                            <Switch>
                                <PrivateRoute exact path='/' component={UserShowContainer} />
                                <PrivateRoute path='/update' component={UserShowUpdateContainer} />
                                <Route path='/signup' component={Signup} />
                                <Route path='/login' component={Login} />
                            </Switch>
                    </AuthProvider>
            </div>
    )
};

export default App;

