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
        const res = await fetch("/api/addorders", {
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
    <div className='border-2 border-green-400 py-2 px-4'>
      <div className='flex  items-center justify-between'>
        <Image height={120} width={120} src='/left-side.jpg' alt='left side' />
        <div className=' text-center'>
          <h1 className='text-6xl font-serif font-bold'>AVELLS</h1>
          <p className='font-serif font-bold text-xl'>Bottle Drinking Water</p>
          <p className='text-xl font-bold font-serif bg-gray-900 text-white w-96 text-center rounded-lg'>Net Volume: 500ml, 1.5 Ltr, 19 Ltr</p>
        </div>
        <Image height={120} width={120} src='/right-water-bottle.jpg' alt='right side bottle' />
      </div>
      <div className='space-y-4 mt-5 pb-2'>
        <div className='flex justify-between'>
          <div className='flex font-bold'>
            <h2>Ref # </h2>
            <div className='underline'>124578</div>
          </div>
          <div className='flex font-semibold '>
            <h2>Date:</h2>
            <div className='underline'>
              <CurrentDate />
            </div>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='flex'>
            <h2 className='font-bold font-serif'>Customer Name:</h2>
            <div>
              <p className='font-serif'>Name</p>
              <div className='bg-black w-[42rem] h-[1px] ' />
            </div>
          </div>
          <div className='flex'>
            <h2 className='mr-4 font-serif font-bold'>Customer Add:</h2>
            <div>
              <p className=''>add</p>
              <div className='bg-black w-[42rem] h-[1px] ' />
            </div>
          </div>
        </div>
      </div>
      {/* Detail Section */}
      <div className='flex border-t-2 h-[40rem] border-black py-3 overflow-hidden'>
        <div  className='border-r-2 w-20 text-center font-bold border-black'>
          <h2 className='font-serif border-b-2 border-black pb-2'>S.No</h2>
          <h1 className='mt-2'>1</h1>
        </div>
        <div  className='border-r-2 w-80 font-serif text-center border-black'>
          <h2 className='font-bold border-b-2 border-black pb-2'>Description</h2>
          <p className='overflow-hidden text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam asperiores porro vero consequuntur ad incidunt ipsum voluptatum, accusantium recusandae numquam officia assumenda autem libero pariatur earum, quo voluptates quidem.</p>
        </div>
        <div  className='border-r-2 w-32 border-black text-center'>
          <h2 className='font-bold font-serif border-b-2 border-black pb-2'>Quantity</h2>
          <p className='mt-2'>200</p>
        </div>
        <div  className='border-r-2 w-32 text-center border-black'>
          <h2 className='font-bold font-serif border-b-2 border-black pb-2'>Rate</h2>
          <p className='mt-2'>1500</p>
        </div>
        <div  className='w-32 text-center'>
          <h2 className='font-bold font-serif border-b-2 border-black pb-2'>Amount</h2>
          <p className='mt-2'>1500</p>
        </div>
      </div>
      {/* Address of bill */}
      <div className='text-center font-bold border-t-2 border-black py-1'>
        <p className='font-serif'>Address: Small Industrial Estate, Kohat Road, Peshawer</p>
        <p><span className='font-serif'>Contact: </span> 0333-1888847, 03359543967</p>
      </div>

    </div>
  )
}

export default PrintData
