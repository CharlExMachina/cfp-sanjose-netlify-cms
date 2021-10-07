import React from 'react'
import { graphql } from 'gatsby'
import {Layout} from '../components/BetterLayout'
import { SectionHeader } from '../components/SectionHeader'
import { FaqQuestion } from "../components/FaqQuestion";

export const FaqPageTemplate = ({ title }) => {
  return (
		<Layout>
			<section>
				<SectionHeader
					large
					header='Preguntas Frecuentes'
					content='A continuación, las preguntas que nos hacen con mayor frecuencia, y sus respuestas correspondientes.'
				/>
			</section>
			<section>
				<FaqQuestion
					question='¿Qué cursos ofrecen?'
					answer={
						<span>
							La oferta depende de nuestro socio. Este año nuestra oferta es:
							<br />
							<br />
							<strong>Cursos gratis:</strong>
							<ul>
								<li>Estilismo</li>
								<li>Esculpir y Decorar Uñas</li>
								<li>Desarrollo de Videojuegos 2D</li>
								<li>Desarrollo de Videojuegos 3D</li>
								<li>Microsoft Excel</li>
								<li>Administración de Redes Sociales</li>
							</ul>
							<strong>Cursos libres (costo para el participante):</strong>
							<ul>
								<li>Acrilismo nivel intermedio</li>
								<li>Diseño gráfico enfocado a publicidad</li>
								<li>Autocad</li>
								<li>Community Manager</li>
								<li>Marketing digital</li>
								<li>Excel por módulos</li>
								<li>Ofimática de Google</li>
								<li>Instalación y mantenimiento de paneles solares</li>
							</ul>
						</span>
					}
				/>
				<FaqQuestion
					question='¿Cómo puedo inscribirme en los cursos gratuitos de INSAFORP(HTP)? '
					answer={
						<span>
							<strong>Requisitos:</strong>
							<ul>
								<li>Ser mayor de 16 años</li>
								<li>Fotocopia de DUI, mayores de 18 años</li>
								<li>Fotocopia de NIT, solo menores de edad</li>
								<li>Llenado de ficha de inscripción</li>
							</ul>
						</span>
					}
				/>
				<FaqQuestion
					question='¿Los cursos de INSAFORP tienen costo?'
					answer='Los cursos de la modalidad HTP son completamente gratis. Solo se pide responsabilidad con la asistencia al curso.'
				/>
				<FaqQuestion
					question='¿Debo presentar algo durante el curso?'
					answer='No, el Centro de Formación brinda las herramientas y materiales necesarios para el desarrollo curso. También se brindan manuales, cuaderno y lapicero.'
				/>
				<FaqQuestion
					question='¿Cuánto duran los cursos?'
					answer='Varían. Los cursos más cortos tienen una duración de 36 horas y los más largos hasta 200 horas.'
				/>
				<FaqQuestion
					question='¿Cuáles son los horarios de atención?'
					answer={
						<span>
							Lunes a viernes 8:00 am - 4:00 pm
							<br />
							<br />
							Sábados 8:00 am- 12:00 md
						</span>
					}
				/>
				<FaqQuestion
					question='¿Cuál es su número de teléfono o WhatsApp para comunicarme?'
					answer='2486-0800 y 6062-9064'
				/>
				<FaqQuestion
					question='¿Dónde están ubicados?'
					answer='Final 17 avenida Sur, Calle Salesiano San José Cantón Loma Alta, Santa Ana. Ruta de Bus: 10'
				/>
			</section>
			<div style={{ paddingBottom: "64px" }}></div>
		</Layout>
	);
}

const FaqPage = ({ data }) => {

  return (
    <Layout>
      <FaqPageTemplate
        title={'Preguntas frecuentes'}
      />
    </Layout>
  )
}

export default FaqPage

export const aboutPageQuery = graphql`
  query FaqPage {
    markdownRemark(frontmatter: { templateKey: { eq: "preguntas-frecuentes" } }) {
      frontmatter {
        title
      }
    }
  }
`
