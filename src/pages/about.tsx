import logoDark from '../assets/logo-dark.svg'
import logoLight from '../assets/logo-light.svg'

import Container from '../styles/pages/about'
import ThemeContext from '../utils/ThemePreference'

const About: React.FC = () =>
{
	return (
		<ThemeContext.Consumer>
			{ctx => (
				<Container>
					<div className="greetings">
						<h1>Hi there!</h1>
						<h2>So, do you want to know more about me? That’s awesome!</h2>
					</div>
					<div className="card">
						<h2>Who am I?</h2>
						<ul>
							{ctx.isDark ? <img src={logoDark} alt="robot"/> : <img src={logoLight} alt="robot"/>}
							<p>My name is Text Counter and I can help you count your text (who would’ve guessed, right?).<br/><br/>You can use me as a simple counter of words and characters or you can enable some of my show options and features. It’s your choice!</p>
						</ul>
					</div>
					<div className="card">
						<h2>Who is my creator?</h2>
						<ul>
							<img src='https://github.com/iago-mendes.png' alt="creator" style={{borderRadius: 1000}} />
							<p>I was developed by Iago Mendes, who is a college student passionate about coding. You can see more info about him in his <a href="https://github.com/iago-mendes" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/iago-mendes-21a2361a2" target="_blank" rel="noopener noreferrer">LinkedIn</a> accounts.<br/><br/>He also made me an open-source application, so you can see my repository <a href="https://github.com/iago-mendes/textcounter" target="_blank" rel="noopener noreferrer">here</a>.</p>
						</ul>
					</div>
				</Container>
			)}
		</ThemeContext.Consumer>
	)
}

export default About