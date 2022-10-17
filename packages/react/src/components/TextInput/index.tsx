import { ComponentProps } from 'react'

import * as S from './styles'

export type TextInputProps = ComponentProps<typeof S['Input']> & {
  prefix?: string
}

export function TextInput(props: TextInputProps) {
  const { prefix, ...attrs } = props

  const hasPrefix = Boolean(prefix)

  return (
    <S.TextContainer>
      {hasPrefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...attrs} />
    </S.TextContainer>
  )
}

TextInput.displayName = 'TextInput'
