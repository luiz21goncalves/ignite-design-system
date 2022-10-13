import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@luiz21goncalves/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, minus
        sint tempora dolores distinctio perferendis repellendus rerum labore
        corrupti maxime, eveniet laudantium cupiditate modi quidem quis?
        Voluptatem fuga debitis pariatur.
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
