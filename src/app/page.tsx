// src/app/page.tsx
import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    async function helloTest() {
      try {
        const response = await (await fetch(`/api/hello`)).json()
        /* if error returned set to that instead */
        const { error } = response
        if (!error || !response) {
          console.log(response.message)
        } else {
          console.log(error)
        }
      } catch (e) {
        console.log("Error while calling api:", e)
        console.log("Failed to get products (Internal Server Error)")
      }
    }
    helloTest()
  }, [])
  return (
    <main className="text-center mt-8">{/* style={{ textAlign: 'center', marginTop: '2rem' }} */}
      <h1 className="text-5xl mb-4"> {/* style={{ fontSize: '3rem', marginBottom: '1rem' }} */}
        Welcome to Spark!Byte
      </h1>
      <p className="text-xl"> {/* style={{ fontSize: '1.2rem' }} */}
        This is the home page!
      </p>

    </main>
  );
}
