import { Link } from 'react-router-dom';

const EVENTS = [
  { id: '1', title: 'Big Bang' },
  { id: '2', title: 'Developed Language' },
  { id: '3', title: 'Agriculture' },
  { id: '4', title: 'Industrial Revolution' },
];

const EventsPage = () => (
  <>
    <h1>Events Page</h1>
    <ul>
      {EVENTS.map((event) => (
        <li
          key={event.id}
          className='link'
        >
          <Link to={event.id}>{event.title}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default EventsPage;
