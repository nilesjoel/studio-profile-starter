import styled, { createGlobalStyle } from 'styled-components'

import { variant } from 'styled-system'
import {
  primaryColor,
  secondaryColor,
  darkColor,
  lightColor,
  accentColor,
  inputLight
} from './symmetryTheme'
import {
  StyledSelect,
  StyledButton,
  StyledButtonGroup,
  StyledInput,
  StyledInputWrapper,
  IconInput,
  StyledTextArea,
  StyledIconWrapper,
  StyledIcon,
  StyledCheckbox,
  StyledRadio,
  StyledFieldGroup,
  StyledFieldLabel,
  StyledFieldItem
} from './styled-atoms'
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

const GlobalStyle = createGlobalStyle`
--primary-color: #19303C;
--secondary-color: #164050;
--dark-color: #0a1822;
--light-color:#416F7C;
--accent-color: #6db7c6;

 * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style:none;

 }

 html {font-size:1rem;
  font-family: 'Source Sans Pro', sans-serif;
    overflow-y: scroll;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

@media screen and (max-width: 960px) {
    html {
        margin-left: calc(100vw - 100%);
        margin-right: 0;
         overflow-y: auto;
    }
}


.flexParent {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.flexParent > div {
  width: 400px;
  height: 400px;
  border: 1px solid black;
  margin: 10px;
  border-radius: 5px;
}
input {
  width: 50px;
  text-align: center;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale3D(0.95, 0.95, 0.95);
  }
  to {
    opacity: 1;
    transform: scale3D(1, 1, 1);
  }
}

.Form {
  animation: fade 200ms ease-out;
}

.FormGroup {
  margin: 0 15px 20px;
  padding: 0;
  border-style: none;
  background-color: #7795f8;
  will-change: opacity, transform;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #829fff;
  border-radius: 4px;
}

.FormRow {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid #819efc;
}

.FormRow:first-child {
  border-top: none;
}

.FormRowLabel {
  width: 15%;
  min-width: 70px;
  padding: 11px 0;
  color: #c4f0ff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@keyframes void-animation-out {
  0%,
  to {
    opacity: 1;
  }
}
.FormRowInput:-webkit-autofill {
  -webkit-text-fill-color: #fce883;
  /* Hack to hide the default webkit autofill */
  transition: background-color 100000000s;
  animation: 1ms void-animation-out;
}

.FormRowInput {
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 0;
  color: #fff;
  background-color: transparent;
  animation: 1ms void-animation-out;
}

.FormRowInput::placeholder {
  color: #87bbfd;
}

.StripeElement--webkit-autofill {
  background: transparent !important;
}

.StripeElement {
  width: 100%;
  padding: 11px 15px 11px 0;
}

.SubmitButton {
  display: block;
  font-size: 16px;
  width: calc(100% - 30px);
  height: 40px;
  margin: 40px 15px 0;
  background-color: #f6a4eb;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #ffb9f6;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  will-change: transform, background-color, box-shadow;
}

.SubmitButton:active {
  background-color: #d782d9;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #e298d8;
  transform: scale(0.99);
}

.SubmitButton.SubmitButton--error {
  transform: translateY(15px);
}
.SubmitButton.SubmitButton--error:active {
  transform: scale(0.99) translateY(15px);
}

.SubmitButton:disabled {
  opacity: 0.5;
  cursor: default;
  background-color: #7795f8;
  box-shadow: none;
}

.ErrorMessage {
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 13px;
  margin-top: 0px;
  width: 100%;
  transform: translateY(-15px);
  opacity: 0;
  animation: fade 150ms ease-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
  will-change: opacity, transform;
}

.ErrorMessage svg {
  margin-right: 10px;
}

.Result {
  margin-top: 50px;
  text-align: center;
  animation: fade 200ms ease-out;
}

.ResultTitle {
  color: #fff;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 17px;
  text-align: center;
}

.ResultMessage {
  color: #9cdbff;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 25px;
  line-height: 1.6em;
  text-align: center;
}

.ResetButton {
  border: 0;
  cursor: pointer;
  background: transparent;
}


`

//
// export const Container = styled.div`
//   z-index: 1;
//   width: 100%;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 50px;
//   padding-left: 50px;
//
//   @media screen and (max-width: 991px) {
//     padding-right: 30px;
//     padding-left: 30px;
//   }
// `;

