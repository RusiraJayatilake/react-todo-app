import React from "react";
import Todo from './todo';

const TodoList = ({todos}) => {
    return (
        <ul className="text-gray-500 dark:text-gray-400">
            {todos.map(todo => (
                <li key={todo.id}>
                    <Todo
                        id = {todo.id} 
                        text = {todo.text}
                    />
                </li>
            ))}
        </ul>
    );
}
 
export default TodoList;
