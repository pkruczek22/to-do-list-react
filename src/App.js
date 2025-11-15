import { useState } from 'react';
import Buttons from "./Buttons";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from './useTasks';

function App() {
  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } = useTasks();
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

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
          <Tasks
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

export default App;
