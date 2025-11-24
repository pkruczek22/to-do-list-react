import Buttons from "../Buttons";
import TaskForm from "../TaskForm";
import TasksList from "../TasksList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "./styled";

function Tasks() {

  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<TaskForm />}
      />
      <Section
        title={"Lista zadań"}
        optionalHeaderContent={<Buttons />}
        body={<TasksList />}
      />
    </Container>
  );
}

export default Tasks;
