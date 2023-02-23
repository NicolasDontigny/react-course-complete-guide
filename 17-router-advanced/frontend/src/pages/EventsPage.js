import { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState('');
  const { events } = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    // Suspense: provide fallback while waiting for await to arrive
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>;
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
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
    // Cannot return directly because of defer() step
    // return response;

    const resData = await response.json();

    return resData.events;
    // const resData = await response.json();
    // const res = new Response(resData, { status: 201 });
    // return res;
  }
};

export const eventsLoader = () =>
  // CANNOT use React Hooks here, can use any other BROWSER feature, lsike document, localStorage...
  defer({
    events: loadEvents(),
  });
