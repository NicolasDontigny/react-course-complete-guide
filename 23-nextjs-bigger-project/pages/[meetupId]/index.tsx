import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Meetup } from '../../models/meetup.model';

export default function MeetupDetails() {
  const onAddMeetup = (meetup: Meetup) => {
    console.log('meetup: ', meetup);

  }
  return <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>
}
