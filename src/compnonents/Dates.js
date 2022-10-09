import React from 'react'

export default function Dates({invoiceNumber,invoiceDate}) {
  return (
    <>
  <article className="my-5 flex items-end justify-end">
      <ul>
        <li className="py-1">
            <span className="font-bold">invoice number:</span>{invoiceNumber}
        </li>
        <li className="p-1 bg-gray-100">
            <span className="font-bold">invoice date:</span>{invoiceDate}
        </li>
      </ul>
    </article>

    </>
  )
}
