import React from 'react';
import useAuth from './../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { isLoading, googleLoginAuth } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location?.state?.from?.pathname || '/home';

    const handleSignIn = () => {
        googleLoginAuth()
            .then(() => {
                navigate(redirect_uri)
            })
        /* .finally(()=>{
            isLoading(false)
        }) */
    };


    return (
        <div>
            <h5>Please login:</h5>
            <button onClick={handleSignIn} className="btn btn btn-success">Login by google</button>

        </div>
    );
};

export default Login;