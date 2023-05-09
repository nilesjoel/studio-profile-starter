import styled from 'styled-components'
import PropTypes from 'prop-types'

const fieldItemWidth = { width: '100%' }
const StyledFieldItem = styled.div`
  flex-flow: row nowrap;
  line-height: 2em;
  padding: 0.5em 0.8em 0.5em 0.5em;
  align-items: center;
  justify-content: space-between;
  // border-radius: 3px;

  content: 'StyledFieldItem-${(props) => props.theme.fieldItemBorder}';

  ${(props) => props.layout === 'row' && fieldItemWidth};

  ${(props) =>
    props.variation === 'dark' && {
      color: props.theme.inputFont,
      background: props.theme.inputFocusBackground,
      border: `13px solid ${props.theme.fieldItemBorder}`
    }}

  ${(props) =>
    props.variation === 'light' && {
      color: props.theme.inputFont,
      background: props.theme.inputFocusBackground,
      border: `13px solid ${props.theme.fieldItemBorder}`
    }}
`

StyledFieldItem.propTypes = {
  layout: PropTypes.oneOf(['row', 'column']),
  variation: PropTypes.oneOf(['light', 'dark'])
}
StyledFieldItem.defaultProps = {
  layout: 'row',
  variation: 'dark',
  theme: {}
}

export { StyledFieldItem }
