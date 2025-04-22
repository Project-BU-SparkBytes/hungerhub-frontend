'use client';
import { useEffect, useState } from 'react';
import { Event } from "@/types/types"
import { Loading } from "@/components/ui/loading";
import { DisplayEvents } from "@/components/pages/events/DisplayEvents";
import { useRouter } from 'next/navigation';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setIsLoggedIn(false);
      setLoading(false);
      router.push('/login');
      setError('');
      return;

    }

    async function fetchEvents() {
      setLoading(true)
      try {
        // call /api/events from NextJS APIs
        const response = await fetch(`/api/events`);

        // if response is not okay, then throw error
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(`${errData.error}; Status: ${response.status}`);
        }

        // if response is okay, then set the events
        const { data } = await response.json()
        setEvents(data);


      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
    setIsLoggedIn(true);

  }, [router]);

  // return loading component if set to true
  if (loading && isLoggedIn == true) {
    return (
      <Loading />
    );
  }

  // return error component if set to true
  if (error && isLoggedIn == true) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center max-w-md mx-auto mt-8">
        {error}
      </div>
    );
  }

  // return no events found if events length is 0
  if (!events.length && isLoggedIn == true) {
    return (
      <div className="text-gray-500 text-center py-8">
        No upcoming events found
      </div>
    );
  }

  // return events
  return (
    isLoggedIn && (
      <>
        <DisplayEvents events={events} />
      </>
    )
  );
}
