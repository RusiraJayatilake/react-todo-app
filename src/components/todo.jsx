import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from './Redux/todoSlice';

import { ImCross } from "react-icons/im";
import { PiToggleRightLight } from "react-icons/pi";

const Todo = ({id, text}) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteTodo(id));
    }

    const handleToggle = () => {
        dispatch(toggleComplete(id))
    }

    return ( 
        <div className="mt-5 flex gap-4 items-center justify-center bg-teal-lightest font-sans">
            {/* <label for="toggle-example" class="flex items-center cursor-pointer relative mb-4">
                <input type="checkbox" id="toggle-example" class="sr-only"/>
                <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            </label> */}
            <p className="items-center justify-center text-lg">{text}</p>
            <button onClick={handleDeleteClick}  className="flex px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded">
                <ImCross />
            </button>
        </div>
    );
}
 
export default Todo;
 