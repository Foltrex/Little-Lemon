import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"
import { act } from "react-test-renderer";
import { initializeTimes, updateTimes } from "../../Main";
import { fetchAPI, submitAPI } from "../../../utils/api";
import { MemoryRouter } from "react-router-dom";

describe('Booking Form', () => {
    test('Label for date must be presented', () => {
        render(
            <MemoryRouter>
                <BookingForm state={{ availableTimes: [] }} />
            </MemoryRouter>
        );
        const dateLabel = screen.getByText('Choose date');
        expect(dateLabel).toBeInTheDocument();
    })

    test('Label for guest number must be presented', () => {
        render(
            <MemoryRouter>
                <BookingForm state={{ availableTimes: [] }} />
            </MemoryRouter>
        );
        const dateLabel = screen.getByText('Number of guests');
        expect(dateLabel).toBeInTheDocument();
    })

    test('Initialize available times', () => {
        expect(initializeTimes()).toStrictEqual({ availableTimes: fetchAPI(new Date()) })
    })

    test('Update time', () => {
        const action = { type: 'ACTION',  };
        const state ={ availableTimes: ['17:00', '19:30'] };
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
})