
import { FaHammer } from 'react-icons/fa6'
import { TbGrillSpatula } from 'react-icons/tb'
import { FaPaintRoller } from 'react-icons/fa6'

const Highlights = () => {
	return (
		<>
			<h1 className='title section'>Was uns auszeichnet?</h1>
			<div className='highlights section-full-width'>
				<div className='highlights__inner section'>
					<div className='highlights__item'>
						<h3>
							<FaHammer />
						</h3>
						<h2 className='highlights__title title title-small'>
							Aufmerksamkeit <br></br>fürs Detail
						</h2>
						<p className='highlights__text'>
							ist für uns kein Luxus, sondern Standard Von der Planung bis zur letzten Schraube achten wir auf jedes
							Detail, damit Sie ein Ergebnis erhalten, das überzeugt – optisch, funktional und qualitativ.
						</p>
					</div>
					<div className='highlights__item'>
						<h2>
							<TbGrillSpatula />
						</h2>
						<h2 className='highlights__title title  title-small'>
							Zuverlässigkeit<br></br> und Qualität
						</h2>
						<p className='highlights__text'>
							Ob Einfamilienhaus, Gewerbebau oder Sanierung – wir bringen das nötige Know-how mit, um Ihre Vision
							Wirklichkeit werden zu lassen.
						</p>
					</div>
					<div className='highlights__item'>
						<h2>
							<FaPaintRoller />
						</h2>
						<h2 className='highlights__title title  title-small'>
							Fleiss <br></br>und Präzision
						</h2>
						<p className='highlights__text'>
							das ist unser Fundament. Als erfahrenes Bauunternehmen setzen wir Ihre Projekte mit höchstem Engagement
							um.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Highlights
