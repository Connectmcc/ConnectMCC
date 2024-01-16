import React from 'react'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
  return (
    <div className=''>
     <div>
      <div className='flex justify-between items-center '>
        <div className='flex items-center'>
          <div>
            <img className="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2017/06/24/02/56/art-2436545_1280.jpg" alt="" />
          </div>
          <div className='ml-3'>
            <p>Fullname</p>
            <p className='opacity-70'>username</p>
          </div>
        </div>
        <div>
          <p className='text-emerald-700 font-semibold'>
            switch 
          </p>
        </div>
      </div>
        <div className='space-y-5 mt-10'>
          {[1,1,1,1,1].map((item)=><SuggestionCard/>)}
        </div>
     </div>
    </div>
  )
}

export default HomeRight