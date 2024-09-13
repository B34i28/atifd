import { NotebookTabs, Pencil, Trash2 } from 'lucide-react'
import React from 'react'

function Listofcustomer() {
  return (
    <div className='mt-16 ml-14 pb-20'>
      <h1 className='font-bold text-3xl font-serif'>List of Customer</h1>
      <table className='mt-6 border-collapse border-2 border-gray-500 w-[45rem] h-[6rem] overflow-scroll table-auto'>
        <thead className='h-12'>
            <tr className='bg-slate-300'>
                <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Customer</th>
                <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Total Products</th>
                <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Edit </th>
                <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>Delete </th>
                <th className='text-start border-2 border-gray-500 font-serif text-xl pl-2'>See Detail</th>
            </tr>
        </thead>
        <tbody className=''>
            <tr >
                <td className='font-serif text-lg border-2 border-gray-500 pl-2'>Cutomer 1</td>
                <td className=' text-lg border-2 border-gray-500 pl-2'>100</td>
                <td className='border-2 border-gray-500 w-28 pl-10 cursor-pointer'><Pencil /></td>
                <td className='border-2 border-gray-500 w-28 pl-10 cursor-pointer'><Trash2 /></td>
                <td className='border-2 border-gray-500 w-32 pl-10 cursor-pointer'><NotebookTabs /></td>

            </tr> 
        </tbody>
      </table>
      <div className='mt-6 flex space-x-10 items-center'>
        <h1 className='font-serif text-2xl font-bold'>Total Balance</h1>
        <p className='text-2xl  font-bold bg-green-300 rounded-lg px-10 py-2'>100</p>
      </div>
    </div>
  )
}

export default Listofcustomer
