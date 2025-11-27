import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import { SectionContainer } from "../../../common/SectionContainer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";


function TaskPage() {
    const { id } = useParams();

    const task = useSelector(state => getTaskById(state, id));
    console.log(task)

  return (
    <Container>
      <Header title={"Szczegóły zadania"} />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={task ? <SectionContainer><strong>Wykonano:</strong> {task.done ? "Tak" : "Nie"}</SectionContainer> : ""}
      />
    </Container>
  );
}

export default TaskPage;
