import React, { useState } from 'react';

interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

const TsxToDoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]); // customType(Todo[]) declaring mendatory

    const [todo, setTodo] = useState('');
    const handleTodoOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            console.log(todo);
        }

    }
    return (
        <div style={{ background: "yellow", fontSize: 20, padding: 20, width: "75%", margin: "50px auto" }}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your task" onChange={handleTodoOnChange} />
                <button type='submit'>Add</button>
            </form>
            <br /><br />
            <div>
                <strong>All the tasks</strong>
                <ol>
                    {todos.map(todo => <li key={todo.id}>{todo.id} | {todo.todo} | todoStatus : {todo.isDone ? "done" : "pending"}</li>)}
                </ol>
            </div>
        </div>
    );
};

export default TsxToDoApp;