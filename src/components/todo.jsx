import React from "react";
import Like from './common/like';

const Todo = (props) => {
    const {id, text, onDelete} = props

    const handleDeleteClick = () => {
        onDelete(id);
    }

    return ( 
        <div className="mt-5 flex gap-4 items-center justify-center bg-teal-lightest font-sans">
            <Like />
            <p className="items-center justify-center text-lg">{text}</p>
            <button onClick={handleDeleteClick}  className="flex px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded">Delete</button>
        </div>
    );
}
 
export default Todo;
 