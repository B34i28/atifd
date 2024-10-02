import React from 'react'
import Printorder from '../components/Printorder'
import PrintData from '../components/PrintData'
import { NotebookTabs } from 'lucide-react'

function Orderdelivery() {
  return (
    <div className='ml-80 h-full'>
      <h1 className='font-serif text-3xl font-bold '>List of Orders Assigned</h1>
      <table className='mt-6 border-collapse border-2 border-gray-500 w-[45rem] h-[6rem] overflow-scroll table-auto'>
        <thead className='h-12'>
            <tr className='bg-slate-300'>
                <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Orders</th>
                <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>See Detail</th>
            </tr>
        </thead>
        <tbody className=''>
            <tr >
                <td className='font-serif text-lg border-2 border-gray-500 pl-2'>Order 1</td>
                <td className='border-2 border-gray-500 w-32 pl-10 cursor-pointer'><NotebookTabs /></td>

            </tr> 
        </tbody>
      </table>
      {/* List of orders to delivery boy */}
      <div>
        <h1 className='font-bold text-3xl font-serif'>List of Orders</h1>
        <table className='mt-6 border-collapse border-2 border-gray-500 w-[52rem] h-[6rem] overflow-scroll table-auto'>
          <thead className='h-12'>
              <tr className='bg-slate-300'>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Orders</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Total Products</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Liter</th>
              </tr>
          </thead>
          <tbody className=''>
            <tr >
                <td className='font-serif text-lg border-2 border-gray-500 pl-2'>Order 1</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>100</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>500 ml</td>

            </tr> 
          </tbody>
        </table>
        <div className='mt-6 flex space-x-10 items-center'>
          <h1 className='font-serif text-2xl font-bold'>Total Orders</h1>
          <p className='text-2xl  font-bold bg-green-300 rounded-lg px-10 py-2'>100</p>
        </div>
      </div>
      {/* List of Paid orders */}
      <div>
        <h1 className='font-bold text-3xl font-serif'>List of Paid Orders</h1>
        <table className='mt-6 border-collapse border-2 border-gray-500 w-[52rem] h-[6rem] overflow-scroll table-auto'>
          <thead className='h-12'>
              <tr className='bg-slate-300'>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Orders</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Total Products</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Liter</th>
              </tr>
          </thead>
          <tbody className=''>
            <tr >
                <td className='font-serif text-lg border-2 border-gray-500 pl-2'>Order 1</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>100</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>500 ml</td>

            </tr> 
          </tbody>
        </table>
        <div className='mt-6 flex space-x-10 items-center'>
          <h1 className='font-serif text-2xl font-bold'>Total Orders</h1>
          <p className='text-2xl  font-bold bg-green-300 rounded-lg px-10 py-2'>100</p>
        </div>
      </div>
      {/* List of Unpaid orders */}
      <div>
        <h1 className='font-bold text-3xl font-serif'>List of Unpaid Orders</h1>
        <table className='mt-6 border-collapse border-2 border-gray-500 w-[52rem] h-[6rem] overflow-scroll table-auto'>
          <thead className='h-12'>
              <tr className='bg-slate-300'>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Orders</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Total Products</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Liter</th>
              </tr>
          </thead>
          <tbody className=''>
            <tr >
                <td className='font-serif text-lg border-2 border-gray-500 pl-2'>Order 1</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>100</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>500 ml</td>

            </tr> 
          </tbody>
        </table>
        <div className='mt-6 flex space-x-10 items-center'>
          <h1 className='font-serif text-2xl font-bold'>Total Orders</h1>
          <p className='text-2xl  font-bold bg-green-300 rounded-lg px-10 py-2'>100</p>
        </div>
      </div>
      {/* List of Cancel orders */}
      <div>
        <h1 className='font-bold text-3xl font-serif'>List of Cancel Orders</h1>
        <table className='mt-6 border-collapse border-2 border-gray-500 w-[52rem] h-[6rem] overflow-scroll table-auto'>
          <thead className='h-12'>
              <tr className='bg-slate-300'>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Orders</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Total Products</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Liter</th>
              </tr>
          </thead>
          <tbody className=''>
            <tr >
                <td className='font-serif text-lg border-2 border-gray-500 pl-2'>Order 1</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>100</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>500 ml</td>

            </tr> 
          </tbody>
        </table>
        <div className='mt-6 flex space-x-10 items-center'>
          <h1 className='font-serif text-2xl font-bold'>Total Orders</h1>
          <p className='text-2xl  font-bold bg-green-300 rounded-lg px-10 py-2'>100</p>
        </div>
      </div>
      {/* List of Partial orders */}
      <div>
        <h1 className='font-bold text-3xl font-serif'>List of Partial Orders</h1>
        <table className='mt-6 border-collapse border-2 border-gray-500 w-[52rem] h-[6rem] overflow-scroll table-auto'>
          <thead className='h-12'>
              <tr className='bg-slate-300'>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Orders</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Total Products</th>
                  <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Liter</th>
              </tr>
          </thead>
          <tbody className=''>
            <tr >
                <td className='font-serif text-lg border-2 border-gray-500 pl-2'>Order 1</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>100</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>500 ml</td>

            </tr> 
          </tbody>
        </table>
        <div className='mt-6 flex space-x-10 items-center'>
          <h1 className='font-serif text-2xl font-bold'>Total Orders</h1>
          <p className='text-2xl  font-bold bg-green-300 rounded-lg px-10 py-2'>100</p>
        </div>
      </div>
    </div>
  )
}

export default Orderdelivery
