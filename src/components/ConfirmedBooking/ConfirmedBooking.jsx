import React from 'react';
import {ReactComponent as CheckCircle} from '../../assets/icons/Check circle outline.svg';
import styles from './ConfirmedBooking.module.css';

const ConfirmedBooking = () => {
    return (
        <>
            <div className={styles.confirmedBooking}>
                <CheckCircle />
                <h2 className='subtitle'>
                    Your booking has been confirmed
                </h2>
                <p className='lead-text'>
                    You have successfully booked a table!
                    We look forward to seeing you at our restaurant!
                </p>
            </div>
        </>
    );
}

export default ConfirmedBooking;
