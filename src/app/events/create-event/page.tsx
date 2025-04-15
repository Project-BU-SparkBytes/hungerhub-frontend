import CreateEventForm from "@/components/pages/events/CreateEventForm"

export default function CreateEventsPage() {
  return (
    <main className="pt-32 pb-16 w-full">
      <h1 className="text-4xl font-bold mb-4 mx-6">Create Event</h1>
      <hr className="mx-6 border-t-2 border-gray-300 mb-10" />
      <CreateEventForm />
    </main>
  )
}
