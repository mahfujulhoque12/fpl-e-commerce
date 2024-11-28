import { Input } from '@/components/atoms/Input'
import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className='bg-white rounded-md flex gap-3 items-center justify-center shadow-sm px-4 py-2 w-full'>
      <Input className='bg-white text-black border-none
      focus-visible:ring-0
      shadow-none
       '
       placeholder='Search Products'
       />
      <FaSearch className='text-black'/>

    </div>
  )
}

export default SearchBox