'use server'
// temp route for testing frontend backend integration
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`http://localhost:8000/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // better error checking needed here (find out what the error was and what status)
    if (response.status != 200) {
      return NextResponse.json(
        { error: 'Failed to fetch data' },
        { status: 500 }
      );
    }

    // parse response
    const data = await response.json();

    // additional error checking might be needed depending on API here
    // return data along with success status
    return NextResponse.json({ message: data }, { status: 200 });

  } catch (e) {
    console.error('Hello API Error:', e);
    return NextResponse.json(
      { error: 'Failed to fetch data from the backend (Internal Server Error)' },
      { status: 500 }
    );
  }
}
