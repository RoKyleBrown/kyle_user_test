import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';


const Signup = () => {
    const { signup } = useAuth();;
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
                return setError("Passwords do not match")
        } 
        
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to create an account");
        }
    }

    return (
        <div className="auth-back">
            <form className="auth-form" onSubmit={handleSubmit}>
                <label htmlFor=""> Email
                    <input type="email" ref={emailRef}/>
                </label>
                <label htmlFor=""> Password
                    <input type="password" ref={passwordRef}/>
                </label>
                <label htmlFor=""> Confirm Password
                    <input type="password" ref={passwordConfirmRef}/>
                </label>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;
