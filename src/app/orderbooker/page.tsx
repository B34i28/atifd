import React from 'react'
import Listoforderbooker from '../components/Listoforderbooker';

function Orderbooker() {
  return (
    <div  className='h-full w-[50rem] ml-80 '>
      <h1 className='font-serif text-2xl font-bold ml-14'>Order Booker</h1>
      <form action=""  className='space-y-3 p-6 ml-14 mt-7 shadow-xl shadow-green-300 hover:shadow-green-500 bg-slate-200 h-[28rem] w-[35rem] rounded-lg'>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Name of Order Booker</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Enter Name Here' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Father Name</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Enter Father Name' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Mobile Number</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter Mobile number' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">CNIC</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Enter CNIC number' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Area of Orders</label>
          <input className='py-2 rounded-md px-2' type="text" placeholder='Enter order Area' />
        </div>

        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="">Picture</label>
          <input className='py-2 rounded-md px-2' type="image" placeholder='image' />
        </div>


        <div>
          <button onClick={(e) => {e.preventDefault() ; alert("Order Booker is Added")}} className='bg-green-400 text-lg font-serif py-3 px-6 rounded-lg'>Add Order Booker</button>
        </div>
        

      </form>
      <Listoforderbooker />
    </div>
  )
}

export default Orderbooker
