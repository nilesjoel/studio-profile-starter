import React from 'react'
import { ButtonStyled } from '../../../Button/Button.styled'
import { Primary, Secondary } from '../../../Button/Button.stories'
import { StyledButtonGroup } from './index'

export default {
  title: 'DataSymmetry/Forms/StyledButtonGroup',
  component: StyledButtonGroup
}
// TODO: IN PROGRESS...
const Template = (args) => {
  const { components } = args
  return (
    <StyledButtonGroup {...args}>
      {components.map((item, idx) => (
        <ButtonStyled key={idx} args={item}>
          {item.buttonLabel}
        </ButtonStyled>
      ))}
    </StyledButtonGroup>
  )
}

export const DefaultButtonGroup = Template.bind({})
DefaultButtonGroup.args = {
  buttonLabel: 'Default Button Group Label',
  components: [Primary.args, Secondary.args]
}

DefaultButtonGroup.parameters = {
  docs: {
    source: {
      type: 'code'
    }
  }
}
