import { useEffect } from 'react'
import useDimensions from '../hooks/useDimensions'
import Container from '../styles/components/ContentWithAds'

const ContentWithAds: React.FC = ({children}) =>
{
	const {width, height} = useDimensions()

	useEffect(() => console.log('[width]', width), [width])
	useEffect(() => console.log('[height]', height), [height])

	return (
		<Container>
			<main>
				{children}
			</main>
			<VerticalAd width={160} height={600} />
		</Container>
	)
}

interface AdProps
{
	width: number
	height: number
}

const VerticalAd: React.FC<AdProps> = ({width, height}) => 
{
	return (
		<aside className='vertical'>
			<div className='center'>
				<div className="titleContainer">
					<h1>Advertisement</h1>
				</div>
				<div className='ad' style={{width, height}} />
			</div>
		</aside>
	)
}

export default ContentWithAds