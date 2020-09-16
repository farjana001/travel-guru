import React from 'react';
import { TextField } from '@material-ui/core';
import { UseForm, Form } from '../UseForm';
import SocialLogin from './SocialLogin';

const initialFieldValue = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: ''
};
const SignUp = () => {
    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialFieldValue)
    return (
        <div>
            <div className='create-account mx-auto text-center p-3'>
                <h3 className="pt-5">Create an account</h3>
                <Form>
                    <TextField
                        name='firstName'
                        label='First Name'
                        value={values.firstName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name='lastName'
                        label='Last Name'
                        value={values.lastName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={handleInputChange}
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
                    />
                    <TextField
                        name='confirmPassword'
                        label='Confirm Password'
                        type='password'
                        value={values.confirmPassword}
                        onChange={handleInputChange}
                    />
                </Form>
                <button className='start-booking'>Start Booking</button>
                <p>Already have an account ? <span>Login</span></p>
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