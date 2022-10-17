import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { useCallback } from 'react'
import {
  Button,
  Heading,
  Text,
  Toast,
  ToastRootProps,
} from '@luiz21goncalves/react'

export default {
  title: 'Overlay/Toast',
  component: Toast.Root,
  args: {
    children: [
      <Toast.Title key="title" asChild>
        <Heading size="sm">Lorem ipsum</Heading>
      </Toast.Title>,
      <Toast.Description key="description" asChild>
        <Text size={'sm'} css={{ color: '$gray200' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Toast.Description>,
      <Toast.Close key="close" />,
    ],
  },
  argTypes: {
    open: { type: 'boolean', defaultValue: false },
    children: { type: 'symbol' },
    onOpenChange: { type: 'function' },
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs()

      const onOpenChange = useCallback(() => {
        updateArgs({ open: !args.open })
      }, [args.open, updateArgs])

      return (
        <Toast.Provider>
          {Story({ args: { ...args, onOpenChange } })}

          <Button onClick={() => updateArgs({ open: true })}>Show Toast</Button>
        </Toast.Provider>
      )
    },
  ],
} as Meta<ToastRootProps>

export const Default: StoryObj<ToastRootProps> = {}
