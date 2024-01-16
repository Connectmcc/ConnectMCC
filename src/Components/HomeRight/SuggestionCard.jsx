import React from 'react'

const SuggestionCard = () => {
  return (

    <div className='flex justify-between items-center hover:bg-emerald-100 p-2 rounded-lg '>
        <div className='flex items-center '>
            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg" alt="" />
        
        <div className='ml-2'> 
            <p className='text-sm font-semibold'>username</p>
            <p className='text-sm font-semibold opacity-80 text-emerald-600'>Follows you</p>
        </div>
        </div>
        <p className='text-emerald-600 hover:bg-emerald-600 hover:text-white text-sm font-semibold border-solid border border-emerald-600 rounded-lg p-2'>Follow</p>

    </div>
  )
}

export default SuggestionCard