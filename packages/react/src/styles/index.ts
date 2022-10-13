import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@luiz21goncalves/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  getCssText,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
})
