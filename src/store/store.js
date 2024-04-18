import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/reducer';

// Configuring the Redux store
export const store = configureStore({
    reducer: {
        // Assigning your todoReducer to the 'todo' slice of the Redux state
        todo: todoReducer,
    }
});
