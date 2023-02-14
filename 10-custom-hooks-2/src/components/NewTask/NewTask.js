import React, { useCallback } from 'react';
import { apiConstants } from '../../constants/api.constants';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const handleTask = useCallback(
    (taskText, task) => {
      const generatedId = task.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    },
    [props]
  );

  const { isLoading, error, sendRequest: addTask } = useHttp();
  const enterTaskHandler = async (taskText) => {
    addTask(
      handleTask.bind(null, taskText),
      `${apiConstants.firebase}/tasks.json`,
      {
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return (
    <Section>
      <TaskForm
        onEnterTask={enterTaskHandler}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
