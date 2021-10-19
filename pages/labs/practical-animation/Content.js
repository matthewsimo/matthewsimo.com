import { useState } from 'react';
import Heading from 'components/Heading';

import styles from './style.module.css';

export default function PracticalAnimationContent() {
  const [todo, setTodo] = useState('');
  const [showError, setShowError] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
    setShowError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === '') {
      setShowError(true);
    }

    const newTodos = [...todos, { id: Date.now(), todo, complete: false }];
    setTodos(newTodos);
    setTodo('');
  };

  const clearTodos = (e) => {
    setTodos([]);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, complete: true } : todo;
    });
    setTodos(newTodos);
  };

  const incompleteTodos = todos.filter((t) => t.complete === false);

  return (
    <div>
      <Heading className={`${styles.fade} ${styles.active}`} level="3">
        Practical Animation - TODOS
      </Heading>

      <div className="block p-5 border border-main-700 my-8 w-96 rounded-lg bg-main-100 text-main-700">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="todo-input">Todo*</label>
            <input
              className="block text-main-900 bg-opacity-60 hover:bg-opacity-40 focus:bg-opacity-40 bg-main-200 border border-main-300 rounded-sm px-2 py-1 mt-2 focus:outline-none placeholder-main-700 placeholder-opacity-60 w-full"
              type="text"
              label="todo-input"
              value={todo}
              placeholder={`Enter a todo`}
              onChange={handleInputChange}
            />
          </div>
          {showError && (
            <p className="text-red-400 my-6">Todo text is required!</p>
          )}
          <button className="block text-main-200 bg-main-700 hover:bg-main-600 hover:text-main-100 px-4 py-1 rounded-md focus:outline-none">
            Submit!
          </button>
        </form>

        <div className="py-12 w-9/12 mx-auto">
          <p>
            <span>&#9432;</span> If you add text and submit the form, we'll add
            the todo to your todos.
          </p>
        </div>
      </div>

      <div className="my-16">
        <header className="mb-6">
          <Heading className="inline" level="4">
            Todos
          </Heading>

          {todos.length > 0 && (
            <button
              className="align-text-bottom text-base bg-main-400 hover:bg-main-500 mx-3 px-4 py-1 rounded-md focus:outline-none"
              onClick={clearTodos}
            >
              clear all
            </button>
          )}
        </header>
        {incompleteTodos.length > 0 ? (
          <ol className="space-y-2 list-decimal">
            {incompleteTodos.map(({ id, todo }, i) => (
              <li key={id}>
                <button
                  className="text-xs bg-main-400 hover:bg-main-500 mx-3 w-6 h-6 rounded-full focus:outline-none"
                  onClick={(e) => completeTodo(id)}
                >
                  <span className="sr-only">complete</span> &#x2715;
                </button>
                {todo}
              </li>
            ))}
          </ol>
        ) : (
          <p>You have no todos currently, add one.</p>
        )}
      </div>
    </div>
  );
}
