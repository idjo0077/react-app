import { useState } from 'react'
import './KontaktSection.css'

export default function KontaktSection() {

	const [name, setName] = useState('');
	const [adress, setAdress] = useState('');
	const [number, setNumber] = useState('');
	const [message, setMessage] = useState('');

	return (
		<section className="contact">
			<h2 className="main">KOM I KONTAKT</h2>
			<section className="left-text">
				<h2 className="invite">HÖR AV DIG FÖR SAMARBETEN ELLER HELT ENKELT FRÅGOR OCH FUNDERINGAR</h2>
				<a href = "mailto:ida.l.johansson@hotmail.com">
					ottoabergskonst@gmail.com
				</a>
			</section>

			<form action="mailto:ida.l.johansson@hotmail.com" method="post">
				<input className="namn-ruta" placeholder="Namn *" value={name} onChange={(e) => setName(e.target.value)} type="text" required name="your-name"/>
				<input className="adress-ruta" placeholder="Mailadress *" value={adress} onChange={(e) => setAdress(e.target.value)} type="text" required name="your-email"/>
				<input className="telenr-ruta" placeholder="Telefon" value={number} onChange={(e) => setNumber(e.target.value)} type="text" name="your-phone"/>
				<textarea rows="5" className="meddelande-ruta" placeholder="Ditt meddelande" value={message} onChange={(e) => setMessage(e.target.value)} name="your-message"></textarea>
				<input type="submit" value="Skicka"/>
			</form>
		</section>
	)
}