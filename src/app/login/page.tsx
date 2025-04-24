// src/app/login/page.tsx
'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner'
import { AuthContext } from '@/context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const { data } = await response.json();

      if (response.ok) {
        localStorage.setItem('access_token', data.access_token);
        setIsAuthenticated(true);
        router.push('/profile');
      } else {
        toast.error(data?.error || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again another time.");
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
      <h1 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>Login</h1>
      <p>Please login to view events!</p>
      <br />

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
        }}
      >

        {/* Email */}
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

        {/* Password */}
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

        {/* Submit Button */}
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
          Log in
        </button>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={() => router.push('/signup')}
          style={{
            padding: '0.75rem',
            borderRadius: '4px',
            backgroundColor: '#F5B53B',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
