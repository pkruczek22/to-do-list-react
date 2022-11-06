import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`tasks__item 
        ${hideDone && task.done ? "tasks__item--hidden" : ""}`}
      >
        <button
          className="tasks__button"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={
          `tasks__task 
          ${task.done ? "tasks__task--done" : ""}`}
        >
          {task.content}
        </span>
        <button
          className="tasks__button tasks__button--removeTaskButton"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;