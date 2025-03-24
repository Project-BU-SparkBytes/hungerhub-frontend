// src/app/layout.tsx
import React from 'react';
import './globals.css';
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 
        1) Remove default body margin/padding
        2) Use a container (like a <div>) to control layout
        3) Apply flex with column direction and minHeight = 100vh
      */}
      <body style={{ margin: 0, padding: 0 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          {/* Header */}
          <header
            style={{
              backgroundColor: '#F5B53B',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'fixed',
              top: '1rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '97%',
              borderRadius: '12px',
              zIndex: 1000,

            }}
          >
            <h1>SparkByte!</h1>
            <nav>
              <ul className="navList">
                <li>
                  <Link href="/" className="navLink">Home</Link>
                </li>
                <li>
                  <Link href="/events" className="navLink">Events</Link>
                </li>
                <li>
                  <Link href="/about" className="navLink">About</Link>
                </li>
                <li>
                  <Link href="/profile" className="navLink">Profile</Link>
                </li>
              </ul>

            </nav>

          </header>

          {/* Main content */}
          <main style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {children}
          </main>

          {/* Footer */}
          <footer
            style={{
              backgroundColor: '#333',
              color: '#fff',
              textAlign: 'center',
              padding: '1rem',
            }}
          >
            <p>Contact us</p>
            <p>
              <a
                href="https://facebook.com"
                style={{ color: '#fff', marginRight: '1rem' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                style={{ color: '#fff', marginRight: '1rem' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                style={{ color: '#fff' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </p>
            <p>&copy; {new Date().getFullYear()} My Website</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
