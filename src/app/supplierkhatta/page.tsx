"use client"
import React from 'react'
import Listofsupplier from '../components/Listofsupplier';

function Supplierkhatta() {
  return (
    <div className='h-[35rem] w-[50rem] ml-80 '>
      <h1 className='font-serif text-3xl font-bold ml-14'>Supplier Khatta</h1>
      <form className='space-y-3 p-6 ml-14 mt-7 shadow-xl shadow-green-300 hover:shadow-green-500 bg-slate-200 h-[28rem] w-[35rem] rounded-lg' >

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Name of Supplier</label>
          <input className='py-2 rounded-md px-2' autoFocus type="text" placeholder='Enter Supplier Name' />
        </div>
        
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Address</label>
          <input className='py-2 rounded-md px-2' type="address" placeholder='Enter Address here' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">ID Card</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='ID Card Number' />
        </div>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Company Name</label>
          <input  className='py-2 rounded-md px-2' type="text" placeholder='Enter Company Name' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Mobile Number</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter Mobile Number' />
        </div>

        <div className='flex justify-between items-center'>
          <label  className='font-serif text-lg' htmlFor="">Image</label>
          <input  className='py-2 rounded-md px-2' type="image" placeholder='Enter Supplier Name' />
        </div>
        <div>
          <button onClick={(e) => {e.preventDefault() ; alert("Supplier is Added")}} className='bg-green-400 text-lg font-serif py-3 px-6 rounded-lg'>Add Supplier</button>
        </div>

      </form>
      <Listofsupplier />
    </div>
  )
}

export default Supplierkhatta
