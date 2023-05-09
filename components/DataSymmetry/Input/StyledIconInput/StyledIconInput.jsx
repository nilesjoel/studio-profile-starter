import styled from 'styled-components'

export const StyledIconInput = styled.input`
  width: 100%;
  padding: 0.5em;
  margin-left: 0.5em;
  color: ${(props) => props.theme.inputFont};
  border-radius: 3px;
  background: ${(props) => props.theme.inputBackground};
  border: 3px solid ${(props) => props.theme.inputBorder};
`
