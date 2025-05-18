import { useState, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

import img1 from '../../assets/images/slider-img-14.jpg'
import img2 from '../../assets/images/slider-img-15.jpg'
import img3 from '../../assets/images/slider-img-6.jpg'
import img4 from '../../assets/images/slider-img-9.jpg'
import img5 from '../../assets/images/slider-img-5.jpg'
import img6 from '../../assets/images/slider-img-8.jpg'
import img7 from '../../assets/images/slider-img-7.jpg'
import img8 from '../../assets/images/slider-img-4.jpg'
import img9 from '../../assets/images/slider-img-17.jpg'
import img10 from '../../assets/images/slider-img-16.jpg'

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

const Work = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const overlayRef = useRef(null)

	const openSlider = index => {
		setCurrentIndex(index)
		setIsOpen(true)
	}

	const closeSlider = () => setIsOpen(false)

	const nextSlide = () => {
		setCurrentIndex(prev => (prev + 1) % imageList.length)
	}

	const prevSlide = () => {
		setCurrentIndex(prev => (prev - 1 + imageList.length) % imageList.length)
	}

	// Zamknięcie po kliknięciu w overlay (poza kontentem)
	const handleOverlayClick = e => {
		if (e.target === overlayRef.current) {
			closeSlider()
		}
	}

	// Zamknięcie przy scrollowaniu
	useEffect(() => {
		const handleScroll = () => {
			if (isOpen) closeSlider()
		}

		if (isOpen) {
			window.addEventListener('scroll', handleScroll)
		}

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isOpen])

	return (
		<div className='work section' id='projects'>
			<h1 className='title section-fullwidth'>Werfen Sie einen Blick auf unsere Arbeiten</h1>
			<div className='work__images'>
				{imageList.map((_, index) => (
					<div key={index} className={`image-grid image-grid-${index + 1}`} onClick={() => openSlider(index)}></div>
				))}
			</div>

			{isOpen && (
				<div className='slider-overlay' ref={overlayRef} onClick={handleOverlayClick}>
					<div className='slider-content'>
						<FiX className='slider-close' onClick={closeSlider} />
						<FiChevronLeft className='slider-arrow left' onClick={prevSlide} />
						<img src={imageList[currentIndex]} alt='Preview' className='slider-image' />
						<FiChevronRight className='slider-arrow right' onClick={nextSlide} />
					</div>
				</div>
			)}
		</div>
	)
}

export default Work
