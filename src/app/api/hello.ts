// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  message?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // call backend api endpoint
  try {
    const { id } = req.query;
    const response = await fetch(`http://localhost:5000/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // return
    const data = (await response.json()).message;
    // check if no data
    if (!data) {
      res.status(500).json({ error: 'Failed to fetch data from the backend (Internal Server Error)' });
      return
    }
    res.status(200).json({ message: data })
    return
  } catch (e) {
    console.error('Hello API Error:', e);
    res.status(500).json({ error: 'Failed to fetch data from the backend (Internal Server Error)' });
  }
}
