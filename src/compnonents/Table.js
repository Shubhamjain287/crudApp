import React from 'react'

export default function Table({itemName,quantity,price,amount}) {
  return (
    <>
    
    <table width="100%" >
    <thead>
        <tr className='bg-gray-100 p-1'>
            <td className='font-bold'>Item Name</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Total Amount</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{itemName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount}</td>

        </tr>
    </tbody>
       
    </table>
    </>
  )
}
