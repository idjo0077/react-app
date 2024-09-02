import image1 from '../../assets/images/1.jpg'
import ImageSquare from '../../components/ImageSquare/ImageSquare';
import QuoteSquare from '../../components/QuoteSquare/QuoteSquare';
import './Home.css';

export default function Home() {
	return <main className="grid">
		<section><img className="hero-image" src={image1} alt="Painting" /></section>
		<ImageSquare />
		<QuoteSquare />
	</main>
}