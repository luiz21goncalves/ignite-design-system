import { Heading, HeadingProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
