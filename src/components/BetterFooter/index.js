import React from "react";

import * as styles from "./footer.module.scss";

export const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.logos}>
					<img src='img/footer/via-don-bosco.png' />
					<img src='img/footer/logo-insaforp.png' width='300' height='100' />
				</div>
				<span className={styles.vertical} />
				<div className={styles.contactLinks}>
					<a
						className={styles.emailLink}
						href='mailto:coordinacion.cfp@salesianosanjose.edu.sv'
					>
						<img src='img/footer/email-icon.png' />
						coordinacion.cfp@salesianosanjose.edu.sv
					</a>
					<a className={styles.emailLink} href='https://wa.me/50360629064'>
						<img src='img/footer/whatsapp-icon.png' />
						+503 6062 9064
					</a>
				</div>
				<div className={styles.socialMedia}>
					<a
						href='https://www.facebook.com/CFPCSSJ/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src='img/footer/facebook-icon.png' />
					</a>
				</div>
			</div>
		</>
	);
};
