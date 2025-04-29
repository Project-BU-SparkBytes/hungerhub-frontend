'use client';
import Link from 'next/link'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/context/AuthContext';

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
  };

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
            {isAuthenticated ? (
              // only show when logged in
              <li>
                <Link href="/login"
                  onClick={handleLogout}
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
