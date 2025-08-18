import {useState} from 'react';
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

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  }

  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section title={"Dodaj nowe zadanie"} body={<Form />} />
      <Section
        title={"Lista zadań"}
        optionalHeaderContent={
        <Buttons 
        tasks={tasks} 
        hideDone={hideDone} 
        toggleHideDone={toggleHideDone}/>
      }
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
