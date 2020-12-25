import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logos from '../../images/fashion logo.png';
import googleIcon from '../../images/google.png';



const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [newUser, setNewUser] = useState(false);

    // const [user, setUser] = useState({
    //     isSignIn: false,
    //     name: '',
    //     email: '',
    //     password: '',
    //     photo: '',
    //     error: '',
    //     message: '',
    //     verify: '',
    //     resetPassword: ''
    // })

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIN = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignIn : true,
                    name: displayName, 
                    email,
                    photo: photoURL
                };
                setLoggedInUser(signedInUser);
                // setUserToken();
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignIn: false,
                name: '',
                email: '',
                img: '',
                error: '',
                message: ''
            }
            setLoggedInUser(signOutUser);
        })
        .catch(err => console.log(err))
    }

    // const setUserToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //         .then(idToken => {
    //             sessionStorage.setItem('token', idToken);
    //             history.replace(from);
    //         })
    //         .catch(function (error) {
    //             // Handle error
    //         });
    // }


    const handleOnBlur = (e) => {
        const newLoginInfo = {...loggedInUser};
        newLoginInfo[e.target.name] = e.target.value;
        setLoggedInUser(newLoginInfo);
        
    }

    const handleCreateAccount = (e) => {
        // console.log(user.name, user.email);
        if(newUser && loggedInUser.email && loggedInUser.password){
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then((res) => {
                const newLoginInfo = {...loggedInUser};
                newLoginInfo.error = '';
                newLoginInfo.message = 'Account Created Successfully.'
                setLoggedInUser(newLoginInfo);
                verifyEmail();
                updateUserInfo(loggedInUser.name);
                console.log(res.user);
            })
            .catch((error) => {
                const newLoginInfo = {...loggedInUser};
                newLoginInfo.error = error.message;
                newLoginInfo.message = '';
                setLoggedInUser(newLoginInfo);
            });
        }

        if(!newUser && loggedInUser.email && loggedInUser.password){
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then((res) => {
                const { displayName, email, photoURL} = res.user;
                const SignedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email,
                    image: photoURL
                }
                const newLoginInfo = {...loggedInUser, ...SignedInUser};
                newLoginInfo.error = '';
                newLoginInfo.message = 'Login Successfully.';
                setLoggedInUser(newLoginInfo);
                history.replace(from);
                console.log('sign in user info', res.user);
            })
            .catch((error) => {
                const newLoginInfo = {...loggedInUser};
                newLoginInfo.error = error.message;
                newLoginInfo.message = '';
                setLoggedInUser(newLoginInfo);
            });
        }
        // else{
        //     alert('Please Enter Your email and Password');
        // }
        //     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        //     .then((res) => {
        //         const newLoginInfo = {...user};
        //         newLoginInfo.error = '';
        //         newLoginInfo.message = 'Account Created Successfully.'
        //         setUser(newLoginInfo);
        //         console.log(res);
        //         updateUserInfo(user.name);
        //     })
        //     .catch((error) => {
        //         const newLoginInfo = {...user};
        //         newLoginInfo.error = error.message;
        //         newLoginInfo.message = '';
        //         setUser(newLoginInfo);
        //     });
        // }
        e.preventDefault();
    }

    const handleEmailSignIn = (e) => {
        console.log(loggedInUser.name, loggedInUser.email);
        // firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        //     .then((res) => {
        //         const newLoginInfo = {...user};
        //         newLoginInfo.error = '';
        //         newLoginInfo.message = 'Successfully login';
        //         setUser(newLoginInfo);
        //         // history.replace(from);
        //         console.log(res.user)
        //     })
        //     .catch((error) => {
        //         const newLoginInfo = {...user};
        //         newLoginInfo.error = error.message;
        //         newLoginInfo.message = '';
        //         setUser(newLoginInfo);
        //     });
        e.preventDefault();
    }

    const updateUserInfo = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name
        }).then(function() {
            console.log('username update successfully');
        }).catch( error => {
            console.log(error);
        });
    }

    const verifyEmail = () => {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification()
        .then(function() {
            if(!loggedInUser.verifyEmail){
                const newLoginInfo = {...loggedInUser};
                newLoginInfo.error = '';
                newLoginInfo.verify = 'Please verify your Gmail, An email was send';
                setLoggedInUser(newLoginInfo);
            }
            
        })
        .catch(function(error) {
            if(loggedInUser.verifyEmail){
                const newLoginInfo = {...loggedInUser};
                newLoginInfo.verify = '';
                newLoginInfo.error = error;
                setLoggedInUser(newLoginInfo);
            }
        });
    }

    const resetPassword = (email) => {
        if(loggedInUser.email){
            var auth = firebase.auth();
            auth.sendPasswordResetEmail(email).then(function() {
            const newLoginInfo = {...loggedInUser};
            newLoginInfo.resetPassword = 'Please check your Email';
            newLoginInfo.error= '';
            setLoggedInUser(newLoginInfo);
            })
            .catch(function(error) {
                const newLoginInfo = {...loggedInUser};
                newLoginInfo.resetPassword = '';
                newLoginInfo.error= error;
                setLoggedInUser(newLoginInfo);
            });
        }else{
            alert('Please Enter your email');
        }
    }


    return (
        <section className="container mx-auto row flex-column align-items-center py-5">
            <div className="col-md-6 mt-5">
                <div className="text-center">
                    <Link to="/">
                        <img style={{ width: '120px', marginBottom: '3em' }} src={logos} alt="" />
                    </Link>
                </div>
                <div className="card text-center mb-4">
                    <h4 className="text-center my-4">Login with</h4>
                    <button onClick={handleGoogleSignIN} className="g-signIn"><img src={googleIcon} alt="" /> Continue with Google </button>
                </div>

                    <form>
                        {
                            newUser && <>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">First Name</label>
                                <input onBlur={handleOnBlur} type="text" name="name" placeholder="Enter First name" className="form-control" id="exampleInputName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleOnBlur} type="email" name="email" placeholder="Enter email" className="form-control" id="exampleInputEmail1" required />
                                {newUser ? <p className="text-danger form-text">{loggedInUser.error}</p> : <p></p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" className="form-control" id="exampleInputPassword1" required />
                            </div>
                            {/* <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                <input onBlur={handleOnBlur} type="password" name="password" placeholder="Confirm Password" class="form-control" id="exampleInputPassword1" />
                            </div> */}
                            <p onClick={() => { setNewUser(false) }}>Already have an account? <span className="span">Login</span></p>
                            <input onClick={handleCreateAccount} type="submit" className="btn btn-primary" value="Register" />
                            </>
                        }

                        {
                            !newUser && <>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleOnBlur} type="email" name="email" placeholder="Enter email" className="form-control" id="exampleInputEmail1" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <p onClick={() => { setNewUser(true) }}>Don't have an Account? <span className="span">Create an account</span></p>
                            <p onClick={() => resetPassword(loggedInUser.email)}>Forget Password? <span className="span">Reset</span></p>
                            <button onClick={handleCreateAccount} type="submit" className="btn btn-primary">Login</button>
                            <p className="text-danger form-text">{loggedInUser.error}</p>
                            </>
                        }
                    </form>
                    <p className="text-success mt-3">{loggedInUser.message}</p>
                    <p className="text-warning">{loggedInUser.verify}</p>
                    <p className="text-warning">{loggedInUser.resetPassword}</p>
                    {
                        loggedInUser.isSignIn && <button onClick={handleSignOut}>Louout</button>
                    }
            </div>
        </section>
    );
};

export default Login;