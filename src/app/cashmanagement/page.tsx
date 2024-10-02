import React from 'react'

function Cashmanagement() {
  return (
    <div className='h-[40rem] w-[50rem] ml-80 overflow-y-auto'>
      <h1 className='font-serif text-3xl font-bold ml-14'>Cash Management</h1>
      <form action="" className='space-y-3 p-6 ml-14 mt-7 shadow-xl shadow-green-300 hover:shadow-green-500 bg-slate-200 h-[22rem] w-[35rem] rounded-lg'>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg'  htmlFor="">Amount Recived from Customer</label>
          <input className='py-2 rounded-md px-2'  type="number" placeholder='Enter Amount' />
        </div>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg'  htmlFor="">Amount Type</label>
          <input className='py-2 rounded-md px-2'  type="text" list='amounttype' placeholder='Enter Amount type' />
        </div>
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg'  htmlFor="">Total</label>
          <p className='bg-white px-4 py-2 rounded-lg' >Total</p>
        </div>
        <datalist id='amounttype'>
          <option value="Credit" />
          <option value="Debit" />
        </datalist>
      </form>
    </div>
  )
}

export default Cashmanagement
