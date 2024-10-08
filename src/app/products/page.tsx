'use client'
import React, { useState } from 'react'
import ProductsData from '../components/ProductsData';
import { NewProduct } from '@/lib/drizzle';
import { useRouter } from 'next/navigation';

const Products =() => {
  const [typeofproduct,setTypeofproduct] = useState<NewProduct |null>(null)
  const [detailofproduct,setDetailofproduct] = useState<NewProduct|null>(null)
  const { refresh } = useRouter()
  const handleSubmit = async () => {
    try {
      if (typeofproduct && detailofproduct) {
        const res = await fetch('/api/products',{
          method: "POST",
          body: JSON.stringify({
            typeofproduct:typeofproduct.typeofproduct,
            detailofproduct:detailofproduct.detailofproduct
          })
        })
        refresh()
      }
    } catch(error){
      console.log("error");
      
    }
  }
  return (
    <div className='w-[50rem] h-full ml-80'>
      <h1 className='font-serif text-2xl font-bold ml-14'>Products</h1>
      <form className='grid border shadow-xl shadow-green-300 hover:shadow-green-500 ml-14 p-3 mt-7 bg-slate-200 w-96 space-y-3 rounded-lg  ' action="">
        <div className='grid'>
          <label className='text-lg font-serif' htmlFor="typeProduct">Types of Product</label>
          <input onChange={(e) =>setTypeofproduct({typeofproduct:e.target.value})} className='border-2 mt-1 py-2 rounded-md border-black' autoFocus list='typeofproduct' type="text" name='typeProduct' />
        </div>
        <div className='grid'>
          <label className='text-lg font-serif' htmlFor="detailProduct" >Detail of Product</label>
          <input onChange={(e) =>setDetailofproduct({detailofproduct:e.target.value})} className='border-2 mt-1 py-2 rounded-md border-black' list='detailofproduct' type="text" name='detailProduct' />
        </div>
        <div className='justify-end flex'>
          <button onClick={handleSubmit} className='bg-green-400 py-3 px-6 rounded-lg'>Add Product</button>
        </div>

        {/* list of types of product */}
        <datalist id='typeofproduct'>
          <option value="Water" />
          <option value="Food" />
        </datalist>

        {/* list of detail of product */}
        <datalist id='detailofproduct'>
          <option value="1.5 ml" />
          <option value="500 MR" />
          <option value="19 ml" />

        </datalist>
      </form>
      <ProductsData />
      {/* {
        result.data.map((item,index)=>(
          <div key={index}>
              <p>{item.detailofproduct}</p>
          </div>
        ))
      } */}

    </div>
  )
}

export default Products