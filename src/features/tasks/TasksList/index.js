import { List, Item, Content, Button } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item key={task.id} hidden={hideDone && task.done}>
        <Button
          onClick={() => toggleTaskDone(task.id)}
          markDone
        >
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button
          deleteTask
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item >
    ))}
  </List >
);

export default TasksList;