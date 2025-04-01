'use client'
// src/app/page.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {

  return (
    <main className="text-center mt-8">{/* style={{ textAlign: 'center', marginTop: '2rem' }} */}
      <h1 className="text-5xl mb-4"> {/* style={{ fontSize: '3rem', marginBottom: '1rem' }} */}
        Welcome to Spark!Byte
      </h1>
      <p className="text-xl"> {/* style={{ fontSize: '1.2rem' }} */}
        This is the home page!
      </p>
      <Button>
        Test button using Shadcn
      </Button>

    </main>
  );
}
