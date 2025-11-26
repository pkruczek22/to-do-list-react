import Buttons from "../Buttons";
import TaskForm from "../TaskForm";
import TasksList from "../TasksList";
import SingleButton from "../SingleButton";
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
        optionalHeaderContent={<SingleButton />}
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
