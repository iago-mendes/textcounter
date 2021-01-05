import {createContext, useEffect, useState} from 'react'

const ThemeContext = createContext({isDark: true, changeTheme: (p: boolean) => {}})

export const ThemeProvider: React.FC = ({children}) =>
{
	const [isDark, setIsDark] = useState(true)

	useEffect(() =>
	{
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme)
			changeTheme(savedTheme === 'dark')
	}, [])

	function changeTheme(dark: boolean)
	{
		if (dark)
		{
			localStorage.setItem('theme', 'dark')
			setIsDark(true)
		}
		else
		{
			localStorage.setItem('theme', 'light')
			setIsDark(false)
		}
	}

	return (
		<ThemeContext.Provider value={{isDark, changeTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContext