import gallery2 from '../../assets/images/gallery2.jpg';
import './LeftSquare.css'

export default function LeftSquare() {
	return (
		<section className="left-square">
		<div className="left-square-text">
			<h2>LILLA GALLERIET UMEÅ -2022-</h2>
			<p className="review">Utställningen “Move” på Lilla galleriet visad upp Ottos nyaste verk. Verken är baserade på glädjen till livet och rörelse.</p>
			<p className="review">“En utställning med Otto Åberg i sitt esse. Han har en otrolig känsla för form och färg.”</p>
			<p className="name">-Svenska Dagbladet</p>
		</div>			
		<img src={gallery2} alt="Lilla Galleriet Umeå"/>
		</section>
	)
}