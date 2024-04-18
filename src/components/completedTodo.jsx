import React from 'react';
import { useSelector } from 'react-redux';

function CompletedTodo() {
    // Selecting completed todos from Redux state whose completed values are true
    const completedTodos = useSelector((state) =>
        state.todo.filter((todo) => todo.completed === true)
    );

    return (
        <div>
            {/* Displaying the number of completed tasks */}
            <p className='text-black m-10 rounded-xl font-semibold text-2xl'>Completed Tasks : {completedTodos.length}</p>
        </div>
    );
}

export default CompletedTodo;

