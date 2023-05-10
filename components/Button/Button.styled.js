import styled from 'styled-components'
import chroma from 'chroma-js'
import { colors } from '../../styles/utilities'
// USING REBASS OR ANOTHER COMPONENT LIBRARY AS A BASIS FOR BASE COMPONENTS.
import { Button } from 'rebass/styled-components'

export const StyledButton = styled(Button)`
  color: ${(props) => (props.reverse ? colors.white : colors.primary500)};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-color: ${(props) =>
    props.reverse ? colors.white : colors.primary500};
  // border-radius: 2rem;
  background-color: ${(props) => props.backgroundColor};
  :hover {
    color: ${(props) => (props.reverse ? colors.primary500 : colors.white)};
    background-color: ${(props) =>
      props.reverse ? colors.white : colors.primary500};
    cursor: pointer;
    border-color: ${(props) =>
      props.reverse ? colors.primary500 : colors.white};
  }
`

export const StyledButtonSuccess = styled(StyledButton)`
  color: ${colors.success500};
  border: 2px solid ${colors.success500};
  :hover {
    color: ${colors.white};
    background-color: ${colors.success500};
    cursor: pointer;
  }
`

export const StyledButtonDanger = styled(StyledButton)`
  color: ${colors.danger500};
  border: 2px solid ${colors.danger500};
  :hover {
    color: ${colors.white};
    background-color: ${colors.danger500};
    cursor: pointer;
  }
`
export const ButtonLabel = styled.label`
  font-size: 26px;
  // color : white;
`
