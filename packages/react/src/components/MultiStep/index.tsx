import * as S from './styles'

export type MultiStepProps = {
  size: number
  currentStep?: number
}

export function MultiStep(props: MultiStepProps) {
  const { size, currentStep = 1 } = props

  return (
    <S.MultiStepContainer>
      <S.Label>
        Passo {currentStep} de {size}
      </S.Label>

      <S.Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return <S.Step key={step} active={currentStep >= step} />
        })}
      </S.Steps>
    </S.MultiStepContainer>
  )
}
