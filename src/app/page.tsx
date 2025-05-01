'use client'
// src/app/page.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext';


export default function Home() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
  };

  return (
    <main className="text-center mt-8">
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", padding: "30px" }}>

        <div style={{ flex: "1", padding: "35px", backgroundColor: "#FFE4C0", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          <h2 className="text-5xl mb-4">
            <b>Welcome to Spark!Bytes</b>
          </h2>
          <br></br>
          <p>
            Welcome to Spark!Bytes - the campus hub for reducing food waste and building community at Boston University.

            <br></br>
            <br></br>

            Our platform connects BU students and faculty by allowing event organizers to share surplus food and giving
            students the opportunity to enjoy delicious leftovers from campus events. With just a simple account, you can easily
            post your event or browse available food pickups across campus. Join us in making every event a chance to support
            sustainability and enjoy great food together!
          </p>
        </div>

        <div style={{ flex: "1", alignContent: "center", backgroundColor: "#FFE4C0", borderRadius: "12px", padding: "35px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          {!isAuthenticated && (
            <>
              <h3 className="text-3xl mb-3">
                <b>Login or Sign-up</b>
              </h3>

              <p>
                Join the Spark!Bytes community — where sustainability meets free food.<br />
                Our mission is simple: reduce food waste on campus by connecting students and faculty to events with surplus meals.
                Whether you&apos;re looking for your next snack between classes or want to contribute to a greener BU, Spark!Bytes makes it easy.
                <br /><br />
                Sign up today and help turn leftover lunches into lasting impact.
              </p>

              <br></br>

              <div style={{ display: "flex", flexDirection: "row", gap: "40px", justifyContent: "center", }}>
                <Button className="cta-btn" style={{ cursor: "pointer", width: "9em", height: "3em", backgroundColor: "#333" }}>
                  <Link href="login">Login</Link>
                </Button>

                <Button className="cta-btn" style={{ cursor: "pointer", width: "9em", height: "3em", backgroundColor: "#333", }}>
                  <Link href="signup">Sign Up</Link>
                </Button>

              </div>
            </>
          )}

          {isAuthenticated && (
            <>
              <h3 className="text-3xl mb-3">
                <b>Welcome Back!</b>
              </h3>

              <p>
                Ready to find your next meal?
                Check out the events page to discover free food happening across BU.
                Whether it&apos;s leftover pizza from a club meeting or catered trays from a seminar,
                Spark!Bytes connects you with real-time opportunities to reduce waste and eat well.

                <br /><br />

                Browse now, and don&apos;t miss out — food goes fast!
              </p>

              <br></br>

              <Button className="cta-btn" style={{ cursor: "pointer", width: "9em", height: "3em", backgroundColor: "#333" }} onClick={handleLogout}>
                Log Out
              </Button>
            </>
          )}

        </div>

      </div>
    </main>
  );
}
