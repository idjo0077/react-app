import gallery1 from '../../assets/images/gallery1.jpg';
import './RigthSquare.css'

export default function RigthSquare() {
	return (
		<section className="rigth-square">
			<img src={gallery1} alt="Galleri M Frakrike"/>
			<div className="rigth-square-text">
				<h2>GALLERI M FRANKRIKE -2021-</h2>
				<p className="review">På utställningen “mood” visades 11 verk av Otto. Verken är inspirerade av jazzmusiken och dess frasering.</p>
				<p className="review">Otto arbetade med 3 lokala jazzmusiker för att hitta ett gemensamt uttryck. På utställningen medverkade dessa musiker.”</p>
			</div>	
		</section>
	)
}