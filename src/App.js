import Form from "./Form"
import Tasks from "./Tasks"
import OptionButtons from "./OptionButtons"
import Section from "./Section"
import Header from "./Header"
import Container from "./Container"

const tasks = [
  { id: 1, content: "przejść na reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
        extraHeaderContent={
          <OptionButtons tasks={tasks} hideDone={hideDone} />
        }
      />
    </Container>
  );
};

export default App;
