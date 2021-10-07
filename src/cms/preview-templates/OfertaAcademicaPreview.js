import React from "react";
import PropTypes from "prop-types";
import { OfertaAcademicaTemplate } from "../../templates/oferta-academica";

const OfertaAcademicaPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <OfertaAcademicaTemplate
        title={data.title}
        titleDescription={data.titleDescription}
        freeCourses={data.freeCourses}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

OfertaAcademicaPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default OfertaAcademicaPreview;
