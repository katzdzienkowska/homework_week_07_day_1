import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {name: 'Grocery shopping', priority: 'high'},
    {name: 'Clean bathroom', priority: 'low'},
    {name: `Car's MOT`, priority: 'high'}
  ]);

  const [newTodo, setNewTodo] = useState('');

  const [todoPriority, setTodoPriority] = useState('');

  const todosList = todos.map((todo, index) => {
    return (
      <li key={index} className={todo.priority === 'high' ? 'high-priority' : 'low-priority'}>
        <span>{todo.name}</span>
      </li>
    );
  });

  const handleTodoInput = (evt) => {
    setNewTodo(evt.target.value);
  };

  const handleTodoPriority = (evt) => {
    setTodoPriority(evt.target.value);
  };

  const saveNewTodo = (evt) => {
    evt.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push({name: newTodo, priority: todoPriority});
    setTodos(copyTodos);
    setNewTodo('');
  };


  return (
    <div className='todo-list'>

      <h1>Todo List</h1>
      
      <form onSubmit={saveNewTodo}>
        <label htmlFor='new-todo'></label>
        <input id='new-item' type='text' value={newTodo} onChange={handleTodoInput}/>
        <label htmlFor='high'>High</label>
        <input id='high' type='radio' name='priority' value='high' onChange={handleTodoPriority}/>
        <label htmlFor='low'>Low</label>
        <input id='low' type='radio' name='priority' value='low' onChange={handleTodoPriority}/>
        <input type='submit' value='Save Item'/>
      </form>

      <ul>
        {todosList}
      </ul>

    </div>

  );
}

export default App;
