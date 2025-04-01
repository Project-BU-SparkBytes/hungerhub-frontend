import { Event } from "@/types/types"
export function EventCard(props: { events: Event[] }) {
  const events = props.events
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: Event) => (
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
  )
}