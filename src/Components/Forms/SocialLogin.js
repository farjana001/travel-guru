import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const {value2}= useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    // google sign in
    const handleGoogleSignIn = () => {
       
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            var token = result.credential.accessToken;
            const {displayName, email} = result.user;
            const signedInUser = {name:displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }

    // facebook sign in
    const handleFbSignIn = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            var token = result.credential.accessToken;
            const {displayName, email} = result.user;
            const signedInUser = {name:displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from)
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    return (
        <div className=''>
            <div className='social-login mb-3 mx-auto'>
                <button onClick={handleFbSignIn}>Continue With Facebook</button>
            </div>
            <div className='social-login mx-auto mb-5'>
                <button onClick={handleGoogleSignIn}>Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;