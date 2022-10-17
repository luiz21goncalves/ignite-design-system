import * as Toast from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: '$8',
  zIndex: Number.MAX_SAFE_INTEGER,
  margin: 0,
  outline: 'none',
  boxSizing: 'border-box',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100% + var(--space-5)))' },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(calc(100% + var(--space-5)))' },
})

export const ToastRoot = styled(Toast.Root, {
  boxSizing: 'border-box',
  backgroundColor: '$gray800',
  padding: '$3 $5',
  borderRadius: '$sm',
  position: 'relative',
  maxWidth: 360,
  width: '100%',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 200ms ease`,
    },

    '&[data-state="close"]': {
      animation: `${hide} 200ms ease`,
    },

    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },

    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },

    '&[data-swipe="end"]': {
      animation: `${swipeOut} 200ms ease`,
    },
  },
})

export const CloseButton = styled(Toast.Close, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray200',
  position: 'absolute',
  top: 16,
  right: 16,
})
