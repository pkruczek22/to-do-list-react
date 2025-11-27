import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useState, useRef } from 'react';
import { Form, Button } from './styled';
import { addTask } from '../../tasksSlice';
import Input from '../../Input';

const TaskForm = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();


  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask({
      content: newTaskContent.trim(),
      done: false,
      id: nanoid()
    }))

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        type="text"
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </Form>
  );
};

export default TaskForm;