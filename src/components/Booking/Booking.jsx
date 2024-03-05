import React, { useState } from 'react';
import BookingForm from './BookingForm/BookingForm';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../../utils/api';
import { Box } from '@chakra-ui/react';

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
            <Box py={72}>
                <h1 className='subtitle' style={{ textAlign: 'center'}}>Reserve a table</h1>
                <BookingForm onSubmit={onSubmit} {...props} />
            </Box>
        </>
    );
}

export default Booking;
