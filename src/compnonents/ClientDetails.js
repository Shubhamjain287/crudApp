import React from 'react'

export default function ClientDetails({customerName}) {
  return (
    <>
 <section className="mt-5">
      <h2 className="text-xl uppercase">{customerName}</h2>
      <p>Customer Address</p>
    </section>
    </>
  )
}
