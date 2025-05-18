import { IoIosArrowRoundForward } from 'react-icons/io'

const Story = () => {
	const handleScroll = () => {
		const contactSection = document.getElementById('contact')
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className='section-2cols  section about' id='story'>
			<h1 className='title'>Philosophie</h1>

			<p className='section-text'>
				Im Mittelpunkt unserer Arbeit stehen Vertrauen, Qualität und Verantwortung. Wir glauben, dass sorgfältige
				Ausführung, Liebe zum Detail und eine offene Kommunikation mit dem Kunden die Grundlage für eine erfolgreiche
				Zusammenarbeit bilden. Jedes Projekt behandeln wir individuell – unabhängig von seiner Größe – und achten
				darauf, dass es den Erwartungen entspricht und langfristig Bestand hat. Wir setzen auf moderne Lösungen,
				bewährte Technologien und kontinuierliche Weiterentwicklung, um stets Dienstleistungen auf höchstem Niveau zu
				bieten.
				<a className='button button-section' onClick={handleScroll}>
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
