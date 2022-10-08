import * as S from './styles'
import { User } from 'phosphor-react'
import type { ComponentProps } from 'react'

export type AvatarProps = ComponentProps<typeof S['AvatarImage']>

export function Avatar(props: AvatarProps) {
  return (
    <S.AvatarContainer>
      <S.AvatarImage {...props} />

      <S.AvatarFallback delayMs={600}>
        <User />
      </S.AvatarFallback>
    </S.AvatarContainer>
  )
}
