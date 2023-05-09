import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import chroma from 'chroma-js'

const fieldGroupRow = {
  display: 'flex',
  'flex-flow': 'row'
}
const fieldGroupColumn = {
  display: 'flex',
  'flex-flow': 'column nowrap'
}

const StyledFieldGroup = styled.div`
  line-height: 1em;
  padding: 0.5em;
  margin: 0.5em auto;
  align-items: stretch;
  justify-content: space-between;
  border-radius: 3px;

  content: 'StyledFieldGroup-${(props) => props}';

  ${(props, chroma) =>
    props.variation === 'dark' && {
      color: props.theme.inputFont,
      background: props.theme.inputBackground,
      border: `13px solid ${props.theme.fieldGroupBorder}`
    }};

  ${(props) =>
    props.variation === 'light' && {
      color: props.theme.inputFont,
      background: props.theme.fieldGroupBorder,
      // border: `13px solid ${chroma(props.theme.fieldGroupBorder).darken().saturate(2).hex()}`
    }};

  ${(props) => props.layout === 'row' && fieldGroupRow}
  ${(props) => props.layout === 'column' && fieldGroupColumn}

  pre {
    width: 100%;
  }
`

StyledFieldGroup.propTypes = {
  layout: PropTypes.oneOf(['row', 'column']),
  variation: PropTypes.oneOf(['light', 'dark'])
}

// border: 3px solid ${props => props.symmetryTheme && StudioColorDesign(props.symmetryTheme)['fieldGroupBorder']};
StyledFieldGroup.defaultProps = {
  layout: 'row',
  variation: 'dark',
  theme: {
    fieldGroupBorder: 'palevioletred'
  }
}
export { StyledFieldGroup }
