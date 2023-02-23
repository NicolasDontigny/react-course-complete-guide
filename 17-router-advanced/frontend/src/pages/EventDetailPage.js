import { json, Link, useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');

  console.log('DATA ===============>: ', data);

  return (
    <>
      <h1>EventDetail Page</h1>
      <EventItem event={data.event}></EventItem>
      <Link
        to='..'
        relative='path'
      >
        <button className='btn'>Back</button>
      </Link>
    </>
  );
};

export default EventDetailPage;

// React router passes object to loader functions
export const eventDetailLoader = async ({ request, params }) => {
  console.log('EVENT ID=========> ', params.eventId);
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};
