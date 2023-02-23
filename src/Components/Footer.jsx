import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    display:flex;
    position: relative;
    justify-content:center;
    align-items: center;
    height:5rem;
    width:100%;
    background-color:#000000ad;
    bottom:0px
    bottom: 0px;
    margin-top:20px;
    

`

function Footer(){
    return(
        <Container>

            {/* <span>This is footer</span> */}
            <p>This is website is under Copyright © 2022</p>

        </Container>

        
        
    )
}

export default Footer