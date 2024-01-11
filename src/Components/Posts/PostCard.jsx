import React, { useState } from "react";
import {AiFillAlert,AiOutlineHeart} from "react-icons/ai"
import {RiSendPlaneLine} from "react-icons/ri"
import { BsBookmark, BsThreeDots } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa6";
import { BsBookmarksFill } from "react-icons/bs";
const PostCard = () => {
    const [showDropDown,setshowDropDown]=useState(false);
    const [isPostLiked,setIsPostLiked]=useState(false);
    const [isSaved,setIsSaved]=useState(false);

    const handleSavePost=()=>{
      
    }
    const handlePostLike=()=>{
      setIsPostLiked(!isPostLiked);
    }
    const handleClick=()=>{
setshowDropDown(!showDropDown);
    }

  return (
    <div>
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

            <div>
              <div>
                {isPostLiked?  <AiFillAlert className="text-xl hover:opacity-50 cursor-pointer" onClick={handlePostLike}/>: <AiOutlineHeart onClick={handlePostLike}/> }
                <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />

                 <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer"/>
              </div>
              <div>
              <BsBookmarksFill />
              <BsBookmark/>
              </div>
            </div>
        </div>
    </div>
  );
};

export default PostCard;