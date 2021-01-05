import {createGlobalStyle} from "styled-components";
import Modal from 'react-modal'

export default createGlobalStyle`
	:root
	{
		font-size: 10px;
	}

	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}

	body
	{
		background-color: ${p => p.theme.colors.primary};
	}

	#__next
	{
		width: 100%;
		height: 100vh;
	}
`

export const desktopModalStyle: Modal.Styles =
{
	overlay:
	{
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		zIndex: 2
	},

	content:
	{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: 'none',
		border: 'none',
		padding: 0,
		width: '100%',
		height: '100%',
		left: 0,
		top: 0
	}
}