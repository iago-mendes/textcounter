import styled from 'styled-components'

const Container = styled.div`
	.infoButtonsContainer
	{
		width: 100%;
		height: fit-content;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.info
		{
			display: grid;
			grid-auto-rows: 3rem;
			grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
			grid-gap: 2rem;
			align-items: center;
			justify-items: flex-start;
			
			width: 50vw;

			.showInfo
			{
				font-family: Ubuntu;
				font-size: 2rem;
				color: ${p => p.theme.colors.text};
				
				display: flex;
				align-items: center;
			}

			.letters
			{
				display: flex;
				align-items: center;
				justify-content: flex-start;

				button
				{
					width: 20rem;
					height: 3rem;

					display: flex;
					align-items: center;
					justify-content: center;

					background: none;
					border: ${p => p.theme.colors.text} 1px solid;
					border-radius: 2rem;

					font-size: 2rem;
					font-family: Ubuntu;
					color: ${p => p.theme.colors.text};

					cursor: pointer;
					transition: background-color 0.25s, color 0.25s;
					
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
				transition: 0.25s;
			
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

				display: flex;
				align-items: center;
				justify-content: center;
				
				cursor: pointer;
				color: ${p => p.theme.colors.text};
				font-size: 2.5rem;
				transition: background-color 0.25s, color 0.25s;
			
				:hover
				{
					background-color: ${p => p.theme.colors.text};
					color: ${p => p.theme.colors.primary};
				}
			}
		}
	}

	textarea
	{
		background-color: ${p => p.theme.colors.primary};
		border-color: ${p => p.theme.colors.textarea};
		border-radius: 2.5rem;
		border-style: solid;
		box-shadow: inset 0px 0px 5px rgba(0,0,0,1);
		transition: border-color 1s;

		padding: 2rem;
		height: calc(100vh - 7.5rem - 2 * 2rem - 8rem - 2rem);
		width: 100%;
		overflow: -moz-hidden-unscrollable;

		color: ${p => p.theme.colors.text};
		font-family: Roboto;
		font-size: 1.5rem;

		resize: none;
	
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

	@media (max-width: 900px)
	{
		.infoButtonsContainer
		{
			width: 100%;
			flex-direction: column;

			gap: 2rem;
			margin-bottom: 1rem;
		
			.info
			{
				grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));

				width: 100%;
			
				.showInfo
				{
					font-size: 1.75rem;
				}

				.letters
				{
					button
					{
						width: 15rem;
						font-size: 1.75rem;
					}
				}
			}

			.buttons
			{
				width: 100%;
				justify-content: space-around;
			}
		}
	}
`

export default Container