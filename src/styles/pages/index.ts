import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 2rem;
	gap: 2rem;

	.infoButtonsContainer
	{
		width: 80vw;
		height: fit-content;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.info
	{
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"words characters"
			"paragraphs letters"
		;
		
		width: 50vw;

		.showInfo
		{
			font-family: Ubuntu;
			font-size: 2rem;
			color: ${p => p.theme.colors.text};
			
			display: flex;
			align-items: center;
		}

		.lettersContainer
		{
			display: flex;
			align-items: center;
			justify-content: flex-start;

			.letters
			{
				width: 20rem;
				height: 3.5rem;
				margin-top: 0.5rem;

				background: none;
				border-color: ${p => p.theme.colors.text};
				border-style: solid;
				border-radius: 2rem;

				font-size: 2rem;
				font-family: Ubuntu;
				color: ${p => p.theme.colors.text};

				cursor: pointer;
				transition: background-color 0.5s, color 0.5s;
				
				:hover
				{
					background-color: ${p => p.theme.colors.text};
					color: ${p => p.theme.colors.primary};
				}
			}
		}
	}

	.buttons
	{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		width: 15vw;

		.copy
		{
			background: none;
			border: none;
			color: ${p => p.theme.colors.text};
			font-size: 2.5rem;

			cursor: pointer;
			transition: 0.5s;
		
			:hover
			{
				transform: scale(1.2);
			}
		}


		.options
		{
			background: none;
			border-color: ${p => p.theme.colors.text};
			border-radius: 2rem;
			border-style: solid;

			width: 7rem;
			height: 3.5rem;
			margin-bottom: 0.5rem;

			display: flex;
			align-items: center;
			justify-content: center;
			
			cursor: pointer;
			color: ${p => p.theme.colors.text};
			font-size: 2.5rem;
			transition: background-color 0.5s, color 0.5s;
		
			:hover
			{
				background-color: ${p => p.theme.colors.text};
				color: ${p => p.theme.colors.primary};
			}
		}
	}

	.textarea
	{
		background-color: ${p => p.theme.colors.primary};
		border-color: ${p => p.theme.colors.textarea};
		border-radius: 2.5rem;
		border-style: solid;
		box-shadow: inset 0px 0px 5px rgba(0,0,0,1);
		transition: border-color 1s;

		padding: 2rem;
		height: calc(100vh - 7.5rem - 2 * 2rem - 8rem - 2rem);
		width: 80vw;
		overflow: -moz-hidden-unscrollable;

		color: ${p => p.theme.colors.text};
		font-family: Roboto;
		font-size: 1.5rem;
	
		:focus
		{
			border-color: ${p => p.theme.colors.textareaFocus};
			box-shadow: 0px 0px 5px rgba(0,0,0,1);
		}
	}

	::selection
	{
		background-color: ${p => p.theme.colors.secondary};
		color: ${p => p.theme.colors.secondaryStrong};
	}

	::-webkit-scrollbar {
		display: none;
	}
`

export default Container