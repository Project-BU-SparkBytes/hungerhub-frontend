'use client';
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) return;

    setIsLoggedIn(true);

  }, []);

  return (
    <>
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
        <h1><b>Spark!Bytes</b></h1>
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
            {isLoggedIn ? (
              // only show when logged in
              <li>
                <Link href="#"
                  onClick={() => {
                    localStorage.removeItem('access_token');
                    window.location.reload();
                  }}
                  className="navLink"
                >
                  Log out
                </Link>
              </li>
            ) : (
              // only show when logged out
              <>
                <li><Link href="/login" className="navLink">Log in</Link></li>
                <li><Link href="/signup" className="navLink">Sign up</Link></li>
              </>
            )}
          </ul>

        </nav>

      </header>
    </>
  )
}
