import portrait from '../../assets/images/portrait.jpg';
import './OmSquare.css'


export default function OmSquare() {
	return(
		<section className="about">
		<div className="about-text">
			<p>Otto Åberg är en konstnär som främst jobbar med oljefärg. Inspiration tar han från bland annat musik- och danskonsten och målar med djärva, färgstarka drag.</p>
			<p>Skapandet börjar med ett utforskande som kan ta nya outforskade vägare i form av det konstnärliga uttrycket.</p>
		</div>
		<img className="portrait-image" src={portrait} alt="Portrait"/>
		</section>
	)
}