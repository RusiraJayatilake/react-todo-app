import React from "react";
import Todo from "../todo/todo";

const TodoList = ({ todos, onDelete }) => {
    return (
        <ul className="list-inside text-gray-500 list-disc list-inside dark:text-gray-400">
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
