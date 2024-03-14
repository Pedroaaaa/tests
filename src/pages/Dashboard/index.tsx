import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../contexts/Auth";
import { api } from "../../services/api";
import ErrorToastHandler from "../../components/ErrorToastHandler";
import { UserEvent } from "../../types/UserEvent";
import UserEventsList from "../../components/UserEventsList";

export default function Dashboard() {
  useTitle("Dashboard");
  const { signOut } = useAuth();
  const [userEvents, setUserEvents] = useState<Array<UserEvent>>([]);

  const loadUserEvents = async () => {
    try {
      const { data } = await api.get(`/users/events`);
      setUserEvents(data);
    } catch (error) {
      ErrorToastHandler(error);
    }
  };

  useEffect(() => {
    loadUserEvents();
  }, []);
  return (
    <div>
      <button onClick={signOut}>Logout</button>
      <h1>Dashboard</h1>
      <h2>User Events</h2>
      <UserEventsList userEvents={userEvents}/>
    </div>
  );
}
