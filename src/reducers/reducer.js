// Importing necessary functions from Redux Toolkit
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state of the todos array with one sample todo
const initialState = [{ id: 1, text: "Todo 1", completed: false }];

// Creating a slice of the Redux state for managing todos
export const todoSlice = createSlice({
    name: 'todo', // Slice name
    initialState, // Initial state
    reducers: {
        // Action creator for adding a new todo
        AddTodo: (state, action) => {
            // Generating a unique ID for the new todo using nanoid
            const todo = {
                id: nanoid(),
                text: action.payload.text, // Extracting text from the action payload
                completed: false // Setting completed status to false by default
            };
            state.push(todo); // Adding the new todo to the state array
        },
        // Action creator for removing a todo
        RemoveTodo: (state, action) => {
            // Filtering out the todo with the specified ID
            return state.filter((todo) => (todo.id !== action.payload));
        },
        // Action creator for updating the completion status of a todo
        UpdateTodo: (state, action) => {
            // Finding the todo with the specified ID
            const todoToUpdate = state.find(todo => todo.id === action.payload);
            if (todoToUpdate) {
                // Toggling the completed status of the todo
                todoToUpdate.completed = !todoToUpdate.completed;
            }
        }
    }
});

// Exporting action creators and reducer
export const { AddTodo, RemoveTodo, UpdateTodo } = todoSlice.actions;
export default todoSlice.reducer;
