import "./style.css"

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasksList">
    {tasks.map(task => (
      <li
        className={`tasksList__item${hideDoneTasks && task.done
          ? " tasksList__item--hidden"
          : ""}`}
      >
        <button className="tasksList__button tasksList__button--markDone">
          {task.done ? "✔" : ""}
        </button>
        <span
          class={`tasksList__content${task.done ? " tasksList__content--done" : ""}`}
        >{task.content}
        </span>
        <button
          class="tasksList__button tasksList__button--deleteTask"
        >🗑
        </button>
      </li >
    ))}
  </ul >
);

export default Tasks;