import React from "react";
import { useDispatch } from 'react-redux';
import { AddTodo } from "../reducers/reducer";
import { useState } from "react";

function AddTodoComponent() {
    // State for input value
    const [input, setInput] = useState('');
    // Redux dispatch hook
    const dispatch = useDispatch();
    
    // Event handler for adding a new todo
    const addTodoHandler = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Dispatching AddTodo action with input value as payload
        dispatch(AddTodo({
            text: input 
        }));
        setInput(''); // Clearing input field after adding a todo
    }

    return (
        // Form for adding a new todo
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            {/* Input field for entering todo text */}
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input} // Binding input value to state
                onChange={(e) => setInput(e.target.value)} // Handling input change
            />
            {/* Button to submit the form */}
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodoComponent;
