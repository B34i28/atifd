'use client'; // Ensure this is at the top to make the component a Client Component

import { Addorder } from '@/lib/drizzle';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import CurrentDate from './CurrentDate';

function PrintData() {
    const [addorders, setAddorders] = useState<Addorder[]>([]); // Holds fetched products
    const [error, setError] = useState<string | null>(null); // Error state
  
    const getData = async () => {
      try {
        const res = await fetch("https://atifd.vercel.app/api/addorders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setAddorders(result.data); // Assuming your API returns
      } catch (err) {
        setError((err as Error).message); // Capture the error message
      }
    };
  
    useEffect(() => {
      getData(); // Fetch data on component mount
    }, []); // Empty dependency array to run once
    if (error) return <p>Error: {error}</p>; // Display an error state if fetching fails

    // Get the last order from the array
  const lastOrder = addorders.length > 0 ? addorders[addorders.length - 1] : null;
  return (
    <div className='flex justify-center items-center mt-32'>
      <div className='h-[26rem] w-[26rem] rounded-lg border-2 border-gray-500 overflow-hidden grid justify-center p-5'>
        <Image className='ml-28' width={100} height={100} src="/avellswbg.png" alt='Logo img' />
        <p className='flex justify-between text-lg font-serif'>Date: <CurrentDate /></p>
        <div>
          {lastOrder ? (
            <ul className='-mt-4 space-y-2'>
              <li className='text-lg font-serif flex justify-between'><span >Name:</span>{lastOrder.name}</li>
              <li className='text-lg flex justify-between'><span >Number: </span>{lastOrder.number}</li>
              <li className='text-lg flex justify-between'><span >CNIC: </span>{lastOrder.cnic}</li>
              <li className='text-lg flex justify-between'><span >Quantity of Item:</span> {lastOrder.quantityofitem}</li>
              <li className='text-lg flex justify-between'><span >Total Price:</span> {lastOrder.totalprice}</li>
              <li className='text-lg font-serif flex justify-between'><span className='mr-8'>Address:</span> {lastOrder.address}</li>
            </ul>
          ): (
            <p>No orders available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PrintData
