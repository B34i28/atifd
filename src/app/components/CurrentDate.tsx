'use client'; // Ensure this if you are using Client Components in Next.js

import React from 'react';

const CurrentDate: React.FC = () => {
  // Get the current date
  const today = new Date();

  // Format the date (e.g., YYYY-MM-DD or other formats)
  const formattedDate = today.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default CurrentDate;
