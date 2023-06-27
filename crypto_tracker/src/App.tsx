import { createGlobalStyle, styled, ThemeProvider } from 'styled-components';
import Router from './Router';
import React, {useState} from 'react'
import { isDarkAtom } from './routes/atoms';
import ToDoList from './components/ToDoList';
import {useRecoilState, useRecoilValue} from 'recoil'
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd'
import { darkTheme } from './theme';
import { toDoState } from './components/atoms';
import DragabbleCard from './components/DragabbleCard';
import Board from './components/Board';



const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`



function App() {
  const [toDos, setToDos] = useRecoilState(toDoState)

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if(!destination) return; }
  
/*    
   setToDos(oldToDos => {
      const copyToDos = [...oldToDos];

      copyToDos.splice(source.index, 1)
      copyToDos.splice(destination?.index, 0, draggableId)

      return copyToDos;
    }) 
  } 
  */

/* 
  const onDragEnd = (drag: any) => {
    console.log(drag) 
  } 
 */

/* a를 d위치로 드래그 했을때 다음이 출력됨.
{ 
destination: {droppableId: 'one', index: 3}
draggableId: "a"
mode: "FLUID"
reason: "DROP"
source: {index: 0, droppableId: 'one'}
type: "DEFAULT"
} 
*/

  return( 
  <>
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map(boardId => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
            ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  </>
  )
    }
export default App;