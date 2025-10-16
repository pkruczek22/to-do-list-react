import {useState} from 'react';
import "./style.css";
import { Form, Input, Button } from './styled';

const TaskForm = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
  <Form onSubmit={onFormSubmit}>
    <Input 
      value={newTaskContent}
      onChange={({target}) => setNewTaskContent(target.value)}
      type="text"
      placeholder="Co jest do zrobienia?"
    />
    <Button>Dodaj zadanie</Button>
  </Form>
  );
};

export default TaskForm;