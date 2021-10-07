import React from "react";
import { Layout } from "../../components/BetterLayout";
import { Separator } from "../../components/Separator";

import * as styles from "../../css/contactPage/contactPage.module.scss";

const ContactUs = () => {
	return (
		<Layout>
			<section className={styles.contactHeader} style={{paddingTop: '64px'}}>
				<h2>Contáctanos</h2>
				<Separator />
				<p>Contáctanos por medio del formulario de contacto a continuación</p>
			</section>
			<section>
				<form
					method='post'
					data-netlify='true'
					className={styles.contactForm}
					id='contactForm'
				>
					<section>
						<input
							style={{ position: "absolute" }}
							type='hidden'
							name='form-name'
							value='contactForm'
						/>
						<div className={styles.nameEmail}>
							<div className={styles.formField}>
								<label for='name'>Nombre completo</label>
								<input
									type='text'
									id='name'
									placeholder='Nombre completo'
									name='name'
								/>
							</div>
							<div className={styles.formField}>
								<label for='email'>Correo electrónico</label>
								<input
									type='email'
									placeholder='Correo electrónico'
									name='email'
									id='email'
								/>
							</div>
						</div>
						<div className={styles.formField}>
							<label for='phone'>
								Número de teléfono (en el formato de 2222 3333):{" "}
							</label>
							<input
								type='tel'
								placeholder='Ejemplo: 0011 1212'
								name='phone'
								id='phone'
								pattern='[0-9]{4} [0-9]{4}'
								maxLength='9'
							/>
						</div>
						<div className={styles.formField}>
							<label for='howDidYouKnowUs'>
								¿Cómo llegaste a conocer del Centro Educativo?
							</label>
							<select name='howDidYouKnowUs' form='contactForm'>
								<option value='Redes sociales'>Por redes sociales</option>
								<option value='Amigos o Familia'>
									Por amigos o familiares
								</option>
								<option value='Perifoneo'>Perifoneo</option>
								<option value='Vallas en vía pública'>
									Vallas en vía pública
								</option>
								<option value='Otro'>Otros</option>
							</select>
						</div>
						<div className={styles.formField}>
							<label for='areasOfInterest'>
								Qué áreas de la formación profesional te interesan más:
							</label>
							<select name='areasOfInterest' form='contactForm'>
								<option value='Electricidad y electrónica'>
									Electricidad y electrónica
								</option>
								<option value='Ofimática'>Ofimática</option>
								<option value='Diseño y desarrollo WEB'>
									Diseño y desarrollo WEB
								</option>
								<option value='Belleza y estética'>Belleza y estética</option>
								<option value='Otro'>Otros</option>
							</select>
						</div>
					</section>
					<section>
						<div className={styles.formField}>
							<label for='comment'>Escribe tu consulta:</label>
							<textarea
								id='comment'
								name='comment'
								rows='15'
								cols='33'
							></textarea>
						</div>
						<div data-netlify-recaptcha='true'></div>
						<section className={styles.submitForm}>
							<button type='submit'>Enviar</button>
						</section>
					</section>
				</form>
			</section>
		</Layout>
	);
};

export default ContactUs;
