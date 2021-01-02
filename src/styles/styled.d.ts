import 'styled-components'

import {dark as theme} from './theme'

export type Theme = typeof theme

declare module 'styled-components'
{
  export interface DefaultTheme extends Theme {}
}