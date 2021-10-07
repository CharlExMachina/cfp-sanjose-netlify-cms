import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, navigate } from "gatsby";

import Carousel from "../components/Carousel";
import { InfoCard } from "../components/InfoCard";
import { Layout } from "../components/BetterLayout";
import { SectionHeader } from "../components/SectionHeader";
import { Separator } from "../components/Separator";
import { SubjectCard } from "../components/SubjectCard";

import * as styles from "../css/homePage/homePage.module.scss";

// markup
export const IndexPageTemplate = ({
  title,
  titleDescription,
  mission,
  vision,
  academicOffer,
  subjectWebDesign,
  subjectBeauty,
  subjectElectricity,
  subjectOffice
}) => {
  const getImages = () => {
    return [
      <img src="/img/home/carousel/carousel-1.jpg" alt="" />,
      <img src="/img/home/carousel/carousel-2.jpg" alt="" />,
      <img src="/img/home/carousel/carousel-3.jpg" alt="" />,
    ];
  };

  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <section className={styles.hero}>
          <div className={styles.carouselContainer}>
            <Carousel images={getImages()} />
          </div>
          <div>
            <h2>{title}</h2>
            <Separator />
            <p>{titleDescription}</p>
            <button onClick={() => navigate("/oferta-academica")}>
              Explorar oferta académica
            </button>
          </div>
        </section>
        <section>
          <SectionHeader header="Misión y Visión" />
        </section>
        <section>
          <div className={styles.missionContent}>
            <InfoCard
              cardImage={<img src="img/home/mission/info-mission.jpg" />}
              title={mission.title}
              content={mission.content}
              callToActionTitle="Contáctanos"
              callToActionRoute="/contacto"
            />
            <InfoCard
              cardImage={<img src="img/home/mission/info-vision.jpg"></img>}
              title={vision.title}
              content={vision.content}
              callToActionTitle="Aprender más"
              callToActionRoute="/quienes-somos"
            />
          </div>
        </section>
        <section>
          <SectionHeader header={academicOffer.title} content={academicOffer.content} />
        </section>
        <section>
          <div className={styles.subjectsContent}>
            <SubjectCard
              title={subjectWebDesign.title}
              content={subjectWebDesign.content}
              image={<img src="img/home/subject/subject-coding.png" />}
              contextImage={<img src="img/home/areas/web.jpg" />}
            />
            <SubjectCard
              title={subjectBeauty.title}
              content={subjectBeauty.content}
              image={<img src="img/home/subject/subject-nails.png" />}
              contextImage={<img src="img/home/areas/stylist.jpg" />}
            />
            <SubjectCard
              title={subjectElectricity.title}
              content={subjectElectricity.content}
              image={<img src="img/home/subject/subject-electric.png" />}
              contextImage={<img src="img/home/areas/electronics.jpg" />}
            />
            <SubjectCard
              title={subjectOffice.title}
              content={subjectOffice.content}
              image={<img src="img/home/subject/subject-office.png" />}
              contextImage={<img src="img/home/areas/office.jpg" />}
            />
          </div>
          <div className={styles.subjectsCta}>
            <button>Ver lista de cursos</button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        mission={frontmatter.mission}
        vision={frontmatter.vision}
        titleDescription={frontmatter.titleDescription}
        academicOffer={frontmatter.academicOffer}
        subjectWebDesign={frontmatter.subjectWebDesign}
        subjectBeauty={frontmatter.subjectBeauty}
        subjectElectricity={frontmatter.subjectElectricity}
        subjectOffice={frontmatter.subjectOffice}
      />
    </Layout>
  );
};

export default IndexPage;

// import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

// export const IndexPageTemplate = ({
//   image,
//   title,
//   heading,
//   subheading,
//   mainpitch,
//   description,
//   intro,
// }) => (
//   <div>
//     <div
//       className="full-width-image margin-top-0"
//       style={{
//         backgroundImage: `url(${
//           !!image.childImageSharp ? image.childImageSharp.fluid.src : image
//         })`,
//         backgroundPosition: `top left`,
//         backgroundAttachment: `fixed`,
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           height: '150px',
//           lineHeight: '1',
//           justifyContent: 'space-around',
//           alignItems: 'left',
//           flexDirection: 'column',
//         }}
//       >
//         <h1
//           className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
//           style={{
//             boxShadow:
//               'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
//             backgroundColor: 'rgb(255, 68, 0)',
//             color: 'white',
//             lineHeight: '1',
//             padding: '0.25em',
//           }}
//         >
//           {title}
//         </h1>
//         <h3
//           className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
//           style={{
//             boxShadow:
//               'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
//             backgroundColor: 'rgb(255, 68, 0)',
//             color: 'white',
//             lineHeight: '1',
//             padding: '0.25em',
//           }}
//         >
//           {subheading}
//         </h3>
//       </div>
//     </div>
//     <section className="section section--gradient">
//       <div className="container">
//         <div className="section">
//           <div className="columns">
//             <div className="column is-10 is-offset-1">
//               <div className="content">
//                 <div className="content">
//                   <div className="tile">
//                     <h1 className="title">{mainpitch.title}</h1>
//                   </div>
//                   <div className="tile">
//                     <h3 className="subtitle">{mainpitch.description}</h3>
//                   </div>
//                 </div>
//                 <div className="columns">
//                   <div className="column is-12">
//                     <h3 className="has-text-weight-semibold is-size-2">
//                       {heading}
//                     </h3>
//                     <p>{description}</p>
//                   </div>
//                 </div>
//                 <Features gridItems={intro.blurbs} />
//                 <div className="columns">
//                   <div className="column is-12 has-text-centered">
//                     <Link className="btn" to="/products">
//                       See all products
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="column is-12">
//                   <h3 className="has-text-weight-semibold is-size-2">
//                     Latest stories
//                   </h3>
//                   <BlogRoll />
//                   <div className="column is-12 has-text-centered">
//                     <Link className="btn" to="/blog">
//                       Read more
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
// )

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// }

// const IndexPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark

//   return (
//     <Layout>
//       <IndexPageTemplate
//         image={frontmatter.image}
//         title={frontmatter.title}
//         heading={frontmatter.heading}
//         subheading={frontmatter.subheading}
//         mainpitch={frontmatter.mainpitch}
//         description={frontmatter.description}
//         intro={frontmatter.intro}
//       />
//     </Layout>
//   )
// }

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        titleDescription
        mission {
          title
          content
        }
        vision {
          title
          content
        }
        academicOffer {
          title
          content
        }
        subjectWebDesign {
          title
          content
        }
        subjectBeauty {
          title
          content
        }
        subjectElectricity {
          title
          content
        }
        subjectOffice {
          title
          content
        }
      }
    }
  }
`;
