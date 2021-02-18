import Head from 'next/head'

interface SEOHeadProps
{
	isDark: boolean
}

const SEOHead: React.FC<SEOHeadProps> = ({isDark}) =>
{
	const meta =
	{
		title: 'Text Counter | Online Tool to Count Text Elements',
		description: 'Text Counter is a free online tool to count words, characters, paragraphs, letter density, and more, making the process of writing faster and more precise.',
		image: 'https://textcounter.tools/thumbnail.png',
		url: 'https://textcounter.tools'
	}

	return (
		<Head>
			<link rel='icon' href={isDark ? '/faviconDark.svg' : '/faviconLight.svg'} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta charSet='utf-8' />
			<meta name='robots' content='index, follow' />

			<meta name='keywords' content='Text, Word, Character, Paragraph, Letter, Counter, Density' />
			<meta name='author' content='Iago Mendes' />

			<title>{meta.title}</title>
			<meta name='title' content={meta.title} />
			<meta name='description' content={meta.description} />

			<meta property='og:type' content='article' />
			<meta property='og:url' content={meta.url} />
			<meta property='og:title' content={meta.title} />
			<meta property='og:description' content={meta.description} />
			<meta property='og:image' content={meta.image} />
			<meta property='og:site_name' content='Text Counter' />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={meta.url} />
			<meta property='twitter:title' content={meta.title} />
			<meta property='twitter:description' content={meta.description} />
			<meta property='twitter:image' content={meta.image} />
			<meta name='twitter:creator' content='@iago_mendes' />
		</Head>
	)
}

export default SEOHead