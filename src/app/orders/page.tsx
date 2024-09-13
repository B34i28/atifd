import React from 'react'
import Listoforders from '../components/Listoforders'
import Listofpaidorders from '../components/Listofpaidorders'
import Listofunpaidorders from '../components/Listofunpaidorders'
import Listofpartialpaidorders from '../components/Listofpartialpaidorders'
import Listofpendingorders from '../components/Listofpendingorders'

function Orders() {
  return (
    <div className='ml-80'>
      <Listoforders />
      <Listofpaidorders />
      <Listofunpaidorders />
      <Listofpartialpaidorders />
      <Listofpendingorders />
    </div>
  )
}

export default Orders
