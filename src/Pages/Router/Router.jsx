import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'
const Router = () => {
  return (
    <div>

      <div className="flex">
        <div className="w-[20%] border border-neutral-500 ">
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Router