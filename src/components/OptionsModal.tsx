import {ChangeEvent} from 'react'
import Modal from 'react-modal'

import Container from '../styles/components/OptionsModal'
import {desktopModalStyle} from '../styles/global'

Modal.setAppElement('#__next')

export interface ShowInfo
{
	words: boolean
	characters: boolean
	paragraphs: boolean
	letters: boolean
}

export const defaultShowInfo =
{
	words: true,
	characters: true,
	paragraphs: false,
	letters: false
}

export interface Features
{
	suggestions: boolean
	save: boolean
}

export const defaultFeatures =
{
	suggestions: false,
	save: true
}

interface OptionsParams
{
		isOpen: boolean
		setIsOpen: Function
		showInfo: ShowInfo
		setShowInfo: Function
		features: Features
		setFeatures: Function
}

const Options: React.FC<OptionsParams> = ({isOpen, setIsOpen, showInfo, setShowInfo, features, setFeatures}) =>
{
	let tmpShowInfo: ShowInfo =
	{
		words: showInfo.words,
		characters: showInfo.characters,
		paragraphs: showInfo.paragraphs,
		letters: showInfo.letters
	}

	let tmpFeatures: Features =
	{
		suggestions: features.suggestions,
		save: features.save
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>)
	{
		const {name} = e.target

		if (name === 'words') tmpShowInfo['words'] = !tmpShowInfo.words
		if (name === 'characters') tmpShowInfo['characters'] = !tmpShowInfo.characters
		if (name === 'paragraphs') tmpShowInfo['paragraphs'] = !tmpShowInfo.paragraphs
		if (name === 'letters') tmpShowInfo['letters'] = !tmpShowInfo.letters
		if (name === 'save') tmpFeatures['save'] = !tmpFeatures.save
	}

	function handleApplyChanges()
	{
		let savedOptions = 
		{
			showInfo: tmpShowInfo,
			features: tmpFeatures
		}

		localStorage.setItem('options', JSON.stringify(savedOptions))

		setShowInfo(tmpShowInfo)
		setFeatures(tmpFeatures)
		setIsOpen(false)
	}

	return (
		<Modal
			isOpen = {isOpen}
			style = {desktopModalStyle}
			id="optionsContainer"
		>
			<Container>
				{/* show */}
				<div className="options">
					<label>What do you want me to show you?</label>
					<ul>
						{/* words */}
						<li>
							<input
								type="checkbox"
								defaultChecked={tmpShowInfo.words}
								onChange={handleChange}
								name="words" 
							/>
							<span>Number of words</span>
						</li>
						{/* characters */}
						<li>
							<input
								type="checkbox"
								defaultChecked={tmpShowInfo.characters}
								onChange={handleChange}
								name="characters"
							/>
							<span>Number of characters</span>
						</li>
						{/* paragraphs */}
						<li>
							<input
								type="checkbox"
								defaultChecked={tmpShowInfo.paragraphs}
								onChange={handleChange}
								name="paragraphs"
							/>
							<span>Number of paragraphs</span>
						</li>
						{/* letters */}
						<li>
							<input
								type="checkbox"
								defaultChecked={tmpShowInfo.letters}
								onChange={handleChange}
								name="letters"
							/>
							<span>Letter density</span>
						</li>
					</ul>
				</div>
				{/* features */}
				<div className="options">
					<label>Choose which features you want.</label>
					<ul>
						<li>
							<input
								type="checkbox"
								defaultChecked={tmpFeatures.save}
								onChange={handleChange}
								name="save"
							/>
							<span>Save text to next visit</span>
						</li>
					</ul>
				</div>
				<div className="buttons">
					<button onClick={() => setIsOpen(false)}>
						Close
					</button>
					<button onClick={handleApplyChanges}>
						Apply
					</button>
				</div>
			</Container>
		</Modal>
	)
}

export default Options