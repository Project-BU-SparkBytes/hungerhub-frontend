import CreateEventForm from "@/components/pages/events/CreateEventForm"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';

export default function CreateEventsPage() {
  
    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/login');
        return;
      }
  
    }, []);

  return (
    
    <>
      <h1> Create Event</h1>
      <hr className="my-2 border-t-1 w-full" />
      <CreateEventForm />
    </>
  )
}