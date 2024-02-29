import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import styles from './BookingForm.module.css';
import * as yup from 'yup';
import * as dateFns from 'date-fns'

const BookingForm = ({ state, dispatch }) => {
    const occasions = ['Birthday', 'Anniversary'];
    const { availableTimes } = state;

    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0];
    const formik = useFormik({
        initialValues: {
            date: formattedDate,
            guests: 1,
            time: availableTimes[0]
        },
        validationSchema: yup.object({
            date: yup.date().required().min(now),
            time: yup.string().required().matches(/\d{1,2}:\d{2}/),
            guests: yup.number().required().min(1).max(10),
            occasion: yup.string().oneOf(occasions)
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const onDateChange = (e) => {
        formik.handleChange(e);
        const chosenDate = e.target.value;
        const currentDateString = formattedDate;
        const tomorrow = dateFns.addDays(now, 1);
        const formattedDateTomorrow = tomorrow.toISOString().split('T')[0];

        if (chosenDate === currentDateString) {
            dispatch({ type: 'today' });
        } else if (chosenDate === formattedDateTomorrow) {
            dispatch({ type: 'tomorrow' });
        } else {
            dispatch({ type: 'next days' });
        }
    }

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={styles.bookingForm}>
                <label htmlFor="date">Choose date</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    onChange={onDateChange}
                    value={formik.values.date}
                />

                <label htmlFor="time">Choose time</label>
                <select
                    id="time"
                    name="time"
                    onChange={formik.handleChange}
                    value={formik.values.time}
                >
                    {availableTimes.map(timeOption => (
                        <option key={timeOption}>{timeOption}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formik.values.guests}
                    onChange={formik.handleChange}
                />

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formik.values.occasion}
                    onChange={formik.handleChange}
                >
                    {occasions.map(occasion => (
                        <option key={occasion}>{occasion}</option>
                    ))}
                </select>

                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
}

export default BookingForm;
