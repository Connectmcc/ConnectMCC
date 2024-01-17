import { Button, Modal, ModalBody,ModalCloseButton,ModalContent,ModalHeader,ModalOverlay, SelectField } from "@chakra-ui/react"
import React,{useState} from 'react'
import { FaPhotoVideo} from 'react-icons/fa'


const CreatePostModal = ({
       onClose,isOpen
}) => {
  const[isDragOver,setIsDragOver]=useState(false);
  const[file,setFile]=useState();

       const handleDrop=(event)=>{
           event.preventDefault()
           const droppedFile=event.dataTransfer.file[0];
           if(droppedFile.type.startWith("image/")  ||  droppedFile.type.startWith("video/")  ) {
              setFile(droppedFile)
           }
       }


       const handleDragOver=(event)=>{
            event.preventDefault();
            event.dataTransfer.dropEffect="copy";
            setIsDragOver(true)
       }
       const handleDragLeave=()=>{
              setIsDragOver(false)
       }
       const handleOnChange=(e)=>{
           const file=e.target.file[0];
           if(file&& file.type.startWith("image/") ||file.type.startWith("video/")){
             setFile(file);
             
           }
           else {
                  setFile(null);
                  alert("please select an image or video")
           }
       }
  return (
    <div>
           <Modal size={"4*1"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div  className='flex justify-between py-1 px-10 items-center'>
            <p > Create New Post</p>
            <Button  className='' variant={"ghost"}   size="sm" colorScheme={'blue'}>
                 share
            </Button>
          </div>
          <hr />
          
          <ModalBody>
            <div>
              <div   className='w-[50%]'>
                  <div
                   onDrop={handleDrop}
                   onDragOver={handleDragOver}
                   onDragLeave={handleDragLeave}
                   className={"drag-drop h-full"}
                  >
                      <div>
                        <FaPhotoVideo className='text-3*1'/>
                        <p>Drag Photos or videos here</p>
                      </div>
                         <label htmlfor="file upload" className='custom file-upload'> select from computer </label>

                         <input type="file" id="file-upload" accept='image/*,video/*' onChange={handleOnChange} />
                  </div>
              </div>
            </div>
            
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  )
}
    
  

export default CreatePostModal