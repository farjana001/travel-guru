import React from 'react';
import { TextField } from '@material-ui/core';

const Input = (props) => {
    const { name, label, value, onChange } = props;
    return (
        <TextField
            variant='outlined'
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;

// This is a re-usable component for input field;