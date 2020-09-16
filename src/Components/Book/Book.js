import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, makeStyles, Grid, TextField } from '@material-ui/core';
import { UseForm, Form } from '../UseForm';
import Input from '../Contorls/Input';
import DatePicker from '../Contorls/DatePicker';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(4),
        padding: theme.spacing(3)
    }

}));

const initialFieldValue = {
    id: '',
    origin: '',
    destination: '',
    from: new Date(),
    isPermanent: false,
};



const Book = () => {
    const { bookingId } = useParams();
    const classes = useStyles();

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialFieldValue);

    return (
        <div className='container'>
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <h1 className='text-white'>Booking available</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.pageContent}>
                            <p className='text-muted'>Origin:</p>
                            <Input
                                name='origin'
                                label='Origin'
                                value={values.origin}
                                onChange={handleInputChange}
                            />
                            <p className='text-muted mt-3'>Destination:</p>
                            <Input
                                label='Destination'
                                name='destination'
                                value={values.destination}
                                onChange={handleInputChange}
                            />
                            <DatePicker
                                name='isPermanent'
                                label='From'
                                value={values.from}
                                onChange={handleInputChange}
                            />
                            <DatePicker
                                name='isPermanent'
                                label='To'
                                value={values.from}
                                onChange={handleInputChange}
                            />
                            <button className='start-booking'>Start Booking</button>
                        </Paper>
                    </Grid>
                </Grid>
            </Form>
        </div>
    );
};

export default Book;