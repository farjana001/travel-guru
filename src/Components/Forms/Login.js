import React, { useContext, useState } from 'react';
import { TextField } from '@material-ui/core';
import { UseForm, Form } from '../UseForm';
import SocialLogin from './SocialLogin';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import SignUp from './SignUp';

const initialFieldValue = {
    id: '',
    name: '',
    email: '',
    password: '',
    newUser: false
};

const Login = () => {
    const {value2} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;
    

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const {
        values,
        setValues,
        user,
        setUser,
        handleInputChange
    } = UseForm(initialFieldValue)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user.email, user.password);
        if (loggedInUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    const signedInUser= {name: res.user.displayName, email:user.email};
                    setLoggedInUser(signedInUser)
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setUser(newUserInfo);
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
    }
    return (
        <div>
            <div className='create-account mx-auto text-center p-3'>
                <h3 className="pt-5">Login</h3>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        name='email'
                        label='Email'
                        value={values.firstName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name='password'
                        label='Password'
                        value={values.lastName}
                        onChange={handleInputChange}
                        type='password'
                    />

                    <button className='start-booking' type='submit'>Start Booking</button>
                </Form>
             
                <p>Don't have an account? <Link to='/signUp'>sign up</Link></p>
                <p className='text-danger'>{user.error}</p>
            </div>
        </div>
    );
};

export default Login;