import chroma from 'chroma-js'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 10px 3px 10px 3px;
  border: none;
  outline: none;
  background: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.inputFont};

  ${(props) =>
    props.variation === 'dark' &&
    css`
      background: ${(props) => chroma(props.theme.inputBackground).darken(1)};
      color: ${(props) => chroma(props.theme.inputFont).brighten(1)};

      :focus {
        background-color: ${(props) =>
          chroma(props.theme.inputFocusBackgroundColor).darken(1)};
        color: ${(props) => chroma(props.theme.inputFocusFont).brighten(1)};
        font-size: 1rem;
        font-weight: bold;
      }
      ::placeholder {
        color: ${(props) =>
          chroma(props.theme.inputPlaceholderFont).brighten(1)};
        padding: 10px;
      }
    `}

  ${(props) =>
    props.variation === 'light' &&
    css`
      background: ${(props) => props.theme.inputBackground};
      color: ${(props) => props.theme.inputFont};

      :focus {
        background-color: ${(props) => props.theme.inputFocusBackgroundColor};
        color: ${(props) => props.theme.inputFocusFont};
        font-size: 1rem;
        font-weight: bold;
      }
      ::placeholder {
        color: ${(props) => props.theme.inputPlaceholderFont};
        padding: 10px;
      }
    `}


    content : "StyledInput-inputFocusBackground:${(props) =>
    props.theme.inputFocusBackground}";
`

StyledInput.propTypes = {
  layout: PropTypes.oneOf(['row', 'column']),
  variation: PropTypes.oneOf(['light', 'dark'])
}

StyledInput.defaultProps = {
  layout: 'row',
  variation: 'dark',
  theme: {
    inputFont: '',
    inputBackground: '',
    inputFocusBackgroundColor: '',
    inputFocusBackground: 'palevioletred',
    inputFocusFont: 'limegreen',
    inputPlaceholderFont: 'salmon'
  }
}

export { StyledInput }
