import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, isFavorite: false }]);
      setNewTask("");
    }
  };

  const toggleFavorite = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isFavorite = !updatedTasks[index].isFavorite;
    setTasks(updatedTasks);
  };

  const markCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={`task-text ${task.isFavorite ? "favorite" : ""}`}>
              {task.text}
            </span>
            <button
              className="favorite-btn"
              onClick={() => toggleFavorite(index)}
            >
              {task.isFavorite ? "❤️" : "🤍"}
            </button>
            <button
              className="completed-btn"
              onClick={() => markCompleted(index)}
            >
              ✔️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
