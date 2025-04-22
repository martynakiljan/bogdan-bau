/** @format */
import './assets/styles/basic.scss'
import Header from './components/Header/Header'
import About from './components/About/About'
import Story from './components/Story/Story'
import Quote from './components/Quote/Quote'
import Fullimg from './components/Fullimg/Fullimg'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'

const App = () => {
	return (
		<div className='app'>
			<Header />
			<About />
			<Story />
			<Quote />
			<Fullimg />
			<Services />
			<Work />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
