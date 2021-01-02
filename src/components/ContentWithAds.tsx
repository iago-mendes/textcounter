import Container from '../styles/components/ContentWithAds'

const ContentWithAds: React.FC = ({children}) =>
{
	return (
		<Container>
			<VerticalAd />
			<main>
				{children}
			</main>
			<VerticalAd />
		</Container>
	)
}

const VerticalAd: React.FC = () => 
{
	return (
		<aside className='vertical'>
			<div className='center'>
				<div className="titleContainer">
					<h1>Advertisement</h1>
				</div>
				<div className='ad' />
			</div>
		</aside>
	)
}

export default ContentWithAds