import Buttons from "./Buttons";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import SingleButton from "./SingleButton";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import Search from "./Search";

function TasksPage() {

  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<TaskForm />}
        optionalHeaderContent={<SingleButton />}
      />
      <Section
        title={"Wyszukiwarka"}
        body={<Search />}
      />
      <Section
        title={"Lista zadań"}
        optionalHeaderContent={<Buttons />}
        body={<TasksList />}
      />
    </Container>
  );
}

export default TasksPage;
