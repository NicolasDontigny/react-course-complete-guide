// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { eventFormAction } from './components/EventForm';
import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/Error';
import EventDetailPage, { deleteEventAction, eventDetailLoader } from './pages/EventDetailPage';
import EventsPage, { eventsLoader } from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import { RootLayout } from './pages/Root';
import RootEventsLayout from './pages/RootEvents';

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// eslint-disable-next-line max-len
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <RootEventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            // React router will await the Promise and return the result into data
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            // id used to access loader data
            id: 'event-detail',
            // Shared loader for children elements, will execute for any children rendered
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: 'edit', element: <EditEventPage />, action: eventFormAction },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: eventFormAction },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
