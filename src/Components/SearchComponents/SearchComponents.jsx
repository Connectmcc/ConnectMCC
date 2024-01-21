import React from 'react'
import "./SearchComponents.css"
import SearchUserCard from './SearchUserCard'

const SearchComponents = () => {
  return (
    <div   className='SearchContainer'> 
        <div  className='px-3 pb-5'>
            <h1 className='text-xl pb-5'>Search</h1>
            <input className='search input' type="text" placeholder='search...'/>
        </div>

        <hr />
        <div className='px-3 pt-5'>
            {[1,1,1,1,1].map((item)=><SearchUserCard/>)}
        </div>
    </div>
  )
}

export default SearchComponents
