import React from 'react'

function Bankmanagement() {
  return (
    <div className='ml-80'>
      <form action="">
        <div>
          <label htmlFor="">Add Bank</label>
          <input type="text" placeholder='Add Bank Here' />
        </div>
        <div>
          <label htmlFor="">List of Banks Account</label>
          <select name="" id="">
            <option value="JS Bank" />
            <option value="HBL" />
          </select>
        </div>
        <div>
          <label htmlFor="">Remain Amount</label>
          <input type="number" placeholder='Enter Remaining Amount' />
        </div>
        <div>
          <label htmlFor="">Amount Type</label>
          <input type="text" list='amounttype' placeholder='Enter Amount type' />
        </div>
        <div>
          <label htmlFor="">Total</label>
          <p>Total</p>
        </div>
        <datalist id='amounttype'>
          <option value="Credit" />
          <option value="Debit" />
        </datalist>
      </form>
    </div>
  )
}

export default Bankmanagement
