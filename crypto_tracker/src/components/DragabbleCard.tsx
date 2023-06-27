import React from "react";
import { Draggable } from "react-beautiful-dnd"
import styled from 'styled-components'

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`

interface IDarabbleCardProps {
    toDo: string;
    index: number
}

function DragabbleCard({toDo, index}: IDarabbleCardProps) {
    console.log(toDo, "has been rendered")

    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
        {(magic) => (
            <Card
            ref={magic.innerRef} 
            {...magic.draggableProps}
            {...magic.dragHandleProps}
            >
                {toDo}
                </Card>
            )}
        </Draggable>
    )
}
export default React.memo(DragabbleCard) // 프로퍼티 {toDo, index}에 변화가 있을때만 리렌더링 함. (불필요한 리렌더링 방지)      




