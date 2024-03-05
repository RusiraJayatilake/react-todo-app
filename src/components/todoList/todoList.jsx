import React from "react";
import Todo from "../todo/todo";

const TodoList = ({ todos, onDelete }) => {
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
