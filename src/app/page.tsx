'use client'
// src/app/page.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
// import { MailOpen } from "lucide-react"

export default function Home() {

  return (
    <main className="text-center mt-8">
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", padding: "30px" }}>


        <div style={{ flex: "1", padding: "35px", backgroundColor: "#FFE4C0", borderRadius: "12px" }}>
          <h2 className="text-5xl mb-4">
            <b>Welcome to Spark!Bytes</b>
          </h2>
          <br></br>
          <p>
            Welcome to Spark!Bytes – the campus hub for reducing food waste and building community at Boston University.

            <br></br>
            <br></br>

            Our platform connects BU students and faculty by allowing event organizers to share surplus food and giving
            students the opportunity to enjoy delicious leftovers from campus events. With just a simple account, you can easily
            post your event or browse available food pickups across campus. Join us in making every event a chance to support
            sustainability and enjoy great food together!
          </p>
        </div>

        <div style={{ flex: "1", alignContent: "center", backgroundColor: "#FFE4C0", borderRadius: "12px", padding: "35px" }}>
          <h3 className="text-3xl mb-3">
            <b>Login or Sign-up</b>
          </h3>

          <p>
            Join the Spark!Bytes community.
            Help reduce waste, connect with others, and enjoy free food—one event at a time.
          </p>

          <br></br>

          <div style={{ display: "flex", flexDirection: "row", gap: "40px", justifyContent: "center", }}>
            <Button style={{ cursor: "pointer", width: "9em", height: "3em" }}>
              <Link href="login">Log in</Link>
            </Button>

            <Button style={{ cursor: "pointer", width: "9em", height: "3em" }}>
              <Link href="signup">Sign Up</Link>
            </Button>

          </div>

        </div>

      </div>
    </main>
  );
}
