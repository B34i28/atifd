import Link from 'next/link';
import React, { useState } from 'react'

type NavigationItemType = {
  name: string;
  href: string;
};

function Sidebar({ onLinkClick }:any) {



  return (
    <div className='w-1/4 h-[42.9rem] left-0 overflow-y-auto fixed'>
      {
        NavigationItem.map((item,index)=>(
          
            <Link onClick={(e) =>{ e.preventDefault(); onLinkClick(item.name)}} href={item.href} key={index} className='md:text-xl sm:text-sm cursor-pointer font-serif text-gray-200 grid pl-4 py-2 items-center hover:text-gray-800 hover:bg-green-400  bg-gray-900'>
                {item.name}
            </Link>
        ))
      }

    </div>
  )
}

export default Sidebar

const NavigationItem : NavigationItemType[] = [
  {
    name:"Dashboard",
    href:"/"
  },
  {
    name:"Products",
    href:"/products"
  },
  {
    name:"Stock",
    href:"/stocks"
  },
  {
    name:"Admin",
    href:"/admin"
  },
  {
    name:"Supplier Khatta",
    href:"/supplierkhatta"
  },
  {
    name:"Customer Khatta",
    href:"/customerkhatta"
  },
  {
    name:"Orders",
    href:"/orders"
  },
  {
    name:"Order Booker",
    href:"/orderbooker"
  },
  {
    name:"Order Delivery",
    href:"/orderdelivery"
  },
  {
    name:"BILL Recovery",
    href:"/biurecovery"
  },
  {
    name:"Expenses",
    href:"/expenses"
  },
  {
    name:"Bank Management",
    href:"/bankmanagement"
  },
  {
    name:"Cash Management",
    href:"/cashmanagement"
  },
  {
    name:"Complaint",
    href:"/complaint"
  },
  {
    name:"Employees Detail",
    href:"/employeedetail"
  },
  {
    name:"Assets",
    href:"/assets"
  },
  {
    name:"Profit",
    href:"/profit"
  },
  {
    name:"Refill 19 Liter",
    href:"/refill19liter"
  },
  {
    name:"LogOut",
    href:"/refill19liter"
  }
]
