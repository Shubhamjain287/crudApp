import React from 'react'

export default function Header({handlePrint}) {
  return (
    <>
 <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
      <div>
      <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">CRUD_APP</h1>
      </div>
      <div>
        <ul className="flex item -center justify-between flex-wrap">
          <li><button onClick={handlePrint}>print</button></li>
          <li>
            <button>Download</button>
          </li>
          <li>
            <button>send</button>
          </li>
        </ul>
      </div>
    </header>
    </>
  )
}
