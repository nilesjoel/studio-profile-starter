import React from 'react'

import Button, { ButtonSuccess, ButtonDanger } from './Button'

export default {
  title: 'Studio UI/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const DefaultButtonTemplate = (args) => {
  return <Button {...args}>{args.buttonLabel}</Button>
}

const SuccessButtonTemplate = (args) => {
  console.log(JSON.stringify({ args }))
  return <ButtonSuccess {...args}>{args.buttonLabel}</ButtonSuccess>
}
const DangerButtonTemplate = (args) => {
  return <ButtonDanger {...args}>{args.buttonLabel}</ButtonDanger>
}

export const Primary = DefaultButtonTemplate.bind({})
Primary.args = {
  primary: true,
  buttonLabel: 'Button Primary',
  backgroundColor: 'palegreen'
}
export const Secondary = DefaultButtonTemplate.bind({})
Secondary.args = {
  buttonLabel: 'Button Secondary',
  backgroundColor: 'palegreen'
}

export const Success = SuccessButtonTemplate.bind({})
Success.args = {
  buttonLabel: 'Button Success',
  backgroundColor: 'purple',
  reverse: 'true'
}

export const Danger = DangerButtonTemplate.bind({})
Danger.args = {
  size: 'large',
  buttonLabel: 'Button Danger',
  backgroundColor: 'coral'
}
