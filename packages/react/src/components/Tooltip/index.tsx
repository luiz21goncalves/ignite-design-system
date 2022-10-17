import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import * as S from './styles'

export type TooltipRootProps = TooltipPrimitive.TooltipProviderProps &
  TooltipPrimitive.TooltipProps

function Root(props: TooltipRootProps) {
  const {
    delayDuration,
    disableHoverableContent,
    skipDelayDuration,
    ...attrs
  } = props

  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipPrimitive.Root {...attrs} />
    </TooltipPrimitive.Provider>
  )
}

Root.displayName = 'Tooltip.Root'

const Trigger = S.TooltipTrigger

Trigger.displayName = 'Tooltip.Trigger'

export type TooltipContentProps = TooltipPrimitive.TooltipContentProps

function Content(props: TooltipContentProps) {
  const { children, sideOffset = 2, ...attrs } = props
  return (
    <TooltipPrimitive.Portal>
      <S.TooltipContent sideOffset={sideOffset} {...attrs}>
        {children}
        <S.TooltipArrow />
      </S.TooltipContent>
    </TooltipPrimitive.Portal>
  )
}

Content.displayName = 'Tooltip.Content'

export const Tooltip = { Root, Trigger, Content }
