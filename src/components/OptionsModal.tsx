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