import React from 'react'
import { Modal,ModalBody,ModalCloseButton,ModalContent,ModalHeader,ModalOverlay } from '@chakra-ui/react'
import {BsThreeDots} from "react-icons/bs"
import CommentCard from './CommentCard'
const CommentModule = ({onClose,isOpen}) => {
  return (
    <div>
<Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay  />
        <ModalContent>
       
          <ModalBody>
           <div className='flex h-[75vh]'> 
            <div className='w-[45%] flex flex-col justify-center'>
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
<div>
  {[1,1,1,1,].map(()=><CommentCard/>)}
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