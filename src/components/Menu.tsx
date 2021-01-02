import Link from 'next/link'
import Switch from 'react-switch'
import {FiSun, FiMoon} from 'react-icons/fi'

import logoDark from '../assets/logo-dark.svg'
import logoLight from '../assets/logo-light.svg'
import Container from '../styles/components/Menu'
import ThemeContext from '../utils/ThemePreference'

const Menu: React.FC = () =>
{
	return (
		<ThemeContext.Consumer>
			{ctx => (
				<Container>
					<Link href='/'>
						<a className='logo'>
							<img src={ctx.isDark ? logoDark : logoLight} alt='robot'/>
							<span>Text Counter</span>
						</a>
					</Link>
					<div className='buttons'>
						<Switch
							checked={ctx.isDark}
							onChange={ctx.changeTheme}
							offColor='#ffe4ad'
							offHandleColor='#ffad05'
							uncheckedIcon={<div style={{color: '#ffad05'}} className='themeIcon'><FiSun/></div>}
							onColor='#44475a'
							onHandleColor='#6272a4'
							checkedIcon={<div style={{color: '#6272a4'}} className='themeIcon'><FiMoon/></div>}
							height={30}
							width={65}
						/>
						<Link href='/about'>
							<a className='about'>
								<span>About</span>
							</a>
						</Link>
					</div>
				</Container>
			)}
		</ThemeContext.Consumer>
	)
}

export default Menu