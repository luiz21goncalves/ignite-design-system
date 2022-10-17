import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'

import * as S from './styles'

export type ToastProviderProps = ToastPrimitive.ToastProviderProps

function Provider(props: ToastProviderProps) {
  const { children, ...attrs } = props

  return (
    <>
      <ToastPrimitive.Provider {...attrs}>
        {children}
        <S.ToastViewport />
      </ToastPrimitive.Provider>
    </>
  )
}

Provider.displayName = 'Toast.Provider'

export type ToastRootProps = ToastPrimitive.ToastProps

function Root(props: ToastRootProps) {
  return <S.ToastRoot {...props} />
}

Root.displayName = 'Toast.Root'

export type ToastCloseProps = Omit<
  ComponentProps<typeof S['CloseButton']>,
  'children' | 'asChild'
>

function Close(props: ToastCloseProps) {
  return (
    <S.CloseButton {...props}>
      <X size={20} />
    </S.CloseButton>
  )
}

Close.displayName = 'Toast.Close'

const Description = ToastPrimitive.Description

Description.displayName = 'Toast.Description'

const Title = ToastPrimitive.Title

Title.displayName = 'Toast.Title'

export const Toast = {
  Provider,
  Root,
  Close,
  Description,
  Title,
}
