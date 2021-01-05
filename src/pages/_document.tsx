import Document, {DocumentInitialProps, DocumentContext, Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

import {gaId} from '../utils/gtag'

export default class MyDocument extends Document
{
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>
	{
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage
		
		try
		{
			ctx.renderPage = () => originalRenderPage(
			{
				enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
			})
		
			const initialProps = await Document.getInitialProps(ctx)
			return {...initialProps, styles: (
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>
			)}
		}
		finally
		{
			sheet.seal()
		}
	}
			
	render(): JSX.Element
	{
		return (
			<Html lang='en'>
				<Head>
					<link href='https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto&family=Ubuntu+Mono:ital@0;1&family=Ubuntu:wght@700&display=swap' rel='stylesheet' />

					{/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <script
						dangerouslySetInnerHTML=
						{{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
          		`
          	}}
          />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
			)
	}
}