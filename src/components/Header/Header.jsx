import './header.scss'
import Menu from '../Menu/Menu'

const Header = () => {
	return (
		<div className='header'>
			<div className='header__img'></div>
			<Menu />
			<div className='header__quote'>
				<h1>Häb kei Angscht vor em Wandel zum Guete.</h1>
			</div>
		</div>
	)
}

export default Header
