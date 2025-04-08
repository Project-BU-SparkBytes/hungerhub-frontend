import Link from 'next/link'
export default function Header() {
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
              <Link href="/login" className="navLink">Log In</Link>
            </li>
            <li>
              <Link href="/signup" className='navLink'>Sign Up</Link>
            </li>
          </ul>

        </nav>

      </header>
    </>
  )
}
