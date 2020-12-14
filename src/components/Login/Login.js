import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logos from '../../images/fashion logo.png';
import googleIcon from '../../images/google.png';



firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIN = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            console.log(res.user);
            const signedInuser = { name: displayName, email, img: photoURL };
            setLoggedInUser(signedInuser);
            setUserToken();
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    // const handleSignOut = () => {
    //     firebase.auth().signOut()
    //     .then(res => {
    //         setIsLogin(false);
    //     })
    //     .catch(err => console.log(err))
    // }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
        })
        .catch(function(error) {
        // Handle error
        });
    }

    return (
        <section className="container mx-auto row flex-column align-items-center py-5">
            <div className="col-md-4 mt-5">
                <div className="text-center">
                    <img style={{width: '120px', marginBottom: '3em'}} src={logos} alt=""/>
                </div>
                <div className="card py-5 text-center">
                    <h4 className="text-center mb-4">Login with</h4>
                    <button onClick={handleGoogleSignIN} className="g-signIn"><img src={googleIcon} alt=""/> Continue with Google </button>
                </div>
            </div>
        </section>
    );
};

export default Login;