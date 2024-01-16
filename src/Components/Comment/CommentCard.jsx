import React, { useState } from 'react'
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai" ;
const CommentCard = () => {
    const [isCommentLike,setIsCommentlike]=useState();

    const handleLikedComment=()=>{
        setIsCommentlike(isCommentLike)
    }
  return (
    <div>
      <div  className="flex items-center justify-between py-5">
    <div className='flex items-center'>
        <div >
            <img
             className="w-9 h-9 rounded-full"
              src="https://cdn.pixabay.com/photo/2023/12/05/01/15/desert-8430551_1280.jpg"
               alt=""
                />
        </div>
        <div className='ml-3'>
            <p>
                <span className='font-semibold'>username</span>
            <span className='ml-2'>lovely! post man!</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60 pt-2 ">
                <span>2 min ago</span>
                <span> 23 likes</span>
            </div>

        </div>
    </div>

{isCommentLike ? (
<AiFillHeart onClick={handleLikedComment}className=" text-xs hover:opacity-50 cursor-pointer text-red-600 "/>
) : (
<AiOutlineHeart nClick={handleLikedComment} className=" text-xs hover:opacity-50 cursor-pointer"/>
)}
</div>

    </div>
  )
}

export default CommentCard