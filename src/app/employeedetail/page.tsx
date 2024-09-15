'use client'
import React from 'react'

function Employeesdetail() {
  return (
    <div className='h-[35rem] w-[50rem] ml-80 '>
      <h1 className='font-serif text-2xl font-bold ml-14'>Employee Detail</h1>
      <form action=""  className='space-y-3 p-6 ml-14 mt-7 shadow-xl shadow-green-300 hover:shadow-green-500 bg-slate-200 h-[28rem] w-[35rem] rounded-lg'>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Name</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Name' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Father Name</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Father Name' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Mobile Number</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter Mobile Number' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">CNIC</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter CNIC Number' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Address</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Enter Address Here' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Assign Duty and Assets</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Enter Duty and Assets' />
        </div>

        <div>
          <button onClick={(e) => {e.preventDefault() ; alert("Employee is Added")}} className='bg-green-400 text-lg font-serif py-3 px-6 rounded-lg'>Add Employee</button>
        </div>

      </form>
    </div>
  )
}

export default Employeesdetail
