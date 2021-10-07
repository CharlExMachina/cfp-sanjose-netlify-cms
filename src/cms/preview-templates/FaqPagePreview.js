import React from "react";
import PropTypes from "prop-types";
import { FaqPageTemplate } from "../../templates/preguntas-frecuentes";

const FaqPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <FaqPageTemplate
        title={data.title}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

FaqPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FaqPagePreview;
