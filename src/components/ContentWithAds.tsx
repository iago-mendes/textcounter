import { useEffect, useState } from 'react'
import useDimensions from '../hooks/useDimensions'
import Container from '../styles/components/ContentWithAds'

const adSizes =
{
	mediumRectangle: {width: 300, height: 250},
	wideSkyscraper: {width: 160, height: 600},
	square: {width: 250, height: 250}
}

const ContentWithAds: React.FC = ({children}) =>
{
	const {width, height} = useDimensions()
	const [adSize, setAdSize] = useState(adSizes.mediumRectangle)
	const [adsNumber, setAdsNumber] = useState(2)
	const [ads, setAds] = useState([{}])

	useEffect(() =>
	{
		if (width < 1100 && height < 700 && width > 700)
		{
			setAdSize(adSizes.square)
			setAdsNumber(2)
		}
		else if (width < 1100 && height >= 700  && width > 700)
		{
			setAdSize(adSizes.wideSkyscraper)
			setAdsNumber(1)
		}
		else
		{
			setAdSize(adSizes.mediumRectangle)
			setAdsNumber(2)
		}
	}, [width, height])

	useEffect(() =>
	{
		let tmp = []

		for (let i = 0; i < adsNumber; i++)
			tmp.push({})

		setAds(tmp)
	}, [adsNumber])

	return (
		<Container>
			<main>
				{children}
			</main>
			<aside>
				{ads.map((ad, index) => (
					<div className='center' key={index}>
						<div className="titleContainer">
							<h1>Advertisement</h1>
						</div>
						<div className='ad' style={{width: adSize.width, height: adSize.height}} />
					</div>
				))}
			</aside>
		</Container>
	)
}

export default ContentWithAds