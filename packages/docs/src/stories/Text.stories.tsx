import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@luiz21goncalves/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'md',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
