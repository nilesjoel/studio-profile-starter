import React from 'react'

import { StyledFieldGroup } from './index'

export default {
  title: 'DataSymmetry/Forms/StyledFieldGroup',
  component: StyledFieldGroup
}

const Template = (args) => <StyledFieldGroup {...args} />

export const ChangeName = Template.bind({})
ChangeName.args = {
  user: {}
}

export const ChangeName_1 = Template.bind({})
ChangeName_1.args = {}
