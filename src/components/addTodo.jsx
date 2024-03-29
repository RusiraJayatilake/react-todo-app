import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import TodoList from './todoList';
import Navbar from './common/navbar';
import { addTodo, deleteTodo } from './Redux/todoSlice';

const AddTodos = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };
    
    return (
        <React.Fragment>
            <Navbar totalTodos = { todos.filter(t => t.text).length }/> 
            <div className="mt-8 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <form className="bg-white rounded shadow-lg p-6 w-full lg:w-3/4 lg:max-w-lg" onSubmit={handleAddTodo}>
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="flex mt-4">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
                                id='add-todos' 
                                placeholder="Add Todo" 
                                required
                                onChange={handleChange}
                            />
                            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:bg-teal">Add</button>
                        </div>
                    </div>
                </form>
            </div>
            <TodoList 
                todos={todos}
                onDelete={() => handleDelete(todos.id)}
            />
                
        </React.Fragment>             
    );
}
 
export default AddTodos;
