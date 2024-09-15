"use client"
import React from 'react'
import Listofadmin from '../components/Listofadmin';

function Amin() {
  return (
    <div  className='h-[35rem] w-[50rem] ml-80'>
      <h1 className='font-serif text-2xl font-bold ml-14'>Admin</h1>
      <form className='space-y-3 p-6 ml-14 mt-7 shadow-xl shadow-green-300 hover:shadow-green-500 bg-slate-200 h-[28rem] w-[35rem] rounded-lg' action="">

        <div  className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Name</label>
          <input className='py-2 rounded-md px-2' autoFocus type="text" placeholder='Name of Admin' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Father Name</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Enter Father Name' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Mobile Number</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter Mobile Number' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Address</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Enter Address' />
        </div>
        
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">CNIC</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter CNIC here' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Picture</label>
          <input className='py-2 rounded-md px-2' type="image" placeholder='picture' />
        </div>
        <button onClick={(e) => {e.preventDefault() ; alert("Admin is Added")}} className='bg-green-400 text-lg font-serif py-3 px-6 rounded-lg'>ADD Admin</button>

      </form>
      <Listofadmin />
    </div>
  )
}

export default Amin
