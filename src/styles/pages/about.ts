import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 2rem;
	gap: 4rem;

	.greetings
	{
		font-family: Ubuntu;
		color: ${p => p.theme.colors.text};
		font-size: 2rem;

		width: 60%;
	}

	.card
	{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		border-width: 1px;
		border-style: solid;
		border-color: ${p => p.theme.colors.text};
		border-radius: 2rem;

		width: 60%;
		padding: 2rem;

		color: ${p => p.theme.colors.text};
		font-family: Ubuntu Mono;
		font-size: 2.5rem;

		h2
		{
			padding-left: 2rem;
			padding-right: 2rem;
			background-color: ${p => p.theme.colors.primary};

			margin-top: -4rem;

			text-align: center;
			width: fit-content;
		}

		ul
		{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			
			img
			{
				width: 25vw;
				height: 25vw;
			}

			p
			{
				width: 50%;
				padding: 2rem;
				
				a
				{
					text-decoration: none;
					color: ${p => p.theme.colors.secondaryStrong};
					transition: 0.5s;
				
					:hover
					{
						text-shadow: 0px 0px 10px ${p => p.theme.colors.secondary};
						text-decoration: underline;
					}
				}
			}
		}
	}

	@media (max-width: 1000px)
	{
		.greetings
		{
			width: 80%;
		}

		.card
		{
			width: 90%;
			padding: 1rem;

			h2
			{
				font-size: 3rem;

				width: 17rem;
				padding-left: 1rem;
				padding-right: 1rem;

				margin-top: -3rem;
				margin-bottom: 1rem;
			}

			ul
			{
				flex-direction: column;
			
				p
				{
					width: 100%;
				}
			}
		}
	}
`

export default Container