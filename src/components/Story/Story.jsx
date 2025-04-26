import { IoIosArrowRoundForward } from 'react-icons/io'
const Story = () => {
	return (
		<div className='section-2cols  section about' id='story'>
			<h1 className='title'>Philosophie</h1>

			<p className='section-text'>
				Wir sind ein engagiertes Bauunternehmen mit langjähriger Erfahrung in der Branche. Von kleinen
				Renovierungsarbeiten bis hin zu großen Bauprojekten – wir stehen für Qualität, Zuverlässigkeit und Termintreue.
				Unser Team aus qualifizierten Fachkräften arbeitet mit Leidenschaft und Präzision, um Ihre Bauwünsche
				Wirklichkeit werden zu lassen. Vertrauen Sie auf unser Know-how und lassen Sie uns gemeinsam Ihre Vision
				verwirklichen.
				<a className='button'>
					<span>Schreiben Sie uns</span>
					<span className='button_icon'>
						<IoIosArrowRoundForward />
					</span>
				</a>
			</p>
		</div>
	)
}

export default Story
