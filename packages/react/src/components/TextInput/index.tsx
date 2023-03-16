import { ComponentProps, ElementRef, forwardRef } from 'react'

import * as S from './styles'

export type TextInputProps = ComponentProps<typeof S['Input']> & {
  prefix?: string
}

export const TextInput = forwardRef<
  ElementRef<typeof S['Input']>,
  TextInputProps
>((props, ref) => {
  const { prefix, ...attrs } = props

  const hasPrefix = Boolean(prefix)

  return (
    <S.TextContainer>
      {hasPrefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input ref={ref} {...attrs} />
    </S.TextContainer>
  )
})

TextInput.displayName = 'TextInput'
