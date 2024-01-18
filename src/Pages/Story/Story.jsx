import React from 'react'
import StoryViewer from '../../Components/StoryComponent/StoryViewer'

const Story = () => {
    const story=[
        {
            image:"https://cdn.pixabay.com/photo/2024/01/07/14/12/man-8493244_1280.jpg"
        },{
            image:"https://cdn.pixabay.com/photo/2023/06/10/14/48/giraffe-8054174_1280.jpg"
        },{
            image:"https://cdn.pixabay.com/photo/2023/12/09/10/09/woman-8438999_640.png"
        },{
            image:"https://cdn.pixabay.com/photo/2023/12/02/11/21/winter-8425500_640.jpg"
        },{
            image:"https://cdn.pixabay.com/photo/2023/12/07/22/24/cherry-blossoms-8436420_640.jpg"
        }
    ]
  return (
    <div>
        <StoryViewer stories={story}/>
    </div>
  )
}

export default Story