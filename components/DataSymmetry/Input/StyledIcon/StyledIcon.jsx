import styled from 'styled-components'
import { AccountCircle } from '@styled-icons/material'

export const StyledIcon = styled(AccountCircle)`
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`
