import React from 'react';
import styled from "styled-components";



const GotoTp = styled.section`
.GoTpBtn {
    position: fixed;
    bottom: 15%;
    right: 5%;
    z-index: 70;
    color: #1f1e67;
    font-size: 2.5rem;
    -webkit-animation: TopDownArrow infinite 1.2s ease-in-out;
    animation: TopDownArrow infinite 1.2s ease-in-out;
    cursor: pointer;
}
.GoTpBtn:hover{
  animation-play-state: paused;
}

@media screen and (max-width: 500px){
  .GoTpBtn{
    font-size: 9vw;
  }
}
@keyframes TopDownArrow{ 
  50%{
    bottom:19%;
   
  }
  100%{
    bottom:15%;
    
} 
}



`
function GotoTop() {

  function ScrollTop(e){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <GotoTp>
        
        <i class="fa-solid fa-arrow-up GoTpBtn" onClick={ScrollTop}></i>
        
      
    </GotoTp>
  )
}

export default GotoTop;
