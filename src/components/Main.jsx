import React, { useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Booking from './Booking/Booking';
import Home from './Home/Home';
import { fetchAPI } from '../utils/api';
import ConfirmedBooking from './ConfirmedBooking/ConfirmedBooking';

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE": {
            return {
                ...state,
                availableTimes: fetchAPI(action.date)
            };
        }
        default: {
            return state;
        }
    };
}

export const initializeTimes = () => {
    return {
        availableTimes: fetchAPI(new Date())
    };
}

const Main = () => {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/booking' element={<Booking state={state} dispatch={dispatch} />} />
                    <Route path='/confirmation' element={<ConfirmedBooking />} />
                </Routes>
            </main>
        </>
    );
}

export default Main;
