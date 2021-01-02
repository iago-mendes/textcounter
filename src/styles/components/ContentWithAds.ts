import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 2rem;
	height: calc(100vh - 7.5rem);

	main
	{
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	aside
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

	.vertical
	{
		.ad
		{
			width: 160px;
			height: 500px;
		}
	}

	@media (max-height: 615px)
	{
		justify-content: center;

		main
		{
			width: 80vw;
		}

		aside
		{
			display: none;
		}
	}
`

export default Container