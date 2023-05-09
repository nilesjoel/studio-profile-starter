import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import React from 'react'

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  // background:${(props) => props.theme.buttonBackground};

  ${
    (props) => props.layout === 'row' && false
    // {background: props.theme.darkColor}
  }

  ${
    (props) => props.layout === 'column' && false
    // {background: props.theme.accentColor}
  }
`

StyledButtonGroup.defaultProps = {
  theme: {
    buttonBackground: 'palevioletred'
  }
}

const ButtonGroup = (props) => {
  const { children } = props
  return <Box>{children}</Box>
}

export { StyledButtonGroup, ButtonGroup }
