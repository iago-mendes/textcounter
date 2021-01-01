import styled from 'styled-components'

const Container = styled.div`
	height: 75vh;
	width: 75vh;
	border: 1px solid ${p => p.theme.colors.text};
	background: ${p => p.theme.colors.secondary};
	border-radius: 2.5rem;
	padding: 3rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 15;

	.options
	{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	
		label
		{
			font-family: Ubuntu;
			color: ${p => p.theme.colors.text};
			font-size: 2.5rem;
		}

		ul
		{
			margin-top: 1rem;
			list-style: none;

			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		li
		{
			display: flex;
			align-items: center;
			gap: 0.5rem;
		
			input
			{
				cursor: pointer;
				transition: 0.5s;
			
				:hover
				{
					transform: scale(1.2);
				}
			}

			span
			{
				font-family: Roboto;
				color: ${p => p.theme.colors.text};
				font-size: 1.5rem;
			}
		}
	}

	.buttons
	{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	
		button
		{
			height: 5rem;
			width: 11rem;
			border: none;
			border-radius: 2rem;

			background-color: ${p => p.theme.colors.primary};
			color: ${p => p.theme.colors.secondaryStrong};
			font-family: Ubuntu;
			font-size: 2.5rem;

			cursor: pointer;
			transition: 0.5s;
		
			:hover
			{
				background-color: ${p => p.theme.colors.secondaryStrong};
				color: ${p => p.theme.colors.primary};
			}
		}
	}
`

export default Container