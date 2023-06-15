import React from 'react';
import styled from "styled-components"
import { useState } from 'react';

interface ContainerProps {
   bgColor: string;
   borderColor: string

}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor}
    border:1px solid ${props => props.borderColor}
`


////////////////////


interface CircleProps {
    bgColor: string,
    borderColor?: string,
}

function Circle({ bgColor , borderColor = "black"  }: CircleProps) {

    const [value, setValue] = useState<string | number>(3)
    setValue("bye")
    setValue(2)

    return (<Container  bgColor={ bgColor } borderColor={borderColor} />
    )
}


export default Circle