import React from 'react'

function Refill19liter() {
  return (
    <div className='ml-80'>
      <h1 className='font-serif font-bold text-3xl shadow-md shadow-green-300 text-center'>19 Litter Refill</h1>
      <p className='font-serif font-bold text-3xl mt-6 shadow-md shadow-green-300'>New Registration</p>
      <form action="" className='space-y-3 p-6 ml-14 mt-7 shadow-xl shadow-green-300 hover:shadow-green-500 bg-slate-200 h-[28rem] w-[35rem] rounded-lg'>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Customer Name</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Enter Customer Name' />
        </div>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Mobile Number</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter Mobile Number' />
        </div>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">CNIC Number</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter CNIC Number' />
        </div>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Number of bottles</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter No of Bottles' />
        </div>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Fees</label>
          <select  className='py-2 rounded-md px-2 w-[14.3rem] ' name="" id="">
            <option value="">Security</option>
            <option value="">Sold</option>
            <option value="">No Payment</option>
          </select>
        </div>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Address</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Enter Address Here' />
        </div>
        <button  onClick={(e) => {e.preventDefault() ; alert("Data is Submitted")}} className='bg-green-400 text-lg font-serif py-3 px-6 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default Refill19liter
