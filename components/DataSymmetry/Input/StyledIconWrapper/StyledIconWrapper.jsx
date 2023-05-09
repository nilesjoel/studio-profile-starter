import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const StyledIconWrapper = styled.div`
  display: flex;

  ${StyledIconBase} {
    /* icon styles go here */
    color: green;
    width: 50px;
  }
`
