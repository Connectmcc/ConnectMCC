import React from 'react'
import { IoThumbsUpSharp } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa6";
import './ReqUserPostCard.css'
const ReqUserPostCard = () => {
  return (
    <div className='p-2'>
        <div className='post w-64 h-60'>
            <img  className="cursor-pointer" src="https://cdn.pixabay.com/photo/2023/10/20/19/25/moon-8330104_1280.png" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <IoThumbsUpSharp></IoThumbsUpSharp><span>1</span>
                    </div>
                    <div>
                        <FaCommentDots></FaCommentDots><span>9</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard