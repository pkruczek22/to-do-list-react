import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Zrobić obiad", done: false },
  { id: 2, content: "Pójść na spacer", done: true }
];

const hideDoneTasks = false

function App() {
  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section title={"Dodaj nowe zadanie"} body={<Form />} />
      <Section
        title={"Lista zadań"}
        optionalHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
