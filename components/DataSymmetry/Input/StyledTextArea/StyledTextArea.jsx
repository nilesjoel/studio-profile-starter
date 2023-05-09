import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  color: ${(props) => props.theme.inputFont};
  border-radius: 3px;
  background: ${(props) => props.theme.inputBackground};
  border: none;
  font-size: 1.2rem;
  :focus {
    background-color: ${(props) => props.theme.inputFocusBackgroundColor};
    color: ${(props) => props.theme.inputFocusFont};
    // border: none;
    // shadow
  }
  ::placeholder {
    color: ${(props) => props.theme.inputPlaceholderFont};
  }
`

StyledTextArea.propTypes = {
  layout: PropTypes.oneOf(['row', 'column']),
  variation: PropTypes.oneOf(['light', 'dark'])
}
StyledTextArea.defaultProps = {
  layout: 'row',
  variation: 'dark',
  theme: {}
}

export { StyledTextArea }
