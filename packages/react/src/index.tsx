import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  color: '$white',
  fontWeight: '$bold',

  '&:hover': {
    backgroundColor: '$ignite500',
  },

  variants: {
    size: {
      small: {
        padding: '$2 $4',
        fontSize: '$sm',
      },
      big: {
        padding: '$3 $6',
        fontSize: '$md',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
