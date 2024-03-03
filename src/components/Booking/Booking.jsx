import React, { useState } from 'react';
import BookingForm from './BookingForm/BookingForm';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../../utils/api';

const Booking = (props) => {
    const navigate = useNavigate();

    const onSubmit = (values) => {
        const response = submitAPI(values);
        if (response) {
            navigate('/confirmation');
        }
    }

    return (
        <>
            <BookingForm onSubmit={onSubmit} {...props} />
        </>
    );
}

export default Booking;
