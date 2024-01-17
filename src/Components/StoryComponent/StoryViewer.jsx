import styled from 'styled-components'
import React from 'react'
const StoryViewerContainer=styled.div`
dispalay:flex;
justify-content:center;
align-items:center;
height:100vh;
bg-color:black;
`
const StoryImage=styled.img`
max-height:90vh;
object-fit:contain;
`
const StoryViewer = ({stories}) => {
    const [currentStoryIndex, setCurrentStoryIndex]=useState(0);
    const [activeIndex, setActiveIndex]=useState(0);

    const handleNextStory=()=>{
        if(currentStoryIndex<stories.length-1){
            setCurrentStoryIndex(currentStoryIndex+1)
            setActiveIndex(activeIndex);
        }
        else if(currentStoryIndex===stories.length-1){
            setCurrentStoryIndex(0);
            setActiveIndex(0);

        }
    }
  return (
    <div>
       <StoryViewerContainer>
        <StoryImage src={stories?.[currentStoryIndex].image}/>
       </StoryViewerContainer>
    </div>
  )
}

export default StoryViewer