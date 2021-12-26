import React, { useState } from 'react';
import Todolist from './components/Todolist';
import CompletedList from './components/CompletedList'
import data from './data.json'
import './App.css';

function App() {
  const [todolists, setTodolist] = useState(data);

  const handleToggle = (id) => {
    let mapped = todolists.map(task => {
      return task.id === Number(id)? {...task, complete: !task.complete} : {...task};
    });
    setTodolist(mapped);

  }
  return (
    <>
        <div className="p-10 text-center">
        <Todolist todolists={todolists} handleToggle={handleToggle}/>
        </div>
        <CompletedList/>
    </>
    
  );
}

export default App;
