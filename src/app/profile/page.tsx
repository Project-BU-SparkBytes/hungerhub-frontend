'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
//import { set } from 'react-hook-form';

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`, {
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
  }, [router]);

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="min-h-screen px-8 py-12 flex items-center justify-center">
      {isLoggedIn && (
        <div style={{ backgroundColor: '#FFE4C0' }}
          className="shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Welcome to your profile{user?.first_name && `, ${user.first_name}`}!
          </h1>

          {user ? (
            <>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-muted-foreground">Email</span>
                  <span className="text-right">{user.email}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-muted-foreground">First Name</span>
                  <span className="text-right">{user.first_name}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-muted-foreground">Last Name</span>
                  <span className="text-right">{user.last_name}</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  className="cta-btn"
                  style={{ backgroundColor: "#333", width: "9em", height: "3em", cursor: "pointer" }}
                  onClick={() => {
                    localStorage.removeItem("access_token");
                    router.push("/login");
                  }}
                >
                  Log Out
                </Button>
              </div>
            </>
          ) : (
            <p className="text-center text-muted-foreground mt-4">Loading user info...</p>
          )}
        </div>
      )}
    </div>
  );
}
