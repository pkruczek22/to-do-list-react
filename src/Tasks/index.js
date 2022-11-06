import "./style.css"

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`tasks__item 
        ${hideDone && task.done ? "tasks__item--hidden" : ""}`}
      >
        <button className="tasks__button">
          {task.done ? "✔" : ""}
        </button>
        <span className={
          `tasks__task 
          ${task.done ? "tasks__task--done" : ""}`}>
          {task.content}
        </span>
        <button
          className="tasks__button tasks__button--removeTaskButton">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;