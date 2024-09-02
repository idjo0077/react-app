import img1 from '../../assets/images/img-10.jpg';
import img2 from '../../assets/images/img-25.jpg';
import img3 from '../../assets/images/Rectangle 15.jpg';
import img4 from '../../assets/images/img-24.jpg';
import img5 from '../../assets/images/Rectangle 16.jpg';
import img6 from '../../assets/images/img-11.jpg';
import img7 from '../../assets/images/3.jpg';
import img8 from '../../assets/images/img-13.jpg';
import img9 from '../../assets/images/img-15.jpg';
import img10 from '../../assets/images/Rectangle 18.jpg';
import img11 from '../../assets/images/img-16.jpg';
import img12 from '../../assets/images/5.jpg';
import img13 from '../../assets/images/7.jpg';
import img14 from '../../assets/images/Rectangle 19.jpg';
import img15 from '../../assets/images/img-18.jpg';
import img16 from '../../assets/images/Rectangle 20.jpg';
import img17 from '../../assets/images/img-21.jpg';
import img18 from '../../assets/images/Rectangle 22.jpg';
import img19 from '../../assets/images/img-23.jpg';
import img20 from '../../assets/images/Rectangle 23.jpg';
import img21 from '../../assets/images/3.jpg';

import './GalleriImages.css';
import { useState } from 'react';
import GalleryImage from './GalleryImage';

export default function GalleriImages() {
	const [color, setColor] = useState('');

	const allActive = color === '';

	return (

		<>
			<div className='filterRuta'>
				<p className='filterText'>FILTER BY COLOR</p>
				<button className='red' onClick={(e)=> setColor('red')}></button>
				<button className='yellow' onClick={(e)=> setColor('yellow')}></button>
				<button className='green' onClick={(e)=> setColor('green')}></button>
				<button className='allActive' onClick={(e)=> setColor('')}></button>
			</div>

			<GalleryImage name="img1" isLarge={false} src={img1} active={allActive || color === 'red'} />
			<GalleryImage name="img2" isLarge={false} src={img2} active={allActive || color === 'yellow'} />
			<GalleryImage name="img3" isLarge={false} src={img3} active={allActive || color === 'red'} />
			<GalleryImage name="img4" isLarge={false} src={img4} active={allActive || color === 'yellow'} />
			<GalleryImage name="img5" isLarge={false} src={img5} active={allActive || color === 'red'} />
			<GalleryImage name="img6" isLarge={false} src={img6} active={allActive || color === 'green'} />
			<GalleryImage name="img7" isLarge={false} src={img7} active={allActive || color === 'red'} />
			<GalleryImage name="img8" isLarge={false} src={img8} active={allActive || color === 'yellow'} />
			<GalleryImage name="img9" isLarge={false} src={img9} active={allActive || color === 'green'} />
			<GalleryImage name="img10" isLarge={false} src={img10} active={allActive || color === 'green'} />
			<GalleryImage name="img11" isLarge={true} src={img11} active={allActive || color === 'yellow'} />
			<GalleryImage name="img12" isLarge={false} src={img12} active={allActive || color === 'yellow'} />
			<GalleryImage name="img13" isLarge={false} src={img13} active={allActive || color === 'yellow'} />
			<GalleryImage name="img14" isLarge={false} src={img14} active={allActive || color === 'yellow'} />
			<GalleryImage name="img15" isLarge={false} src={img15} active={allActive || color === 'red'} />
			<GalleryImage name="img16" isLarge={false} src={img16} active={allActive || color === 'green'} />
			<GalleryImage name="img17" isLarge={false} src={img17} active={allActive || color === 'red'} />
			<GalleryImage name="img18" isLarge={false} src={img18} active={allActive || color === 'green'} />
			<GalleryImage name="img19" isLarge={false} src={img19} active={allActive || color === 'red'} />
			<GalleryImage name="img20" isLarge={false} src={img20} active={allActive || color === 'red'} />
			<GalleryImage name="img21" isLarge={false} src={img21} active={allActive || color === 'yellow'} />
		</>
	)
}