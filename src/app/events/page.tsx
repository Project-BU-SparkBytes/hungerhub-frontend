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
  const router = useRouter();

  useEffect(() => {
    // fetches events
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
  }, []);

  // return loading component if set to true
  if (loading) {
    return (
      <Loading />
    );
  }

  // return error component if set to true
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center max-w-md mx-auto mt-8">
        {error}
      </div>
    );
  }

  // return no events found if events length is 0
  if (!events.length) {
    return (
      <div className="text-gray-500 text-center py-8">
        No upcoming events found
      </div>
    );
  }

  // return events
  return (
    <>
      <DisplayEvents events={events} />
    </>
  );
}
