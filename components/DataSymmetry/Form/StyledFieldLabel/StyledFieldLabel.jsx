import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const fieldLabelFont = {
  'font-size': '1rem',
  'font-weight': 'bold'
}
const rowFieldLabelWidth = '100%'
const columnFieldLabelWidth = '100%'

const StyledFieldLabel = styled.div`
  //
  ${(props) =>
    (props.layout === 'row' || props.layout === 'column') && fieldLabelFont}

  //
  ${(props) =>
    props.layout === 'row' &&
    css`{
  width: ${rowFieldLabelWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  `}

  //
  ${(props) =>
    props.layout === 'column' &&
    css`{
  padding:.5rem;
  `}

  //
  ${(props) =>
    props.variation === 'dark' &&
    css`
       {
        color: ${(props) => props.theme.fieldLabelColor};
        background: ${(props) => props.theme.fieldLabelBackground};
      }
    `}

  ${(props) =>
    props.variation === 'light' &&
    css`
       {
        color: ${(props) => props.theme.fieldLabelColor};
        background: ${(props) => props.theme.fieldLabelBackground};
      }
    `}
`

StyledFieldLabel.propTypes = {
  layout: PropTypes.oneOf(['row', 'column']),
  variation: PropTypes.oneOf(['light', 'dark'])
}

StyledFieldLabel.defaultProps = {
  layout: 'row',
  variation: 'dark',
  theme: {
    fieldLabelColor: 'white',
    fieldLabelBackground: 'silver'
  }
}
export { StyledFieldLabel }
