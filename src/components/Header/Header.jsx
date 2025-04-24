import { useEffect, useState } from 'react'
import Menu from '../Menu/Menu'

const Header = () => {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const quoteStyle = {
		transform: `translateY(-${scrollY * 0.3}px)`,
		opacity: 1 - scrollY / 300
	}

	return (
		<div className='header'>
			<div className='header__img'></div>
			<Menu />
			<div className='header__quote' style={quoteStyle}>
				<h1 className='header__text'>Häb kei Angscht vor em Wandel zum Guete.</h1>

				<div className='header__scroll'>
					<span className='header__scroll-text'>Check uns mal aus</span>
					<span className='header__scroll-line'></span>
				</div>
			</div>
		</div>
	)
}

export default Header
