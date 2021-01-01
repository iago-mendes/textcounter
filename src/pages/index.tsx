import Head from 'next/head'

import Container from '../styles/pages/index'

const Home: React.FC = () =>
{
	return (
		<Container>
			<Head>
				<title>Home</title>
			</Head>
			<h1>Hello world!</h1>
		</Container>
	)
}

export default Home