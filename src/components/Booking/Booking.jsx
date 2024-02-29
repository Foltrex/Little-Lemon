import React, { useState } from 'react';
import BookingForm from './BookingForm/BookingForm';

const Booking = (props) => {
    return (
        <>
            <BookingForm {...props} />
        </>
    );
}

export default Booking;
