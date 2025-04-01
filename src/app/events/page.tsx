'use client';
import { useEffect, useState } from 'react';
import { Event } from "@/types/types"

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center max-w-md mx-auto mt-8">
        {error}
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="text-gray-500 text-center py-8">
        No upcoming events found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <div className="mb-2">
                <p className="text-gray-600 font-medium">When:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  <span className="mx-2">•</span>
                  {event.time}
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-600 font-medium">Where:</p>
                <p className="text-gray-500 text-sm">{event.location}</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
