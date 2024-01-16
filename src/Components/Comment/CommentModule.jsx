import React from 'react'
import { Modal,ModalBody,ModalCloseButton,ModalContent,ModalHeader,ModalOverlay } from '@chakra-ui/react'
import {BsThreeDots} from "react-icons/bs"
import { BsBookmark, BsBookmarksFill, BsEmojiSmile} from "react-icons/bs"
import CommentCard from './CommentCard'
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
import {RiSendPlaneLine} from "react-icons/ri"
import { FaRegComment } from "react-icons/fa6";
import "./CommentModule.css"
const CommentModule = ({onClose,isOpen, isSaved, isPostLiked,handlePostLike,handleSavePost}) => {
  return (
    <div>
<Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay  />
        <ModalContent>
       
          <ModalBody>
           <div className='flex h-[80vh] relative'> 
            <div className='w-[50%] flex flex-col justify-center'>
                <img className="max-h-full w-full" src='https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg' alt=""/>
            </div>
            <div className='w-[55%] pl-10'>
              <div className='flex justify-between items-center py-5'>
                <div className='flex items-center'>
    <div>
        <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/12/05/01/15/desert-8430551_1280.jpg" alt="" />
    </div>
    <div className='ml-2'>
        <p>username</p>

    </div>
</div>
<BsThreeDots/>

              </div>
<hr/>
<div className='comment'>
  {[1,1].map(()=><CommentCard/>)}
</div>

           <div className='absolute bottom-0 w-[50%]'>
<div className="flex justify-between items-center w-full py-4">
              <div className="flex items-center space-x-2">
                {isPostLiked?  <AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-green-700" onClick={handlePostLike}/>: <AiOutlineHeart className="text-2xl" onClick={handlePostLike}/> }
                <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />

                 <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer"/>
              </div>
              <div className="cursor-pointer">
                {isSaved? <BsBookmarksFill onClick={handleSavePost} className="text-xl hover:opacity-50 cursor-pointer" />:<BsBookmark onClick={handleSavePost} className="text-xl hover:opacity-50 cursor-pointer"/>}

              
              </div>
            </div>
           <div className="w-full py-3 ">
              <p>29 likes</p>
             <p className='opacity-50 text-sm'>2 days ago</p>
            </div>
            <div className="border rounded-2xl  border-t-gray-600 w-full">
              <div className="flex w-full items-center px-3">
              <BsEmojiSmile/>   
                <input className="w-[70%] commentInput bg-transparent" type="text" placeholder="Add a comment.."/>
              </div>
            </div>
           </div>
            </div>
           </div>
          </ModalBody>
          
        </ModalContent>
      </Modal>
        
    </div>
  )
}

export default CommentModule