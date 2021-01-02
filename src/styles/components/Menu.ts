import styled from 'styled-components'

const Container = styled.nav`
	height: 5rem;
	width: 100%;
	background-color: ${p => p.theme.colors.primary};

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);

	.logo
	{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		text-decoration: none;

		width: 30rem;

		transition: 0.25s;

		:hover
		{
			transform: scale(1.02);
		}
		
		img
		{
			height: 4rem;
			width: 4rem;
		}

		span
		{
			color: ${p => p.theme.colors.text};
			font-family: 'Permanent Marker';
			font-size: 3rem;
		}
	}
	
 .buttons
	{
		display: flex;
		align-items: center;
		justify-content: space-around;

		width: 20rem;
	
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
	}
`

export default Container