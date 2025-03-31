'use client';
import { useEffect, useState } from 'react';

interface Event {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string; 
  time: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://127.0.0.1:8000/events');
        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.detail || `HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
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
