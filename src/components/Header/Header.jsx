import { Link, useLocation } from 'react-router-dom';
import menuAlt from '../../assets/images/menu-alt.jpg';

import './Header.css';

export default function Header() {
	const { pathname } = useLocation();

	return	<header className="header">
			<nav>
				<ul>
					<li><Link to="om" className={pathname === '/om' ? 'active': ''}>OM</Link></li>
					<li><Link to="galleri" className={pathname === '/galleri' ? 'active': ''}>GALLERI</Link></li>
					<li><Link to="/" className="logo"><h1>Otto<br />Åberg</h1></Link></li>
					<li><Link to="utstallning" className={pathname === '/utstallning' ? 'active': ''}>UTSTÄLLNING</Link></li>
					<li><Link to="kontakt" className={pathname === '/kontakt' ? 'active': ''}>KONTAKT</Link></li>
				</ul>
				<Link to="utstallning" className="icon"><img src={menuAlt} className="img-logo"  alt="hamburger-menu" /></Link>
			</nav>
		</header>;
}