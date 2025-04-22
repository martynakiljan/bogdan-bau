import './contact.scss'
import { IoIosPhonePortrait } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { MdWhereToVote } from 'react-icons/md'
const Contact = () => {
	return (
		<div className='contact section-fullwidth'>
			<h1 className='title section title-special'>Sollen wir reden?</h1>

			<div className='contact section'>
				<div className='contact__inner'>
					<div className='contact__col'>
						<div className='contact__circle'>
							<div className='contact__circle-text'>
								<IoIosPhonePortrait />
								<p>+41 779553234 </p>
							</div>
						</div>
					</div>
					<div className='contact__col'>
						<div className='contact__circle'>
							<div className='contact__circle-text'>
								<AiOutlineMail />
								<p>info@bogdan-bau.ch</p>
							</div>
						</div>
					</div>
					<div className='contact__col'>
						<div className='contact__circle'>
							<div className='contact__circle-text'>
								<MdWhereToVote />
								<p>Wydeweg 10</p>
								<p>Bremgarten 5620</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
