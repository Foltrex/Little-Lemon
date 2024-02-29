import React, { useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Booking from './Booking/Booking';
import Home from './Home/Home';


const Main = () => {
    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'today': {
                return { availableTimes: ['20:00','21:00'] }
            }
            case 'tomorrow': {
                return { availableTimes: [
                    '9:00', '10:00', '12:00', '16:00', '19:00', 
                    '20:00', '21:00'
                ] }
            }
            default: {
                return { availableTimes: [
                    '9:00', '10:00', '11:00', '12:00', '13:00', '14:00',
                    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
                    '21:00'
                ] }
            }
        }
    }

    const [state, dispatch] = useReducer(updateTimes, { availableTimes: ['20:00','21:00'] });

    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/booking' element={<Booking state={state} dispatch={dispatch} />} />
                </Routes>
            </main>
        </>
    );
}

export default Main;
