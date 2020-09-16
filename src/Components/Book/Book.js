import React from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {bookingId} = useParams();
    return (
        <div>
            <h1>Booking available</h1>
        </div>
    );
};

export default Book;