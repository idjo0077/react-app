import { useEffect, useState } from 'react';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import vid1 from '../../assets/images/vid1.mp4';
import './ImageSquare.css'

export default function ImageSquare() {
	const [color, setColor] = useState([255, 255, 255]);

	useEffect(() => {
		function onMouseMove(e) {
			const percentX = e.screenX / window.innerWidth;
			const percentY = e.screenY / window.innerHeight;
			setColor([255, Math.floor(percentX * 255), Math.floor(percentY * 255)]);
		}

		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	}, []);

	return (	
		<section className="gallery grid" style={{background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`}}>
			<video poster={img2} className="top-right-video" controls>
				<source src={vid1} type="video/mp4" />
			</video>
			<img className="top-right-image" src={img2} alt="Painting" />		
			<img className="top-left-image" src={img3} alt="Painting" />
			<img className="bottom-right-image" src={img4} alt="Painting" />
			<img className="bottom-left-image" src={img5} alt="Painting" />
		</section>
	)
}