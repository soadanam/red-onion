import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializeAuthentication from './../firebase/firebase.init';

const provider = new GoogleAuthProvider();

firebaseInitializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    
    const [isLoading, setIsLoading] = useState(true);


    const googleLoginAuth = () => {
        const auth = getAuth();
        return signInWithPopup(auth, provider)
        /* .then((result) => {
            const myUser = result.user;
            setUser(myUser)
        }) */
        /* .catch((error) => {
            const logInErrorMessage = error.message;
            setError(logInErrorMessage)
        }) */
    };



    const googleLogOutAuth = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                const LogOutErrorMessage = error.message;
                setError(LogOutErrorMessage)
            });
    };



    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user)
            }
            else {
                setUser({})
            }

            setIsLoading(false)
        });
    }, []);



    return {
        user,
        error,
        isLoading,
        googleLoginAuth,
        googleLogOutAuth
    }
};

export default useFirebase;