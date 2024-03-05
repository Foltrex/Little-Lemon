import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import styles from './BookingForm.module.css';
import * as yup from 'yup';
import * as dateFns from 'date-fns'
import Button from '../../common/Button/Button';

const BookingForm = ({ onSubmit, state, dispatch }) => {
    const occasions = ['Birthday', 'Anniversary'];
    const { availableTimes } = state;

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-CA");
    const formik = useFormik({
        initialValues: {
            date: formattedDate,
            guests: 1,
            time: availableTimes[0],
            occasion: occasions[0]
        },
        validationSchema: yup.object({
            date: yup.date().required().min(formattedDate),
            time: yup.string().required().matches(/\d{1,2}:\d{2}/),
            guests: yup.number().required().min(1).max(10),
            occasion: yup.string().oneOf(occasions)
        }),
        onSubmit: (values) => onSubmit(values)
    });

    useEffect(() => {
        dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
    }, [formik.values.date]);

    const activeButtonStyle = {
        width: 'calc(100% + 32px)',
        height: '56px',
        borderRadius: '16px'
    };

    const disabledButtonStyle = {
        ...activeButtonStyle,
        opacity: '50%'
    };

    return (
        <>
            <form
                onSubmit={formik.handleSubmit}
                className={styles.bookingForm}
                aria-label='Reserve a table'
            >
                <label htmlFor="date">Choose date<sup>*</sup></label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    aria-required='true'
                />
                {formik.errors.date && <p className={styles.error}>{formik.errors.date}</p>}

                <label htmlFor="time">Choose time<sup>*</sup></label>
                <select
                    id="time"
                    name="time"
                    onChange={formik.handleChange}
                    value={formik.values.time}
                    aria-required='true'
                >
                    {availableTimes.map(timeOption => (
                        <option key={timeOption}>{timeOption}</option>
                    ))}
                </select>
                {formik.errors.time && <p className={styles.error}>{formik.errors.time}</p>}

                <label htmlFor="guests">Number of guests<sup>*</sup></label>
                <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formik.values.guests}
                    onChange={formik.handleChange}
                    aria-required='true'
                />
                {formik.errors.guests && <p className={styles.error}>{formik.errors.guests}</p>}

                <label htmlFor="occasion">Occasion<sup>*</sup></label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formik.values.occasion}
                    onChange={formik.handleChange}
                    aria-required='true'
                >
                    {occasions.map(occasion => (
                        <option key={occasion}>{occasion}</option>
                    ))}
                </select>
                {formik.errors.occasion && <p className={styles.error}>{formik.errors.occasion}</p>}

                <Button
                    disabled={!formik.isValid}
                    text='Make Your reservation'
                    onClick={() => formik.submitForm()}
                    style={formik.isValid ? activeButtonStyle : disabledButtonStyle}
                    ariaLabel='Confirm your reservation details'
                />
            </form>
        </>
    );
}

export default BookingForm;
