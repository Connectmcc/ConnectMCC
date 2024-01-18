import styled from 'styled-components'
import React, { useEffect,useState} from 'react'
import ProgressBar from './ProgressBar'
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
            setActiveIndex(activeIndex+1);
        }
        else if(currentStoryIndex===stories.length-1){
            setCurrentStoryIndex(0);
            setActiveIndex(0);

        }
    }
    useEffect(()=>{
       
const interval=setInterval(()=>{handleNextStory()},4000)
return ()=>clearInterval(interval);
    },[currentStoryIndex])

  return (
    <div>
       <StoryViewerContainer>
        <StoryImage src={stories?.[currentStoryIndex].image}/>

      <div>
        {stories.map((item,index)=><ProgressBar key={index} duration={4000} index={index} activeIndex={activeIndex}/>)}
      </div>

       </StoryViewerContainer>
    </div>
  )
}

export default StoryViewer