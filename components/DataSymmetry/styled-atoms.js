import styled from 'styled-components'
import { AccountCircle } from '@styled-icons/material'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Label, Checkbox } from '@rebass/forms'
import { Button } from 'rebass/styled-components'
import {
  accentColor,
  inputLight,
  lightColor,
  primaryColor
} from './symmetryTheme'

export const StyledIcon = styled(AccountCircle)`
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`
export const StyledIconWrapper = styled.div`
  display: flex;

  ${StyledIconBase} {
    /* icon styles go here */
    color: green;
    width: 50px;
  }
`

export const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 0.5em;
  // margin: 0.5em;
  color: ${(props) => props.inputColor || props.theme.colors.secondaryColor};
  border-radius: 3px;
  background: ${(props) => props.theme.colors.accentColor};
  border: 3px solid ${(props) => props.theme.colors.primaryColor};
  font-size: 2rem;
  :focus {
    background-color: ${(props) => props.theme.colors.inputLight};
    color: ${(props) => props.theme.colors.accentColor};
    // border: none;
    // shadow
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.primaryColor};
  }
`

export const IconInput = styled.input`
  width: 100%;
  padding: 0.5em;
  margin-left: 0.5em;
  color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 3px;
  background: ${(props) => props.theme.colors.accentColor};
  border: 3px solid ${(props) => props.theme.colors.primaryColor};
`

export const StyledInputWrapper = styled(Label)``

export const StyledFieldGroup = styled.div`
  line-height: 1em;
  padding: 0.5em;
  margin: 2em auto;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  border: 3px solid ${(props) => props.theme.colors.primaryColor};
`
export const StyledFieldItem = styled.div`
  width: 100%;
  flex-flow: row nowrap;
  line-height: 2em;
  padding: 0.5em;
  margin: 0.5em;
  align-items: center;
  justify-content: space-between;
  // color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 3px;
  // background: ${(props) => props.theme.colors.accentColor};
  border: 3px solid ${(props) => props.theme.colors.primaryColor};
`
export const StyledFieldLabel = styled.div``

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5em;
  // margin: 0.5em;
  // color: ${(props) => props.inputColor || props.theme.colors.secondaryColor};
  border-radius: 3px;
  // background: ${(props) => props.theme.colors.accentColor};
  // border: 3px solid ${(props) => props.theme.colors.primaryColor};
  border: none;
  :focus {
    background-color: ${(props) => props.theme.colors.inputLight};
    color: ${(props) => props.inputColor || props.theme.colors.secondaryColor};
    // border: none;
    // shadow
  }
  ::placeholder {
    // color:  ${(props) => props.theme.colors.primaryColor};
    // font-size: 1.5em;
  }
`
export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledButton = styled(Button)`
  // padding: 1.5em;
  // margin: 0.5em;
  // margin-bottom:20px;
  // border:1px solid #cccccc;
  border-radius: 4px;
  // width:100%;

  //   border-radius: 4px;
  background: ${({ primaryColor }) =>
    primaryColor ? accentColor : lightColor};
  // white-space: nowrap;
  // padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  // color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  // outline: none;
  // border: none;
  cursor: pointer;
  //
  //

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const StyledRadio = styled.input``
export const StyledCheckbox = styled(Checkbox)``
export const StyledSelect = styled.select`
  width: 100%;
  // height: 35px;
  background: ${inputLight};
  color: ${primaryColor};
  padding-left: 5px;
  font-size: 14px;
  border: none;
  // margin-left: 10px;

  option {
    color: black;
    background: ${inputLight};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 10px 2px 1px;
  }

  option:hover {
    background: ${inputLight};
  }
`
