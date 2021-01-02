import {AppProps} from 'next/app'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'
import ThemeContext, {ThemeProvider} from '../utils/ThemePreference'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) =>
{
  return (
		<ThemeProvider>
			<ThemeContext.Consumer>
				{ctx => (
					<StyledThemeProvider theme={ctx.isDark ? theme.dark : theme.light}>
						<Menu />
						<Component {...pageProps} />
						<GlobalStyle />
					</StyledThemeProvider>
				)}
			</ThemeContext.Consumer>
		</ThemeProvider>
  )
}

export default MyApp