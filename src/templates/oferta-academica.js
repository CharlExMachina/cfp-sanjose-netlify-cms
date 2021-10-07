import * as React from "react";
import { Link, graphql, navigate } from "gatsby";

import { Layout } from "../components/BetterLayout";
import { SectionHeader } from "../components/SectionHeader";
import { Separator } from "../components/Separator";

import * as styles from "../css/offer/offerPage.module.scss";


export const OfertaAcademicaTemplate = ({
  title,
  titleDescription,
  freeCourses
}) => {
  return (
		<Layout>
			<SectionHeader
				large
				header={title}
				content={titleDescription}
			/>
			<section className={styles.coursesHeader}>
				<h3>Cursos Libres</h3>
				<Separator />
			</section>
      {freeCourses.courses.map((course) => (
        <section className={styles.autocad}>
          <SectionHeader header={course.title} />
          <h4><strong>{course.costTitle}</strong></h4>
          <div className={styles.designClassContent}>
            <ul>
              {course.courseFeatures.map((courseFeature) => <li>{courseFeature.featureName}</li>)}
            </ul>
          </div>
        </section>  
      ))}
			<div style={{ paddingBottom: "64px" }}></div>
		</Layout>
	);
};

const OfertaAcademica = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <OfertaAcademicaTemplate
        title={frontmatter.title}
        titleDescription={frontmatter.titleDescription}
        freeCourses={frontmatter.freeCourses}
      />
    </Layout>
  );
};

export default OfertaAcademica;

export const pageQuery = graphql`
  query OfertaAcademica {
    markdownRemark(frontmatter: { templateKey: { eq: "oferta-academica" } }) {
      frontmatter {
        title
        titleDescription
        freeCourses {
          courses {
            title
            costTitle
            courseFeatures {
              featureName
            }
          }
        }
      }
    }
  }
`;
