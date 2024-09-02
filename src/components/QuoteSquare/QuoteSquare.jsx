import img6 from '../../assets/images/6.jpg';

import './QuoteSquare.css';

export default function QuoteSquare() {
	return (
		<section className="who">
			<img src={img6} alt="Painting" />
			<div className="quote">
				<q>“Att få måla är ett sätt för mig att utforska samspelet mellan olika konstformer.”</q>
				<q className="name">-Otto Åberg</q>
			</div>
		</section>
	)
}