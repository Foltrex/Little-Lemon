import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"
import { act } from "react-test-renderer";

describe('Booking Form', () => {
    test('Label for date must be presented', () => {
        render(<BookingForm state={{ availableTimes: [] }} />);
        const dateLabel = screen.getByText('Choose date');
        expect(dateLabel).toBeInTheDocument();
    })

    test('Label for guest number must be presented', () => {
        render(<BookingForm state={{ availableTimes: [] }} />);
        const dateLabel = screen.getByText('Number of guests');
        expect(dateLabel).toBeInTheDocument();
    })

})

// describe('Update time testing', () => {
//     test('Testing time options for today', () => {
//         const dispatch = jest.fn(() => { availableTimes: ['20:00', '21:00'] });

//         act(() => {
//             render(<BookingForm state={{ availableTimes: [] }} dispatch={dispatch} />);

//             // const now = new Date();
//             // const formattedDate = now.toLocaleDateString("en-CA");
//             const formattedDate = '2024-03-02'
//             const datePickerInput = screen.getByLabelText('Choose date')
//             fireEvent.change(datePickerInput, { target: { value: formattedDate } })
//         })

//         console.log(datePickerInput);

//         const timeSelectInput = screen.getByLabelText(/Choose time/);
//         const optionElements = timeSelectInput.querySelectorAll('option');
//         const expectedOptions = ['20:00', '21:00'];

//         expect(true).toBe(true);
//         // expectedOptions.forEach(option => {
//         // expect(optionElements).toContainHTML(`<option key={${option}}>${option}</option>`);
//         // })
//         // availableTimes: ['20:00', '21:00']
//     })

//     // test('Testing time options for tomorrow', () => {

//     //     // availableTimes: [
//     //     //     '9:00', '10:00', '12:00', '16:00', '19:00',
//     //     //     '20:00', '21:00'
//     //     // ]
//     // })

//     // test('Testing time options for next days', () => {
//     //     // availableTimes: [
//     //     //     '9:00', '10:00', '11:00', '12:00', '13:00', '14:00',
//     //     //     '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
//     //     //     '21:00'
//     //     // ]
//     // })
// })