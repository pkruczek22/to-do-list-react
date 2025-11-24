import { removeTask, selectTasks, toggleTaskDone } from "../tasksSlice";
import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} hidden={hideDone && task.done}>
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            $markDone
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content $done={task.done}>
            {task.content}
          </Content>
          <Button
            $deleteTask
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item >
      ))}
    </List >
  );
};

export default TasksList;