// src/app/signup/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [optInEmails, setOptInEmails] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');


    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, firstName, lastName, optInEmails, }),
      });
      const data = await response.json();
      console.log(data)

      if (response.ok) {
        // Redirect the user to the login page
        router.push('/login');
      } else {
        // Display any error message returned by the server
        setError(data.error || 'Sign-up failed.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem 0',
      }}
    >
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Sign Up</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
        }}
      >
        {/* Display any error messages */}
        {error && (
          <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>
        )}

        {/* Email Field */}
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>
        {/* First Name FIeld */}
        <div>
          <label htmlFor="firstName" style={{ display: 'block', marginBottom: '0.5rem' }}>
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>


        {/* Lasr Name FIeld */}
        <div>
          <label htmlFor="lastName" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>

        {/* Re-Type Password Field */}
        <div>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Re-Type Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>
        {/* Opt-in checkbox */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input
            type="checkbox"
            id="optInEmails"
            checked={optInEmails}
            onChange={e => setOptInEmails(e.target.checked)}
          />
          <label htmlFor="optInEmails">I’d like to receive email notifications</label>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          style={{
            padding: '0.75rem',
            borderRadius: '4px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
