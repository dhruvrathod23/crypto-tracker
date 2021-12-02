import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <Cont>
           <p>
         <Weak>  Crypto-Price-tracker developed by <a href="http://dhruvrathod.tech/">Dhruv Rathod</a></Weak> </p>
         </Cont>
    )
}

export default Footer


const Strong=styled.div`
 color:blue;
 display:flex;
 
 justify-content: center;
  

`
const Cont = styled.div`
justify-content: center;
`

const Weak = styled.div`

   

    font-size: 25px;
    position: fixed;
    color: #1bff00;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: steelblue;
    color: white;
    text-align: center;
}

a{
    background-color: steelblue;
}

`