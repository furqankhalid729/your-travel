import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('bookings');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('bookings', serializedState);
    } catch (err) {
    }
};

const initialState = {
    bookings: loadState(),
};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        addBooking: (state, action) => {
            const existingBookingIndex = state.bookings.findIndex(booking => booking.type === action.payload.type);
            if (existingBookingIndex !== -1) {
                state.bookings[existingBookingIndex] = action.payload;
            } else {
                state.bookings.push(action.payload);
            }
            saveState(state.bookings);
        },
        removeBooking: (state, action) => {
            state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
            saveState(state.bookings);
        },
        clearBookings: (state) => {
            state.bookings = [];
        },
    },
});

export const { addBooking, removeBooking,clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;