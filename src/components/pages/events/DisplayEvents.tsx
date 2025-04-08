import { useState } from "react";
import { Event } from "@/types/types";
import { EventCard } from "@/components/pages/events/EventCard";

export function DisplayEvents(props: { events: Event[] }) {
  const { events } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 2;

  // Calculate indices for the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <main className="w-full flex flex-col items-center px-6 pt-28 pb-8">
      {/* Outer container using flex to create two columns */}
      <div className="w-full max-w-4xl flex gap-8">
        {/* Left side: Event list */}
        <div className="flex flex-col gap-8 flex-1">
          {currentEvents.map((event: Event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {/* Right side: Pagination and search area */}
        <div className="flex flex-col items-center justify-center">
          {/* Pagination controls */}
          <div className="flex flex-col items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 mb-4 rounded-lg bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mb-4 rounded-lg bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            >
              Next
            </button>
            <div className="text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
          </div>
          {/* Search area placeholder */}
          <div className="mt-8 flex flex-col items-center">
            <input
              type="text"
              placeholder="Search events by name..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              className="mt-4 px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
              // Search functionality will be implemented later; placeholder
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}