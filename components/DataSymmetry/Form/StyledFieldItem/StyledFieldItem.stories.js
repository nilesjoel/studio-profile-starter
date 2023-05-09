import React from 'react'

import { StyledFieldItem } from './index'

export default {
  title: 'DataSymmetry/Forms/StyledFieldItem',
  component: StyledFieldItem
}

const Template = (args) => <StyledFieldItem {...args} />

export const ChangeName = Template.bind({})
ChangeName.args = {
  user: {}
}

export const ChangeName_1 = Template.bind({})
ChangeName_1.args = {}
