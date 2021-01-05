import Modal from 'react-modal'
import Link from 'next/link'
import Switch from 'react-switch'
import {FiSun, FiMoon, FiX} from 'react-icons/fi'

import Container from '../styles/components/BurgerMenu'
import {desktopModalStyle} from '../styles/global'

Modal.setAppElement('#__next')

interface BurgerMenuProps
{
	isOpen: boolean
	setIsOpen: Function

	isDark: boolean
	changeTheme: (p: boolean) => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({isOpen, setIsOpen, isDark, changeTheme}) =>
{
	return (
		<Modal
			isOpen = {isOpen}
			style = {desktopModalStyle}
		>
			<Container>
				<button className="close" onClick={() => setIsOpen(false)}>
					<FiX size={30} />
				</button>
				<Switch
					checked={isDark}
					onChange={changeTheme}
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
					<a className='about' onClick={() => setIsOpen(false)}>
						<span>About</span>
					</a>
				</Link>
			</Container>
		</Modal>
	)
}

export default BurgerMenu