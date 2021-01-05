import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${p => `${p.theme.colors.primary}bf`};

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	.close
	{
		position: absolute;

		right: 3rem;
		top: 3rem;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: ${p => p.theme.colors.text};
		color: ${p => p.theme.colors.primary};

		border: none;
		border-radius: 100rem;
		padding: 0.5rem;

		transition: 0.25s;

		:hover
		{
			background-color: ${p => p.theme.colors.secondaryStrong};
		}
	}

	.themeIcon
	{
		height: 100%;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 2rem;
	}

	.about
	{
		width: 10rem;
		height: 4rem;

		display: flex;
		align-items: center;
		justify-content: center;

		border-color: ${p => p.theme.colors.text};
		border-style: solid;
		border-width: 0.1rem;
		border-radius: 2.5rem;

		text-decoration: none;
		color: ${p => p.theme.colors.text};
		transition: 0.25s;
	
		:hover
		{
			background-color: ${p => p.theme.colors.text};
			color: ${p => p.theme.colors.primary};
		}
		
		span
		{
			font-family: Ubuntu;
			font-size: 2rem;
		}
	}
`

export default Container