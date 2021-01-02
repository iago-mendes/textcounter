import Head from 'next/head'
import {ChangeEvent, useEffect, useState} from 'react'
import {FiMenu, FiCopy} from 'react-icons/fi'

import Container from '../styles/pages/index'
import Options, {ShowInfo, defaultShowInfo, Features, defaultFeatures } from '../components/OptionsModal'
import LetterDensity from '../components/LetterDensity'
import ContentWithAds from '../components/ContentWithAds'

const Home: React.FC = () =>
{
	const [isOptionsOpen, setIsOptionsOpen] = useState(false)
	const [isLettersOpen, setIsLettersOpen] = useState(false)
	const [showInfo, setShowInfo] = useState<ShowInfo>(defaultShowInfo)
	const [features, setFeatures] = useState<Features>(defaultFeatures)

	const [text, setText] = useState<string>('')
	const [info, setInfo] = useState(
	{
		words: 0,
		characters: 0,
		paragraphs: 0
	})

	useEffect(() =>
	{        
		const savedOptions = localStorage.getItem('options')
		if (savedOptions)
		{
			const {showInfo, features}:{showInfo: ShowInfo, features: Features} = JSON.parse(savedOptions)

			setShowInfo(showInfo)
			setFeatures(features)
		}
	}, [])

	useEffect(() =>
	{
		if (features.save)
		{
			const savedText = localStorage.getItem('text')
			if(savedText)
				setText(savedText)
			else
				setText('')
		}
	}, [features.save])

	useEffect(() =>
	{
		const getWords = text.length === 0 ? [] : text
			.split('\n').join(' ').split(' ')
			.filter(item => {return item !== ''})

		const getParagraphs = text.split('\n').filter(item => {return item !== ''})

		const tmpInfo =
		{
			words: getWords.length,
			characters: text.length,
			paragraphs: getParagraphs.length
		}

		setInfo(tmpInfo)
		if (features.save)
			localStorage.setItem('text', text)
	}, [text, features.save])

	function handleCopyText()
	{
		document.addEventListener('copy', (e: ClipboardEvent) =>
		{
			e.clipboardData?.setData('text/plain', text)
			e.preventDefault()
		})
		document.execCommand('copy')
	}

	return (
		<Container>
			<Head>
				<title>Home</title>
			</Head>
			<Options
				isOpen={isOptionsOpen}
				setIsOpen={setIsOptionsOpen}
				showInfo={showInfo}
				setShowInfo={setShowInfo}
				features={features}
				setFeatures={setFeatures}
			/>
			<LetterDensity isOpen={isLettersOpen} setIsOpen={setIsLettersOpen} text={text} />
			<ContentWithAds>
				<div className="infoButtonsContainer">
					<div className="info">
						{showInfo.words && <span className="showInfo">Words: {info.words}</span>}
						{showInfo.characters && <span className="showInfo">Characters: {info.characters}</span>}
						{showInfo.paragraphs && <span className="showInfo">Paragraphs: {info.paragraphs}</span>}
						{showInfo.letters && <div className="letters">
							<button
								onClick={() => setIsLettersOpen(!isLettersOpen)}
								title="See letter density"
							>
								Letter Density
							</button>
						</div>}
					</div>
					<div className="buttons">
						<button title="Copy text" onClick={handleCopyText} className="copy">
							<FiCopy />
						</button>
						<button
							title="See options"
							onClick={() => setIsOptionsOpen(!isOptionsOpen)}
							className="options"
						>
							<FiMenu />
						</button>
					</div>
				</div>
				<textarea
					value={text}
					onChange={e => setText(e.target.value)}
					name="textarea"
					placeholder="Type your text here"
				/>
			</ContentWithAds>
		</Container>
	)
}

export default Home