import { Suspense } from 'react';
import { Await, defer, json, Link, redirect, useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
      <h1>EventDetail Page</h1>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading EVENT...</p>}>
        <Await resolve={event}>{(loadedEvent) => <EventItem event={loadedEvent}></EventItem>}</Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading EVENT...</p>}>
        <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents}></EventsList>}</Await>
      </Suspense>
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
// export const eventDetailLoader = async ({ request, params }) => {
//   console.log('EVENT ID=========> ', params.eventId);
//   const response = await fetch(`http://localhost:8080/events/${params.eventId}`);

//   if (!response.ok) {
//     throw json(
//       { message: 'Could not fetch details for selected event.' },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     return response;
//   }
// };

export const deleteEventAction = async ({ request, params }) => {
  const response = await fetch('http://localhost:8080/events/' + params.eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete event.' }, { status: 500 });
  }

  return redirect('/events');
};

const loadEvent = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();

    return resData.event;
  }
};

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

export const eventDetailLoader = async ({ request, params }) => {
  // CANNOT use React Hooks here, can use any other BROWSER feature, lsike document, localStorage...
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
};
