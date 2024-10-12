import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className= 'bg-red-800 h-12'>
    <div className='text-yellow-400 flex justify-between items-center'>
        <h1 className='text max-xl: m-2 cursor-pointer'>Navbar</h1>

            <ul className='flex gap-3 mr-4 cursor-pointer'>   
    <Link className='hover:text-blue-600' href= ".Home/">Home</Link> 
    <Link className='hover:text-red-600' href= ".about/">About</Link>
    <Link className='hover:text-red-950' href= ".contact/">Contact</Link>
    <Link className='hover:text-lime-600'href= ".services/">Services</Link>
        
   </ul>
   </div>
  </div> 

  )
}

export default Navbar 
