import React from 'react';
import './Login.css';
import useAuth from './../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const { isLoading, googleLoginAuth } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');


    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location?.state?.from?.pathname || '/home';

    const handleSignIn = () => {
        googleLoginAuth()
            .then(() => {
                navigate(redirect_uri)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            })
        /* .finally(()=>{
            isLoading(false)
        }) */
    };



    // const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    // console.log("Email?:", email)
    const [password, setPassword] = useState('');
    // console.log("Password?:", password)


    const handleEmail = (e) => {
        const email = e.target.value;
        // console.log("Email:", email);
        setEmail(email);
    };
    const handlePassword = (e) => {
        const password = e.target.value;
        // console.log("Pass:", password);
        setPassword(password);
    };

    const handleLoginWithEmailPass = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const myUser = result?.user;
                console.log('USEr in Login:', myUser)
                // setUser(myUser);
                navigate(redirect_uri)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    };


    return (
        <div className='login-main-div'>
            <h4 className='pt-4'>Please Login:</h4>
            <button onClick={handleSignIn} className="btn btn-success mt-5">Google Signin</button>

            <h4>or</h4>

            {/* email password login form  */}
            <form action="" onSubmit={handleLoginWithEmailPass}>
                <input onChange={handleEmail} className='input-username' type="text" placeholder='username' />
                <input onChange={handlePassword} className='input-username' type="text" placeholder='password' />

                <input className='btn btn-warning' type="submit" value="submit" />
            </form>

            {/* show this only if error is found */}
            { errorMessage &&  <h6>Error: {errorMessage} </h6> }
            

        </div>
    );
};

export default Login;