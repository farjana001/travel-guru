import React from 'react';
import { TextField } from '@material-ui/core';
import { UseForm, Form } from '../UseForm';
import SocialLogin from './SocialLogin';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { Link } from 'react-router-dom';

const initialFieldValue = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: ''
};

// const [user, setUser] = useState({
//     isSignedIn: false,
//     name: '',
//     email: '',

//  })
const SignUp = () => {
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
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo);
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
                <h3 className="pt-5">Create an account</h3>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        name='firstName'
                        label='First Name'
                        value={values.firstName}
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        name='lastName'
                        label='Last Name'
                        value={values.lastName}
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        name='mobile'
                        label='Mobile'
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name='password'
                        label='Password'
                        type='password'
                        value={values.password}
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        name='confirmPassword'
                        label='Confirm Password'
                        type='password'
                        value={values.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <button className='start-booking' type='submit'>Start Booking</button>
                </Form>
                <p>Already have an account ? <Link to='/login'>Login</Link></p>
                <p className='text-danger'>{user.error}</p>
                {user.success && <p className='text-success'>User created successfully</p>}
            </div>
            <div className="d-flex justify-content-center my-4">
                <div className='line'></div>
                <span className='mt-3 mx-2'>Or</span>
                <div className='line'></div>
            </div>
            <SocialLogin />
        </div>
    );
};

export default SignUp;