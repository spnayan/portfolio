import React from 'react'
import { navbarList } from '../constants/navbarList'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-800 px-5 sticky top-0 left-0 right-0'>
      <h1 className='text-white'>Sudeep</h1>
      <ul className='flex text-white'>
        {navbarList.map(list => (
          <li
            key={list.id}
            className='inline-block py-3 px-2 hover:text-blue-500 cursor-pointer'
          >
            {list.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
