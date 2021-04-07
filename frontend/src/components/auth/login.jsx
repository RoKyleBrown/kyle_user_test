import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { useHistory } from 'react-router-dom';
import './auth.css'
import logoAuth from '../../assets/icon-512x512.png'

const Login = () => {
    const { login } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to Log In");
        }
    }

    return (
        <div className="auth-back">

            <div className="auth-flex">
                <div id="logo-auth">
                        <img src={logoAuth} alt="logo" />
                    </div>
                    <form className="auth-form" onSubmit={handleSubmit}>

                        <input id="input" type="email" ref={emailRef}
                            placeholder="Email"
                        />

                        <input id="input" type="password" ref={passwordRef}
                            placeholder="Password"
                            defaultValue="123456"
                        />
                        <button id="auth-btn">Log In</button>
                    </form>
                </div>
            </div>
            
    )
}

export default Login;
