import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { removeTask, selectHideDone, selectTasksByQuery, toggleTaskDone } from "../../tasksSlice";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

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
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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