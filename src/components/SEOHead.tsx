import Head from "next/head"

interface SEOHeadProps
{
	isDark: boolean
}

const SEOHead: React.FC<SEOHeadProps> = ({isDark}) =>
{
	return (
		<Head>
			<link rel='icon' href={isDark ? '/faviconDark.svg' : '/faviconLight.svg'} />

			<title>Text Counter | Online Tool to Count Text Elements</title>
			<meta name="description" content="Text Counter is a free online tool to count words, characters, paragraphs, letter density, and more, making the process of writing faster and more precise." />
			<meta name="keywords" content="Text, Word, Character, Paragraph, Letter, Counter, Density" />
			<meta name="author" content="Iago Mendes" />

			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet='utf-8' />
			<meta name='robots' content='index, follow' />
		</Head>
	)
}

export default SEOHead