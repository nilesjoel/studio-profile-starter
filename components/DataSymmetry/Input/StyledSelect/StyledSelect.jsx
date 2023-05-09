import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const optionBase = css`
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 10px 21px 11px;
`
const StyledSelect = styled.select`
  width: 100%;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  // margin-left: 10px;

  ${(props) => !props.multiple && { height: '35px;' }};

  ${(props) =>
    props.variation === 'light' &&
    css`
      background: ${props.theme.inputBackground};
      color: ${props.theme.inputFont};
      option {
        ${optionBase};
        color: ${props.theme.inputFocusFont};
        background: ${props.theme.inputLight};
      }

      option:hover {
        background: ${props.theme.inputHoverBackgroundColor};
      }
    `}

  ${(props) =>
    props.variation === 'dark' &&
    css`
      background: ${props.theme.inputBackground};
      color: ${props.theme.inputFont};
      option {
        ${optionBase};
        color: ${props.theme.inputFont};
        background: ${props.theme.inputLight};
      }

      option:hover {
        background: ${props.theme.inputHoverBackgroundColor};
      }
    `}
`

StyledSelect.propTypes = {
  layout: PropTypes.oneOf(['row', 'column']),
  variation: PropTypes.oneOf(['light', 'dark'])
}
StyledSelect.defaultProps = {
  layout: 'row',
  variation: 'dark',
  value: [],
  theme: {
    fieldGroupBorder: 'palevioletred'
  }
}
export { StyledSelect }
