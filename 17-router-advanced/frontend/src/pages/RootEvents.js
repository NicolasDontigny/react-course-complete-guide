import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

const RootEventsLayout = () => (
  <>
    <EventsNavigation></EventsNavigation>
    <Outlet></Outlet>
  </>
);

export default RootEventsLayout;
