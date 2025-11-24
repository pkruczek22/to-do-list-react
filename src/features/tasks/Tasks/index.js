import Buttons from "../Buttons";
import TaskForm from "../TaskForm";
import TasksList from "../TasksList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "./styled";
import { useTasks } from './useTasks';

function Tasks() {
  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask, hideDone, toggleHideDone } = useTasks();

  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<TaskForm addNewTask={addNewTask} />}
      />
      <Section
        title={"Lista zadań"}
        optionalHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
