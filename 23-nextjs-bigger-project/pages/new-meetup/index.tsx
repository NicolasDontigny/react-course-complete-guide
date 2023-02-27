import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Meetup } from '../../models/meetup.model';

export const NewMeetup: React.FC<{}> = () => {
  const onAddMeetup = (meetup: Meetup) => {
    console.log('meetup: ', meetup);

  }
  return <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>
}

export default NewMeetup;
