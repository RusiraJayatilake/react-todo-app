import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from './Redux/todoSlice';

const Todo = ({id, text}) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteTodo(id));
    }

    return ( 
        <div className="mt-5 flex gap-4 items-center justify-center bg-teal-lightest font-sans">
            <p className="items-center justify-center text-lg">{text}</p>
            <button onClick={handleDeleteClick}  className="flex px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded">Delete</button>
        </div>
    );
}
 
export default Todo;
 