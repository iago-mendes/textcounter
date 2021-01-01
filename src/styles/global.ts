import {createGlobalStyle} from "styled-components";

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