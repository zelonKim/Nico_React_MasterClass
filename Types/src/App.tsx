/* import React from 'react';
import Circle from './Circle';
import Styled from "styled-components"

function App() {
  return(
    <div>
      <Circle borderColor="white" bgColor="teal"/>
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App; */


/////////////////////


/* import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("")
  
  const onChange = (event: React.FormEvent<HTMLInputElement>) => { 
    const {currentTarget: {value}} = event;
    setValue(value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("hello", value) // 인풋창에 seongjin을 입력하고 Log in버튼을 누르면 콘솔창에 hello seongjin이 출력됨.
  }

  return (<div>
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange} 
        type="text" 
        placeholder="username"
         />
      <button> Log in </button>
    </form>
  </div>
  )
}
export default App;     */


import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.bgColor}
`
const H1 = styled.h1`
  color: ${props => props.theme.textColor}  
`

function App() {
  return (
   <Container>
     <H1>Protected</H1>
   </Container>
  )
}
export default App

