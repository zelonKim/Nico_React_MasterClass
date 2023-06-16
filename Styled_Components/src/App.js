/* function App() {
  return (
   <div style={{ display: "flex" }}>
      <div style={{backgroundColor:"teal", width: 100, height:100 }}> Hello </div>
      <div style={{backgroundColor:"tomato", width: 100, height:100 }}></div>
   </div>
  );
}
export default App; */

/////////////////////

/* import styled from "styled-components"

const Father = styled.div`
  display: "flex"
`

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`

const Circle = styled(Box)`
  border-radius: 50px;
`

function App() {
  return (
   <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
   </Father>
  );
}
export default App;  */


//////////////////////


/* import styled from "styled-components"

const Father = styled.div`
  display: "flex"
`

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px
`

function App() {
  return (
   <Father>
     <Btn>Log in</Btn>
     <Btn as="a">Log in</Btn>
   </Father>
  );
}
export default App;  */


//////////////////



/* import styled from "styled-components"

const Father = styled.div`
  display: "flex"
`

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px
`

const Input = styled.input`
  background-color: tomato
`;

function App() {
  return (
   <Father>
      <Input required/>
      <Input required/>
      <Input required/>
      <Input required/>
      <Input required/>
   </Father>
  );
}
export default App;  */





/* import styled from "styled-components"

const Father = styled.div`
  display: "flex"
`

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px
`

const Input = styled.input.attrs({ required: true })`
  background-color: tomato
`;

function App() {
  return (
   <Father>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
   </Father>
  );
}
export default App;  */

///////////////////

/* import styled ,{keyframes} from "styled-components"


const Wrapper = styled.div`
  display: flex;
`

const rotateAni = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`

const Emoji = styled.span`
  font-size: 50px;
`


const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAni} 1s linear infinite;
  ${Emoji} {
    &: hover{ 
      font-size: 100px;
    }
  }
`

function App(){
  return(
    <Wrapper>
      <Box >
        <Emoji>★</Emoji>
      </Box>
    </Wrapper>
  )
}
export default App; */


////////////////////


import styled from 'styled-components'

const Title = styled.h1`
  color: ${props => props.theme.textColor}
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgColor}
`

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  )
}
export default App;