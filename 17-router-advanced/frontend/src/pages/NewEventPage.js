import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

const NewEventPage = () => (
  <EventForm
    event={{}}
    method='POST'
  ></EventForm>
);

export default NewEventPage;
