import { v4 as uuidv4 } from "uuid";
import { UserEvent } from "../../types/UserEvent";

export type Props = {
  userEvents: Array<UserEvent>;
};

export default function UserEventsList({ userEvents }: Props) {
  return (
    <ol>
      {userEvents.map((event) => (
        <li key={uuidv4()}>
          {event.description} - {new Date(event.date).toDateString()}
        </li>
      ))}
    </ol>
  );
}
