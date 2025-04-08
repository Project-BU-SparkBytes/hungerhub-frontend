'use server'
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // values given from user
    const values = await req.json();
    const response = await fetch(`http://localhost:8000/create-event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.event_name,
        description: values.description,
        location: `${values.building_location} ${values.room}`, // or send separately if needed
        date: values.date,
        time: values.time,
      }),
    });

    // if response is not okay, then throw error to be caught later here
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.detail || `HTTP error! status: ${response.status}`);
    }

    // parse response
    const data = await response.json();
    console.log(data)

    // return data along with success status
    return NextResponse.json({ data: data }, { status: 200 });

  } catch (e) {
    console.error('Events API Error:', e);
    return NextResponse.json(
      // return this error msg and status for the frontend
      { error: "Failed to fetch from backend" },
      { status: 500 }
    );
  }
}
