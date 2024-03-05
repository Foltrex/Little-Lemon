import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"
import { initializeTimes, updateTimes } from "../../Main";
import { fetchAPI, submitAPI } from "../../../utils/api";
import { MemoryRouter } from "react-router-dom";
import * as dateFns from 'date-fns';

describe('Booking Form', () => {
    beforeEach(() => {
        const onSubmit = jest.fn();
        render(
            <MemoryRouter>
                <BookingForm onSubmit={onSubmit} state={{ availableTimes: [] }} dispatch={jest.fn()} />
            </MemoryRouter>
        )
    });

    test('Label for date must be presented', () => {
        const dateLabel = screen.getByText('Choose date');
        expect(dateLabel).toBeInTheDocument();
    })

    test('Label for guest number must be presented', () => {
        const dateLabel = screen.getByText('Number of guests');
        expect(dateLabel).toBeInTheDocument();
    })

    test('Initialize available times', () => {
        expect(initializeTimes()).toStrictEqual({ availableTimes: fetchAPI(new Date()) })
    })

    test('Update time', () => {
        const action = { type: 'ACTION', };
        const state = { availableTimes: ['17:00', '19:30'] };
        expect(updateTimes(state, action)).toBe(state);
    })

    test("Submit", () => {
        const formData = {
            date: "2024-03-01",
            time: "22:30",
            guests: 2,
            occasion: "Birthday",
        };

        expect(submitAPI(formData)).toBe(true);
    });

    test('Fail when date field is wrong', () => {
        const dateInput = screen.getByLabelText(/choose date/i);
        const today = new Date();
        const yesterday = dateFns.subDays(today, 1);
        fireEvent.change(dateInput, { target: { value: yesterday } })

        const availableTimes = fetchAPI(today);
        const timeInput = screen.getByRole('combobox', { name: /choose time/i });
        fireEvent.change(timeInput, { target: { value: availableTimes[0] } });

        const guestInput = screen.getByRole('spinbutton', { name: /number of guests/i });
        fireEvent.change(guestInput, { target: { value: 1 } });

        const occasionInput = screen.getByRole('combobox', { name: /occasion/i });
        fireEvent.change(occasionInput, { target: { value: 'Birthday' } });

        const submitButton = screen.getByRole('button');
        expect(submitButton).toHaveStyle('opacity: 50%');
    })
})