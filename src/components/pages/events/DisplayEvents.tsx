import { Event } from "@/types/types"
import { EventCard } from "@/components/pages/events/EventCard"
export function DisplayEvents(props: { events: Event[] }) {
  const events = props.events
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}