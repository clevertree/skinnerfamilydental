import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-pulse flex flex-col items-center">
        <Image 
          src="/assets/imgs/site-logo.png"
          alt="Stephanie L. Skinner Family Dental Logo" 
          width={250} 
          height={149} 
          priority
          className="mb-6"
        />
        <div className="mt-4 h-2 w-32 bg-gray-300 rounded"></div>
        <div className="mt-3 h-2 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
