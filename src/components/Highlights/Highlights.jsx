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
						<h2>
							<FaHammer />
						</h2>
						<h2 className='highlights__title title title-small'>
							Präzision & Qualität <br></br>
						</h2>
						<p className='highlights__text'>
							Wir legen grössten Wert auf sorgfältige Ausführung und hochwertige Materialien, um langlebige und perfekte
							Ergebnisse zu gewährleisten.
						</p>
					</div>
					<div className='highlights__item'>
						<h2>
							<TbGrillSpatula />
						</h2>
						<h2 className='highlights__title title  title-small'>
							Flexibilität & Kundennähe<br></br>
						</h2>
						<p className='highlights__text'>
							Jedes Projekt ist einzigartig. Wir passen unsere Lösungen individuell an Ihre Wünsche an und stehen Ihnen
							jederzeit persönlich zur Seite.
						</p>
					</div>
					<div className='highlights__item'>
						<h2>
							<FaPaintRoller />
						</h2>
						<h2 className='highlights__title title  title-small'>Zuverlässigkeit & Termintreue</h2>
						<p className='highlights__text'>
							Pünktlichkeit und Verlässlichkeit sind für uns selbstverständlich. Wir garantieren eine termingerechte
							Fertigstellung Ihres Bauvorhabens.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Highlights
