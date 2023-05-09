import React from 'react'

import {
  StyledButton,
  StyledButtonSuccess,
  StyledButtonDanger
} from './Button.styled'

function Button(props) {
  const btnText = 'Main button'
  const { children, onClick, className } = props
  // console.log(props)
  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
      {btnText}
    </StyledButton>
  )
}

export function ButtonSuccess(props) {
  const btnText = 'Success button'
  const { children, onClick, className } = props
  // console.log(props)
  return (
    <StyledButtonSuccess {...props} onClick={onClick}>
      {children}
      {btnText}
    </StyledButtonSuccess>
  )
}

export function ButtonDanger(props) {
  const btnText = 'Danger button'
  const { children, onClick, className } = props
  return (
    <StyledButtonDanger {...props} onClick={onClick}>
      {children}
      {btnText}
    </StyledButtonDanger>
  )
}

export { Button }
