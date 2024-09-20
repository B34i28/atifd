import { NewAddorder } from '@/lib/drizzle'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import ReactToPrint from 'react-to-print';
import PrintData from './PrintData';

function Addorder() {
    const componentRef = useRef<HTMLDivElement>(null); // print

    const [name,setName] = useState<NewAddorder |null>(null)
    const [number,setNumber] = useState<NewAddorder|null>(null)
    const [cnic,setCnic] = useState<NewAddorder|null>(null)
    const [address,setAddress] = useState<NewAddorder|null>(null)
    const [quantityofitem,setQuantityofitem] = useState<NewAddorder|null>(null)
    const [totalprice,setTotalprice] = useState<NewAddorder|null>(null)

    const { refresh } = useRouter()
    const handleSubmit = async () => {
      try {
        if (name && number && cnic && address && quantityofitem && totalprice) {
          const res = await fetch('https://atifd.vercel.app/api/addorders',{
            method: "POST",
            body: JSON.stringify({
                name:name.name,
                number:number.number,
                cnic:cnic.cnic,
                address:address.address,
                quantityofitem:quantityofitem.quantityofitem,
                totalprice:totalprice.totalprice
            })
          })
          refresh()
        }
      } catch(error){
        console.log("error");
        
      }
    }
  return (
    <div >
        <h1 className='font-serif text-3xl font-bold ml-14'>Add Order</h1>
        <form action="" className='space-y-3 p-6 ml-14 mt-7 shadow-xl shadow-green-300 hover:shadow-green-500 bg-slate-200 h-[28rem] w-[35rem] rounded-lg'>
            <div className='flex justify-between items-center'>
                <label className='font-serif text-lg' htmlFor="">Name of ShopKeeper</label>
                <input onChange={(e) =>setName({name:e.target.value})} className='py-2 rounded-md px-2' type="text" placeholder='Enter Name of ShopKeeper' />
            </div>
            <div className='flex justify-between items-center'>
                <label className='font-serif text-lg' htmlFor="">Mobile Number</label>
                <input onChange={(e) =>setNumber({number:e.target.value})} className='py-2 rounded-md px-2' type="number" placeholder='Enter Mobile Number' />
            </div>
            <div className='flex justify-between items-center'>
                <label className='font-serif text-lg' htmlFor="">CNIC</label>
                <input onChange={(e) =>setCnic({cnic:e.target.value})} className='py-2 rounded-md px-2' type="number" placeholder='Enter CNIC' />
            </div>
            <div className='flex justify-between items-center'>
                <label className='font-serif text-lg' htmlFor="">Adrress</label>
                <input onChange={(e) =>setAddress({address:e.target.value})} className='py-2 rounded-md px-2' type="text" placeholder='Enter Address Here' />
            </div>
            <div className='flex justify-between items-center'>
                <label className='font-serif text-lg' htmlFor="">Quantity of Item</label>
                <input onChange={(e) =>setQuantityofitem({quantityofitem:e.target.value})} className='py-2 rounded-md px-2' type="number" placeholder='Enter Quantity' />
            </div>
            <div className='flex justify-between items-center'>
                <label className='font-serif text-lg' htmlFor="">Quantity of Item x Rate of Item</label>
                <input onChange={(e) =>setTotalprice({totalprice:e.target.value})} className='py-2 rounded-md px-2' type="number" placeholder='Enter Total Price' />
            </div>
            <div>
                <button onClick={handleSubmit} className='bg-green-400 text-lg font-serif py-3 flex justify-center items-center px-6 rounded-lg'>Add</button>
            </div>
        </form>
        <ReactToPrint
        trigger={() => (
          <button className="py-3 px-6 bg-green-400 text-lg rounded-lg ml-[3.5rem] mt-12 ">
            Print Order
          </button>
        )}
        content={() => componentRef.current}
        pageStyle={`
          @page { size: auto; margin: 20mm; }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
            }
          }
        `}
        />
        <div  ref={componentRef}>
            <PrintData />
        </div>
    </div>
  )
}

export default Addorder
