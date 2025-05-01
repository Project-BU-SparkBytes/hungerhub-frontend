'use client';
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext';

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
  };

  return (
    <>
      {/* Header */}
      <header className='site-header'
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
              <li className="dropdown">
                <span className="navLink">Profile</span>
                <ul className="dropdownMenu">
                  <li>
                    <Link href="/profile" className='navLink'>View Profile</Link>
                  </li>
                  <li>
                    <Link href="/login"
                      onClick={handleLogout}
                      className="navLink"
                    >
                      Log out
                    </Link>
                  </li>

                </ul>

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
