
import { IoIosPhonePortrait } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { MdWhereToVote } from 'react-icons/md'
const Contact = () => {
	return (
		<div className='contact section-fullwidth'>
			<h1 className='title section'>Sollen wir reden?</h1>

			<div className='contact section'>
				<div className='contact__inner'>
					<div className='contact__col'>
						<div className='contact__circle'>
							<div className='contact__circle-text'>
								<IoIosPhonePortrait />
								<a href='tel:+41779475177'>
									<p>+41 77 947 51 77</p>
								</a>
							</div>
						</div>
					</div>
					<div className='contact__col'>
						<div className='contact__circle'>
							<div className='contact__circle-text'>
								<AiOutlineMail />
								<a href='mailto:info@bogdan-bau.ch'>
									<p>info@bogdan-bau.ch</p>
								</a>
							</div>
						</div>
					</div>
					<div className='contact__col'>
						<div className='contact__circle'>
							<div className='contact__circle-text'>
								<MdWhereToVote />
								<a
									href='https://www.google.com/maps/search/?api=1&query=Wydeweg+10+Bremgarten+5620'
									target='_blank'
									rel='noopener noreferrer'>
									<p>Wydeweg 10 Bremgarten 5620</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