export const StyledTitle = styled.div`
  font-family: mostra-nuova, sans-serif;
  font-size: 3rem;
`

export const SymmetryTitle = styled(StyledTitle)(
  variant({
    variants: {
      primary: {
        color: accentColor,
        background: primaryColor
      },
      secondary: {
        color: darkColor,
        background: accentColor
      }
    }
  })
)

export const SubTitle = styled.div`
  font-family: mostra-nuova, sans-serif;
  font-size: 2rem;
  // color: ${darkColor};
  // background-color: ${(props) => props.theme.colors.primaryColor};
`

export const SymmetryIcon = styled(StyledIcon)(variant({}))

export const SymmetryTextArea = styled(StyledTextArea)(variant({}))

const fieldGroupRow = {
  display: 'flex',
  'flex-flow': 'row'
}
const fieldGroupColumn = {
  display: 'flex',
  'flex-flow': 'column nowrap'
}

export const SymmetryFieldGroup = styled(StyledFieldGroup)(
  variant({
    variants: {
      primaryRow: {
        ...fieldGroupRow,
        background: darkColor,
        color: lightColor
      },
      primaryColumn: {
        ...fieldGroupColumn,
        background: darkColor,
        color: lightColor
      },
      secondaryRow: {
        ...fieldGroupRow,
        background: accentColor,
        color: darkColor
      },
      secondaryColumn: {
        ...fieldGroupColumn,
        background: accentColor,
        color: darkColor
      }
    }
  })
)

const rowFieldLabelFont = {
  'font-size': '1rem',
  'font-weight': 'bold'
}
const rowFieldLabelWidth = '50%'
const columnFieldLabelWidth = '100%'
export const SymmetryFieldLabel = styled(StyledFieldLabel)(
  variant({
    variants: {
      primaryRow: {
        ...rowFieldLabelFont,
        width: rowFieldLabelWidth
        // color: darkColor
      },
      primaryColumn: {
        ...rowFieldLabelFont,
        width: columnFieldLabelWidth
        // color: darkColor
      },
      secondaryRow: {
        ...rowFieldLabelFont,
        width: rowFieldLabelWidth
        // color: accentColor
      },
      secondaryColumn: {
        ...rowFieldLabelFont,
        width: columnFieldLabelWidth
        // color: accentColor
      }
    }
  })
)
export const SymmetryFieldItem = styled(StyledFieldItem)(variant({}))
export const SymmetryIconWrapper = styled(StyledIconWrapper)(variant({}))
export const SymmetryIconInput = styled(IconInput)(variant({}))
export const SymmetryInputWrapper = styled(StyledInputWrapper)(variant({}))
export const SymmetryInput = styled(StyledInput)(
  variant({
    variants: {
      primary: {
        background: darkColor,
        color: accentColor
      },
      secondary: {
        background: accentColor,
        color: darkColor
      }
    }
  })
)

export const SymmetryCheckbox = styled(StyledCheckbox)(variant({}))
export const SymmetryRadio = styled(StyledRadio)(variant({}))
export const SymmetryButtonGroup = styled(StyledButtonGroup)(
  variant({
    variants: {
      primary: {
        background: 'green'
      }
    }
  })
)
export const SymmetryButton = styled(StyledButton)(
  variant({
    variants: {
      primary: {
        '&:hover': `{
                        transition: all 0.3s ease-out;
                        background: #fff;
                        background-color: ${(props) =>
                          props.theme.colors.accentColor};
                    }`
      }
    }
  })
)

export const SymmetrySelect = styled(StyledSelect)(
  variant({
    variants: {
      primary: {
        background: secondaryColor,
        color: lightColor,
        option: `
                    // background: ${lightColor};
                    // color: ${primaryColor};
                    // display: flex;
                    // white-space: pre;
                    // min-height: 20px;
                    // padding: 10px 2px 1px;
                `
      },
      secondary: {
        background: accentColor,
        color: darkColor,
        option: `
                    // background: ${darkColor};
                    // color: ${accentColor};
                    // display: flex;
                    // white-space: pre;
                    // min-height: 20px;
                    // padding: 10px 2px 1px;
                `
      }
    }
  })
)

export default GlobalStyle
