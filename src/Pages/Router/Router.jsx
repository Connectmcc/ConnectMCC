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
        <div  className="w-full">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/username" element={<profile />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Router