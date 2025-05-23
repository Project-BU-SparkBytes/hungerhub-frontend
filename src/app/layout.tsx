// src/app/layout.tsx
import React from 'react';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/universal/Header';
import Footer from '@/components/universal/Footer';
import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 
        1) Remove default body margin/padding
        2) Use a container (like a <div>) to control layout
        3) Apply flex with column direction and minHeight = 100vh
      */}
      <body style={{ margin: 0, padding: 0 }}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen"
          >
            < Header />

            {/* Main content */}
            <main className="flex flex-col flex-1 justify-center items-center px-4">
              {children}
            </main>

            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
