import { useEffect, useState } from "react";
import '../resource/css/Todo.min.css'

function ToDoApp() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-wrap">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter a task" />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => removeTask(index)}
            />
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ToDoApp;