import { Link, useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetail Page</h1>
      <p>{params.eventId}</p>
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
