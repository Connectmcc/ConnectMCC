import React from 'react'

const CommentCard = () => {
  return (
    <div>
<div>
    <div>
        <div className='flex items-center'>
            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/12/05/01/15/desert-8430551_1280.jpg" alt="" />
        </div>
        <div className='ml-3'>
            <p><span className='font-semibold'>username</span>
            <span className='ml-2'>lovely! post man!</span>
            </p>
            <div className='flex items-center space-x-3 '>
                <span>2 min ago</span>
                <span> 23 likes</span>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default CommentCard