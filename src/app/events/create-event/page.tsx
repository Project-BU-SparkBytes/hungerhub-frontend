'use client'
import CreateEventForm from "@/components/pages/events/CreateEventForm"
import { useEffect } from "react"
import { useRouter } from 'next/navigation';

export default function CreateEventsPage() {

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/login');
      return;
    }

  }, [router]);

  return (

    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Create Event</h1>
      <CreateEventForm />
    </>
  )
}