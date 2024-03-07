import React from "react";
import Todo from '../../common/todo/todo';

const TodoList = (props) => {
    const {todos, onDelete} = props

    return (
        <ul className="text-gray-500 dark:text-gray-400">
            {todos.map(todo => (
                <li key={todo.id}>
                    <Todo 
                        text = {todo.text}
                        onDelete={() => onDelete(todo.id)}
                    />
                </li>
            ))}
        </ul>
    );
}
 
export default TodoList;
