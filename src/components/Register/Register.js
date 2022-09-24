import React from 'react';
import './Register.css'
import { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';



const Register = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location?.state?.from?.pathname || '/home';



    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleName = (e) => {
        const myUserName = e.target.value;
        setUserName(myUserName);
    };
    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const handlePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleOnSubmit = (e) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: userName,
                })


                const myUser = result.user;
                console.log("signed in!", myUser);

                setErrorMessage('');
                navigate(redirect_uri);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    };



    return (
        <div className='register-main'>

            <h2 className='pt-4'> Please register: </h2>


            <form action="" onSubmit={() => handleOnSubmit()} className='d-flex flex-column w-25 m-auto'>
                <input onChange={handleName} required className='input-username' type="text" placeholder='your name' />
                <input onChange={handleEmail} required className='input-username' type="text" placeholder='user email' />
                <input onChange={handlePassword} required className='input-username' type="password" placeholder='password' />

                <input className='btn btn-info' type="submit" value="register" />
            </form>


            {/* if error happens */}
            <h4>{errorMessage}</h4>


        </div>
    );
};

export default Register;