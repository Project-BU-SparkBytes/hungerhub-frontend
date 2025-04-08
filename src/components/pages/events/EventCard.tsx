import { Event } from "@/types/types"
export function EventCard(props: { event: Event }) {
  const event = props.event
  return (
    <div
      className="w-full rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
      style={{ backgroundColor: "#FFE4C0" }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{event.name}</h3>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-gray-700 text-sm">
            <p>
              {new Date(event.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              <span className="mx-2">•</span>
              {event.time}
            </p>
            <span className="hidden sm:inline mx-2">|</span>
            <p className="mt-1 sm:mt-0">{event.location}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-800 text-base">
        {event.description}
      </div>
    </div>
  )
}