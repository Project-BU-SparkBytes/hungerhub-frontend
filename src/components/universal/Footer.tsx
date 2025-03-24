export default function Footer() {
  return (
    <>
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
    </>
  )
}
