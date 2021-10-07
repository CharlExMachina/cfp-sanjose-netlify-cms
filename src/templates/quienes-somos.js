import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout} from '../components/BetterLayout'
import { SectionHeader } from '../components/SectionHeader'
import { Separator } from '../components/Separator'

import * as styles from "../css/aboutPage/aboutPage.module.scss";

export const AboutPageTemplate = ({ title, titleDescription, continuousLearning, ambient  }) => {
  return (
		<Layout>
			<section>
				<SectionHeader
					large
					header={title}
					content={titleDescription}
				/>
			</section>
			<section>
				<img src='img/about/about-2.jpg' />
			</section>
			<div className={styles.about}>
				<section>
					<h3>Programa de Formación Continua</h3>
					<Separator />
					<p>{continuousLearning.partOne}</p>
					<p>{continuousLearning.partTwo}</p>
					<p>{continuousLearning.partThree}</p>
				</section>
				<section className={styles.aboutSection}>
					<div>
						<h3>Ambiente</h3>
						<Separator />
						<p>{ambient.partOne}</p>
						<p>{ambient.partTwo}</p>
						<p>{ambient.partThree}</p>
					</div>
					<img src='img/about/about-1.jpg' />
				</section>
			</div>
		</Layout>
	);
}

// AboutPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// }

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        titleDescription={frontmatter.titleDescription}
        continuousLearning={frontmatter.continuousLearning}
        ambient={frontmatter.ambient}
      />
    </Layout>
  )
}

// AboutPage.propTypes = {
//   data: PropTypes.object.isRequired,
// }

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "quienes-somos" } }) {
      frontmatter {
        title
        titleDescription
        continuousLearning {
          content
        }
        ambient {
          content
        }
      }
    }
  }
`
