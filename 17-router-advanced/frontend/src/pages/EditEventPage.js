import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail');
  console.log('data: ', data);
  const { event } = data;
  return (
    <EventForm
      event={event}
      method='PUT'
    />
  );
};

export default EditEventPage;
