import React, { Component } from 'react'
import TodoList from '../../lists/todoList/todoList';
import Navbar from '../../common/navbar';

class AddTodos extends Component {
    state = { 
        todos: [],
    }; 

    handleAdd = (event) => {
        event.preventDefault();
        const addtodos = document.getElementById('add-todos').value; 
        const todoList = [...this.state.todos, {id: Date.now(), text: addtodos}];
        this.setState({ todos: todoList }, () => {
            document.getElementById('add-todos').value = '';
        });
    }

    handleDelete = (todoId) => {
        const updatedTodos = this.state.todos.filter(todo =>{
            return todo.id !== todoId
        });
        this.setState({ todos: updatedTodos });
    }

    render() {
        const { todos } = this.state;   
        return (
            <React.Fragment>
                <Navbar totalTodos = { todos.filter(t => t.text).length }/> 
                <div className="mt-8 w-full flex items-center justify-center bg-teal-lightest font-sans">
                    <form className="bg-white rounded shadow-lg p-6 w-full lg:w-3/4 lg:max-w-lg" onSubmit={this.handleAdd}>
                        <div className="mb-4">
                            <h1 className="text-grey-darkest">Todo List</h1>
                            <div className="flex mt-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" id='add-todos' placeholder="Add Todo" required/>
                                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:bg-teal">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
                <TodoList 
                    todos={this.state.todos}
                    onDelete={this.handleDelete}
                 />
            </React.Fragment>
        );
    }
}
 
export default AddTodos;