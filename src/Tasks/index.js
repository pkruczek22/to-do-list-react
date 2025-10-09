import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasksList">
    {tasks.map(task => (
      <li
        key={task.id}
        onClick={() => toggleTaskDone(task.id)}
        className={`tasksList__item${hideDone && task.done
          ? " tasksList__item--hidden"
          : ""}`}
      >
        <button className="tasksList__button tasksList__button--markDone">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`tasksList__content${task.done ? " tasksList__content--done" : ""}`}
        >{task.content}
        </span>
        <button
          className="tasksList__button tasksList__button--deleteTask"
          onClick={() => removeTask(task.id)}
        >🗑
        </button>
      </li >
    ))}
  </ul >
);

export default Tasks;