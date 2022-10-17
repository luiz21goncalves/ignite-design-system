import { Box, Text, Tooltip, TooltipRootProps } from '@luiz21goncalves/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip.Root,
  args: {
    children: [
      <Box key="box" css={{ width: 'fit-content', margin: '$10' }}>
        <Tooltip.Trigger>
          <Text>Lorem ipsum</Text>
        </Tooltip.Trigger>
      </Box>,
      <Tooltip.Content key="content">
        <Text size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Tooltip.Content>,
    ],
  },
  argTypes: {
    children: {
      type: 'symbol',
    },
  },
} as Meta<TooltipRootProps>

export const Default: StoryObj<TooltipRootProps> = {}
