import React from 'react'

import { StyledFieldLabel } from './index'

export default {
  title: 'DataSymmetry/Forms/StyledFieldItem',
  component: StyledFieldLabel
}

const Template = (args) => <StyledFieldLabel {...args} />

export const ChangeName = Template.bind({})
ChangeName.args = {
  user: {}
}

export const ChangeName_1 = Template.bind({})
ChangeName_1.args = {}
