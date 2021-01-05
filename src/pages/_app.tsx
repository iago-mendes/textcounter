import {AppProps} from 'next/app'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import {useEffect} from 'react'
import {useRouter} from 'next/dist/client/router'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'
import ThemeContext, {ThemeProvider} from '../utils/ThemePreference'
import SEOHead from '../components/SEOHead'
import * as gtag from '../utils/gtag'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) =>
{
	const Router = useRouter()

	useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [Router.events]);

  return (
		<ThemeProvider>
			<ThemeContext.Consumer>
				{ctx => (
					<StyledThemeProvider theme={ctx.isDark ? theme.dark : theme.light}>
						<SEOHead isDark={ctx.isDark} />
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