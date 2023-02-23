import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState('');
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const { events } = data;

  return <EventsList events={events} />;
}

export default EventsPage;

export const eventsLoader = async () => {
  // CANNOT use React Hooks here, can use any other BROWSER feature, lsike document, localStorage...
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };

    // React will render closest ErrorElement in routes
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });

    return json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    return response;
    // const resData = await response.json();
    // const res = new Response(resData, { status: 201 });
    // return res;
  }
};
