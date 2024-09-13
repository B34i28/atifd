import React from 'react'
import Listofstocks from '../components/Listofstocks';

function Stocks() {
  return (
    <div className='h-[35rem] w-[50rem] ml-80 '>
      <h1 className='font-serif text-3xl font-bold ml-14'>Stocks</h1>
      <form className='space-y-3 p-6 ml-14 mt-7 shadow-xl shadow-green-300 hover:shadow-green-500 bg-slate-200 h-[28rem] w-[35rem] rounded-lg' action="">
        <div className='flex justify-between items-center'>
          <label className='font-serif text-lg' htmlFor="stocks">Choose a product: </label>
          <select className='py-3 px-2 w-[14.5rem] rounded-md' autoFocus id="stocks" name="stocks">
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
            <option value="product4">Product 4</option>
          </select>
        </div>

        <div className='bg-slate-200 flex justify-between'>
          <label className='font-serif text-lg' htmlFor="">Supllier</label>
          <select className='w-[14.4rem] py-3 px-2 rounded-md' name="" id="">
            <option value="supplier1">Bottle</option>
            <option value="supplier1">Bottle 2</option>
            <option value="supplier1">Bottle 3</option>
            <option value="supplier1">Bottle 4</option>
          </select>
        </div>

        <div className=' flex justify-between'>
          <label className='font-serif text-lg' htmlFor="">Quantity of Products</label>
          <input className='py-2 rounded-md px-2' type="number" placeholder='Numbers of items' />

        </div>

        <div className=' flex  justify-between'>
          <label className='font-serif text-lg' htmlFor="">Price of Total Products</label>
          <p className='text-lg'>price x total product</p>
        </div>

        <div className='space-y-3'>
          <div className='flex justify-between'>
            <label className='text-lg font-serif' htmlFor="">Expenses</label>
            <input className='py-2 px-2 w-56 rounded-md' type="text" placeholder='Enter details of expenses' />
          </div>
          <div className='flex justify-between'>
            <label className='text-lg font-serif' htmlFor="">Expenses</label>
            <input className='py-2 px-2 w-56 rounded-md' type="text" placeholder='Enter details of expenses' />
          </div>
          <div className='flex justify-between'>
            <label className='text-lg font-serif' htmlFor="">Expenses</label>
            <input className='py-2 px-2 w-56 rounded-md' type="text" placeholder='Enter details of expenses' />
          </div>
        </div>

        <div className='flex '>
          <button onClick={(e) => {e.preventDefault() ; alert("Stocks are Added")}} className='bg-green-400 text-lg font-serif py-3 px-6 rounded-lg'>Add Stock</button>
        </div>
      </form>
      <Listofstocks />
    </div>
  )
}

export default Stocks
