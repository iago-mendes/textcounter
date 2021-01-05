import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	padding-left: 3rem;
	padding-right: 1rem;
	height: calc(100vh - 5rem);

	main
	{
		height: 100%;
		width: 80%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		padding-top: 3rem;
		padding-bottom: 3rem;
	}

	aside
	{
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.center
		{
			border: ${p => p.theme.colors.text} solid 1px;
			border-radius: 0.5rem;

			position: relative;

			.titleContainer
			{
				position: absolute;
				top: -7px;
				z-index: 1;

				width: 100%;

				display: flex;
				justify-content: center;
				align-items: center;

				h1
				{
					background-color: ${p => p.theme.colors.primary};

					padding-left: 1rem;
					padding-right: 1rem;

					font-family: Ubuntu;
					font-weight: 400;
					font-size: 1rem;
					color: ${p => p.theme.colors.text};
				}
			}

			.ad
			{
				/* background-color: green; */

				margin: 0.5rem;
			}
		}
	}

	@media (max-width: 900px)
	{
		flex-direction: column;
		padding: 1rem;

		main
		{
			width: 100%;

			padding: 0;
		}

		aside
		{
			padding-bottom: 2rem;
		}
	}
`

export default Container