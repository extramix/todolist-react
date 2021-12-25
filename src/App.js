import React, { useState } from 'react';
import Todolist from './components/Todolist';
import data from './data.json'
import './App.css';

function App() {
  const [todolists, setTodolist] = useState(data);

  const handleToggle = (id) => {
    let mapped = todolists.map(task => {
      return task.id === id? {...task, complete: !task.complete} : {...task};
    });
    setTodolist(mapped);
    console.log(mapped)
  }
  return (
    <>
        <div handleToggle={handleToggle} className="p-10 text-center">
        <Todolist todolists={todolists}/>
        </div>
    </>
    
  );
}

export default App;
