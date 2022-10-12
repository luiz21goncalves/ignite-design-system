import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
  argTypes: {
    currentStep: {
      control: {
        type: 'number',
        min: 1,
      },
    },
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
