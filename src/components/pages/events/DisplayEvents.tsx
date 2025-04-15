import { Event } from "@/types/types"
import { EventCard } from "@/components/pages/events/EventCard"
export function DisplayEvents(props: { events: Event[] }) {
  const events = props.events
  return (
    <div className="w-full max-w-screen-lg mx-auto px-6 py-10 mt-[5%]">
      <div className="flex flex-col gap-8">
        {events.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}