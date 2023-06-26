import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './Router';
import { darkTheme, lightTheme } from './theme';
import React, {useState} from 'react'
import { isDarkAtom } from './routes/atoms';
import ToDoList from './components/ToDoList';
import {useRecoilState, useRecoilValue} from 'recoil'
import { hourSelector, minuteState } from './components/atoms';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box
}
body {
  font-family: 'Source Sans 3', sans-serif;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
}
a {
  text-decoration: none;
  color: inherit;
}
`


/* 
function App() {
  const [isDark, setIsDark] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleDark = () => setIsDark(current => !current) // useState의 세터함수에 콜백함수를 넣어줄 경우, 첫번째 매개변수는 '현재 state값'을 가짐.

  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router isDark={isDark} toggleDark={toggleDark} />
    </ThemeProvider>
    </>
  )
}
export default App; 
*/


///////////////////////


/* function App() {
  const isDark = useRecoilValue(isDarkAtom) 
  console.log(isDark) // false

  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
    </>
  )
}
export default App;  */


/* 
function App() {
  return (
    <>
      <ToDoList />
    </>
  )
}
export default App */


///////////////

/* function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState) // [atom의 상태값, atom의 상태 업데이트 함수]
  const [hours, setHours] = useRecoilState(hourSelector); // [get메서드의 리턴값, set메서드에 새로운 값을 전달하는 함수]
  
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value) // atom의 상태값을 업데이트함.
  }

  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value) // set메서드의 두 번째 매개변수로 값이 전달됨.
  }

  return (
    <div>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" /> 
      <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours" />
    </div>
  )
}
export default App;  */


/////////////////////


function App() {
  const onDragEnd = () => {} // 유저가 드래그를 끝낸 시점에 불려지는 함수 (필수 프로퍼티)
  
  return( // Droppable과 Draggable의 children은 함수여야 함.
  <>
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one"> 

          {(magic) => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>

              <Draggable draggableId="first" index={0}>
                  {(magic) => (
                    <li ref={magic.innerRef} {...magic.draggableProps}>
                     <span {...magic.dragHandleProps}>★</span>
                      One
                     </li>
                  )}
              </Draggable>

              <Draggable draggableId="second" index={1}>
                  {(magic) => (
                    <li ref={magic.innerRef} {...magic.draggableProps}>
                    <span {...magic.dragHandleProps}>★</span>
                      Two
                    </li>
                  )}
              </Draggable>

            </ul> 
           )}

        </Droppable>
      </div>
    </DragDropContext>
  </>
  )
}
export default App;