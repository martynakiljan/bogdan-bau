import { CiMenuBurger } from 'react-icons/ci'
import { CiPhone } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect, useRef } from 'react'

const Menu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const menuRef = useRef(null)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	// Toggle class on body
	useEffect(() => {
		document.body.classList.toggle('menu-open', isMenuOpen)

		const handleClickOutside = e => {
			if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.menu__li')) {
				setIsMenuOpen(false)
			}
		}

		const handleScroll = () => {
			if (isMenuOpen) setIsMenuOpen(false)
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		if (isMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside)
			window.addEventListener('scroll', handleScroll)
		} else {
			window.addEventListener('scroll', handleScroll)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isMenuOpen])

	const handleLinkClick = (e, section) => {
		e.preventDefault()
		setIsMenuOpen(false)
		const target = document.getElementById(section)
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className={`menu ${isScrolled ? 'menu-scrolled' : ''}`} ref={menuRef}>
			<div className='menu__inner'>
				<div className='menu__col menu__col-right'>Bogdan Bau GmbH</div>

				<div className='menu__col menu__col-left'>
					<ul className='menu__list'>
						<li className='menu__li' onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<span>{isMenuOpen ? <AiOutlineClose /> : <CiMenuBurger />}</span>
							{windowWidth > 500 && <span>Menu</span>}
						</li>
						<li className='menu__li'>
							<span>
								<CiPhone />
							</span>
							<a href='tel:+41779475177'>
								<p>+41 77 947 51 77</p>
							</a>
						</li>
					</ul>
				</div>
			</div>

			{isMenuOpen && (
				<div className='fullscreen-menu'>
					<ul className='fullscreen-menu__list'>
						{[
							{ id: 'home', label: 'Home' },
							{ id: 'about', label: 'Über uns' },
							{ id: 'story', label: 'Unsere Geschichte' },
							{ id: 'projects', label: 'Unsere Projekte' },
							{ id: 'contact', label: 'Kontakt' },
						].map(({ id, label }) => (
							<li className='menu__list-item' key={id}>
								<a className='menu__list--link' href={`#${id}`} onClick={e => handleLinkClick(e, id)}>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Menu
