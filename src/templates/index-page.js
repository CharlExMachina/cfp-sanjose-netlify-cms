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
              callToActionRoute="/contact"
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
