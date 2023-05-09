import React from 'react'
import styled from 'styled-components'

export default function RenderCount() {
  const renders = React.useRef(0)
  // console.log("RENDER", renders);
  return <Circle>{`Rendered : ${++renders.current}`}</Circle>
}

const size = 30
const Circle = styled.i``
