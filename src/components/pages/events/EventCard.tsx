import { Event } from "@/types/types"
export function EventCard(props: { event: Event }) {
  const event = props.event
  return (
    <div
      className="w-full rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
      style={{ backgroundColor: "#FFE4C0" }}
    >
      {/* Event Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.name}</h3>

      {/* Date, Time, Location */}
      <div className="flex flex-wrap items-center text-sm text-gray-700 gap-x-3 gap-y-1 mb-4">
        <p>
          📅{" "}
          {new Date(event.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <span className="text-gray-500">|</span>
        <p>⏰ {event.time}</p>
        <span className="text-gray-500">|</span>
        <p>📍 {event.location}</p>
      </div>

      {/* Description */}
      <p className="text-gray-800 text-base mb-4">{event.description}</p>

      {/* Additional Info */}
      <div className="bg-white/40 rounded-xl p-4 text-sm text-gray-700 space-y-2">
        <p>
          <span className="font-medium">🎓 Eligible Attendees:</span>{" "}
          {event.student_alumni_prof.charAt(0).toUpperCase() +
            event.student_alumni_prof.slice(1)}
        </p>
        <p>
          <span className="font-medium">🍽️ Food Available:</span>{" "}
          {event.food_available ? event.food_available : "N/A"}
        </p>
      </div>
    </div>
  );
}