import React from 'react'

function Header() {
  return (
    <header className="flex h-12 mt-0"> 
     <div className="w-1/5"></div>
        <div className="w-3/5 max-w-sm 
        mx-auto flex items-center space-x-4 mb-4">
        <h1 className='font-2xl font-bold tracking-wide'>
        Welcome! <br></br> 
        Machine Tracking System
        </h1>
        </div>
        <div className="w-1/5">
        </div>
     </header>
  )
}

export default Header