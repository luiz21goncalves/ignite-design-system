import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@luiz21goncalves/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            gap: '$2',
          }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Selected: StoryObj<CheckboxProps> = {
  args: {
    defaultChecked: true,
  },
}
