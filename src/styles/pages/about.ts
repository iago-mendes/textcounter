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
	}

	.card h2
	{
		padding-left: 2rem;
		padding-right: 2rem;
		background-color: ${p => p.theme.colors.primary};

		margin-top: -4rem;

		text-align: center;
		width: fit-content;
	}

	.card ul
	{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.card ul img
	{
		width: 25vw;
		height: 25vw;
	}

	.card ul p
	{
		width: 50%;
		padding: 2rem;
	}

	.card ul p a
	{
		text-decoration: none;
		color: ${p => p.theme.colors.secondaryStrong};
		transition: 0.5s;
	}

	.card ul p a:hover
	{
		text-shadow: 0px 0px 10px ${p => p.theme.colors.secondary};
		font-size: 2.75rem;
	}
`

export default Container