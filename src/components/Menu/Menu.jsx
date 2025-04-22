import './menu.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaPhoneAlt } from 'react-icons/fa'

const Menu = () => {
	return (
		<div className='menu'>
			<div className='menu__inner'>
				<div className='menu__col menu__col-right'>Bogdan Bau GmbH</div>
				<div className='menu__col menu__col-left'>
					<ul className='menu__list'>
						<li className='menu__li'>
							<span>
								{' '}
								<GiHamburgerMenu />
							</span>
							<span>Home</span>
						</li>
						<li className='menu__li'>
							<span>
								<FaPhoneAlt />
							</span>
							<span>+41 779553234</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Menu
