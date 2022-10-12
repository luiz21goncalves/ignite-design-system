import { Heading, HeadingProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'md',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
