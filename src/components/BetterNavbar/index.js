import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import * as styles from "./navbar.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Navbar = () => {
	const [isMobileScreen, setIsMobileScreen] = useState(false);
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const { width } = useWindowSize();

	useEffect(() => {
		if (width && width < 1200) {
			setIsMobileScreen(true);
		} else {
			setIsMobileScreen(false);
		}
	}, [width]);

	const renderMobileNavbar = () => {
		return (
			<>
				<nav className={styles.mobileNav}>
					<img
						onClick={() => setIsMobileNavOpen(true)}
						src='img/navbar/hamburger.png'
					/>
				</nav>
				{isMobileNavOpen && (
					<>
						<div
							onClick={() => setIsMobileNavOpen(false)}
							className={styles.overlay}
						></div>
						<div className={styles.sideNav}>
							<img
								className={styles.closeNavbar}
								onClick={() => setIsMobileNavOpen(false)}
								src='img/navbar/exit.png'
							/>
							<ul>
								<li>
									<Link to='/'>Inicio</Link>
								</li>
								<li>
									<Link to='/oferta-academica'>Oferta Académica</Link>
								</li>
								<li>
									<Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link>
								</li>
								<li>
									<Link to='/quienes-somos'>Quiénes Somos</Link>
								</li>
								<li>
									<Link to='/contacto'>Contacto</Link>
								</li>
							</ul>
							<section className={styles.sideNavLogos}>
								<img src='img/navbar/logo.png' />
								<img src='img/navbar/logo-salesiano.png' />
							</section>
						</div>
					</>
				)}
			</>
		);
	};

	if (isMobileScreen) {
		return renderMobileNavbar();
	}

	return (
		<nav className={styles.navbar}>
			<img src='img/navbar/logo.png' />
			<ul>
				<li>
					<Link to='/'>Inicio</Link>
				</li>
				<li>
					<Link to='/oferta-academica'>Oferta Académica</Link>
				</li>
				<li>
					<Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link>
				</li>
				<li>
					<Link to='/quienes-somos'>Quiénes Somos</Link>
				</li>
				<li>
					<Link to='/contacto'>Contacto</Link>
				</li>
			</ul>
			<img src='img/navbar/logo-salesiano.png' />
		</nav>
	);
};
