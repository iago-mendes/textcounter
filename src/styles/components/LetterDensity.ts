import styled from 'styled-components'

const Container = styled.div`
	height: 75vh;
	width: 75vh;
	top: 12.5vh;
	left: calc((100vw - 75vh) / 2);
	border: 1px solid ${p => p.theme.colors.text};
	background: ${p => p.theme.colors.secondary};
	border-radius: 2.5rem;
	padding: 3rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 15;

	h1
	{
		font-family: Ubuntu;
		color: ${p => p.theme.colors.text};
		font-size: 2.5rem;
	}

	ul
	{
		-webkit-column-count: 2;
		-moz-column-count: 2;
		column-count: 2;
		-webkit-column-gap: 5em;
		-moz-column-gap: 5em;
		column-gap: 5em;

		list-style: none;
	
		li
		{
			display: flex;
			align-items: center;
			justify-content: space-between;

			width: 15rem;
		
			label
			{
				font-family: Ubuntu;
				color: ${p => p.theme.colors.text};
				font-size: 1.75rem;

				cursor: text;
			}
		}
	}

	button
	{
		height: 5rem;
		width: 11rem;
		border: none;
		border-radius: 2rem;

		background-color: ${p => p.theme.colors.secondaryStrong};
		color: ${p => p.theme.colors.primary};
		font-family: Ubuntu;
		font-size: 2.5rem;

		cursor: pointer;
		transition: 0.5s;
	
		:hover
		{
			background-color: ${p => p.theme.colors.primary};
			color: ${p => p.theme.colors.secondaryStrong};
		}
	}

	@media (max-width: 700px)
	{
		width: 75vw;
		overflow: auto;

		gap: 2rem;

		ul
		{
			-webkit-column-count: 1;
			-moz-column-count: 1;
			column-count: 1;

			height: fit-content;

			li label
			{
				font-size: 1.5rem;
			}
		}
	}
`

export default Container