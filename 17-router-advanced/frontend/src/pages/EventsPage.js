import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState('');
  const data = useLoaderData();
  const { events } = data;

  return <EventsList events={events} />;
}

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
  } else {
    return response;
    // const resData = await response.json();
    // const res = new Response(resData, { status: 201 });
    // return res;
  }
};
