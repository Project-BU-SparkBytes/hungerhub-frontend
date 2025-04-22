'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { set } from 'react-hook-form';

export default function ProfilePage() {
  const [user, setUser] = useState<{ email: string; first_name: string; last_name: string } | null>(null);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setIsLoggedIn(false);
        router.push('/login');
        setError('');
        return;
      }
      setIsLoggedIn(true)

      try {
        const response = await fetch('http://localhost:8000/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          const resError = await response.json();
          setError(resError.detail || 'Failed to fetch user');
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching user');
      }
    };

    fetchUser();
  }, []);

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      {isLoggedIn && (
          <>
          <h1>Welcome to your profile, {user?.first_name}!</h1>
          {user ? (
            <>
            <div style={{ marginTop: '1rem' }}>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>First Name:</strong> {user.first_name}</p>
              <p><strong>Last Name:</strong> {user.last_name}</p>
            </div>

            <br></br>

            <Button className = "cta-btn" style={{ cursor: "pointer", width: "9em", height: "3em", backgroundColor: "#333" }} onClick={() => {
              localStorage.removeItem('access_token');
              router.push('/login');
            }}>
              Log Out
            </Button>
            </>

        ) : (
          <p>Loading user info...</p>
        )}
        </>
      )}
    </div>
  );
}
