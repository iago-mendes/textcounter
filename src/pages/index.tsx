import Head from 'next/head'
import {ChangeEvent, useEffect, useState} from 'react'
import {FiMenu, FiCopy} from 'react-icons/fi'

import Container from '../styles/pages/index'
import {ShowInfo, defaultShowInfo, Features, defaultFeatures } from '../components/OptionsModal'

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
			const savedOptions = localStorage.getItem('@text-counter/options')
			if (savedOptions)
			{
					const options = savedOptions.split(',')
					let tmpShowInfo: ShowInfo =
					{
							words: false,
							characters: false,
							paragraphs: false,
							letters: false
					}
					let tmpFeatures: Features =
					{
							suggestions: false,
							save: false
					}
					options.map(option =>
					{
							if (option === 'words') tmpShowInfo.words = true
							if (option === 'characters') tmpShowInfo.characters = true
							if (option === 'paragraphs') tmpShowInfo.paragraphs = true
							if (option === 'letters') tmpShowInfo.letters = true
							if (option === 'save') tmpFeatures.save = true
							return 'fix warning'
					})
					setShowInfo(tmpShowInfo)
					setFeatures(tmpFeatures)
			}
	}, [])

		useEffect(() =>
		{
				if (features.save)
				{
						const tmp = String(localStorage.getItem('@text-counter/text'))
						if(tmp !== 'null') setText(tmp)
						else setText('')
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
				if (features.save) localStorage.setItem('@text-counter/text', text)
		}, [text, features.save])

		function handleTextChange(e: ChangeEvent<HTMLTextAreaElement>)
		{
				const {value} = e.target
				setText(value)
		}

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
			<div className="infoButtonsContainer">
				<div className="info">
					{showInfo.words && <span className="showInfo">Words: {info.words}</span>}
					{showInfo.characters && <span className="showInfo">Characters: {info.characters}</span>}
					{showInfo.paragraphs && <span className="showInfo">Paragraphs: {info.paragraphs}</span>}
					{showInfo.letters && <div className="lettersContainer">
						<button
							onClick={() => setIsLettersOpen(!isLettersOpen)}
							title="See letter density"
							className="letters"
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
				onChange={handleTextChange}
				name="textarea"
				className="textarea"
				placeholder="Type your text here"
			/>
		</Container>
	)
}

export default Home