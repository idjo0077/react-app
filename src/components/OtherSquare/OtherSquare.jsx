import img7 from '../../assets/images/7.jpg';
import img3 from '../../assets/images/3.jpg';
import img5 from '../../assets/images/5.jpg';
import './OtherSquare.css'

export default function OtherSquare(){
	return(
		<section className="other">
			<img className="top-image" src={img7} alt="Painting"/>
			<section className="text-other">
				<h2>TEATER OCH PERFORMANCE ART</h2>
				<p>Tidigare har Otto även använt sig av andra konstformer för sitt konstnärliga uttryck. Detta via skådespeleri på  teater och performance art.</p>
				<p>I sin långa karriär har Ottos konstnärskap tagit han till olika delar av världen. Utöver sitt egna skapande  har han även delat sina kunskaper via workshops och semiseminarium.</p>
			</section>
			<div className="bottom-images">
				<img className="bottom-left-image" src={img3} alt="Painting"/>
				<img className="bottom-right-image" src={img5} alt="Painting"/>
			</div>
		</section>	
	)
}
