import React, { useState } from "react";
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
import {RiSendPlaneLine} from "react-icons/ri"
import { BsBookmark, BsEmojiSmile, BsThreeDots } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa6";
import { BsBookmarksFill } from "react-icons/bs";
import "./PostCard.css";  
import CommentModule from "../Comment/CommentModule";
const PostCard = () => {
    const [showDropDown,setshowDropDown]=useState(false);
    const [isPostLiked,setIsPostLiked]=useState(false);
    const [isSaved,setIsSaved]=useState(false);

    const handleSavePost=()=>{
      setIsSaved(!isSaved);
    }
    const handlePostLike=()=>{
      setIsPostLiked(!isPostLiked);
    }
    const handleClick=()=>{
setshowDropDown(!showDropDown);
    }

  return (
    <div className="py-4" >
          <div className="border rounded-md w-full">
            <div  className="flex justify-between items-center w-full py-4 px-5">
                <div className="flex items-center">
                    <img 
                     className='h-12 w-12 rounded-full'
                     src ="https://cdn.pixabay.com/photo/2023/11/30/07/04/shetland-sheepdog-8420917_1280.jpg"
                    alt=" "
                    />
                    <div className="pl-2">
                        <p className="font-semibold text-sm ">username</p>
                        <p className="font-thin text-sm"> location</p>
                    </div>
                </div>

                <div className="dropdown">
                  <BsThreeDots  onClick={handleClick}/>
                     <div   className="dropdown-content">
                     {showDropDown &&  <p className=" bg-black text-white py-S1 px-4 rounded-md cursor-pointer" >Delete</p>}
                     </div>
                </div>
            </div>
            
            <div className="w-full">
                <img  className ="w-full" src=" https://cdn.pixabay.com/photo/2023/12/25/10/27/dog-8468288_1280.jpg" alt=" "/>
            </div>

            <div className="flex justify-between items-center w-full px-5 py-4">
              <div className="flex items-center space-x-2">
                {isPostLiked?  <AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-green-700" onClick={handlePostLike}/>: <AiOutlineHeart className="text-2xl" onClick={handlePostLike}/> }
                <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />

                 <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer"/>
              </div>
              <div className="cursor-pointer">
                {isSaved? <BsBookmarksFill onClick={handleSavePost} className="text-xl hover:opacity-50 cursor-pointer" />:<BsBookmark onClick={handleSavePost} className="text-xl hover:opacity-50 cursor-pointer"/>}

              
              </div>
            </div>
            <div className="w-full py-2 px-5">
              <p>9 likes</p>
              <p className="opacity-50 py-2 cursor-pointer">view all 8 comments</p>
            </div>
            <div className="border  border-t-gray-600 w-full">
              <div className="flex w-full items-center px-5">
              <BsEmojiSmile/>   
                <input className="commentInput bg-transparent" type="text" placeholder="Add a comment.."/>
              </div>
            </div>
        </div>
        <CommentModule/>
    </div>
  );
};

export default PostCard;