import { Meetup } from '../../models/meetup.model';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

interface MeetupListProps {
  meetups: Meetup[];
}

const MeetupList: React.FC<MeetupListProps> = (props: any) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: any) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
