'use client';
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [user, setUser] = useState<{ name: string } | null>(null)
  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => {
        if (!res.ok) throw new Error('not logged in')
        return res.json()
      })
      .then(data => setUser(data.user))
      .catch(() => setUser(null))
  }, [])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    // clear local state & redirect
    setUser(null)
    window.location.href = '/'
  }
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
            <li className="dropdown">
              <span className="navLink">Events ▾</span>
              <ul className="dropdownMenu">
                <li>
                  <Link href="/events" className="navLink">Events</Link>
                </li>
                <li>
                  <Link href="/events/create-event" className="navLink">Create Event</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about" className="navLink">About</Link>
            </li>
            {user ? (
              // only show when logged in
              <li>
                <button
                  onClick={handleLogout}
                  className="navLink"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Log out
                </button>
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
