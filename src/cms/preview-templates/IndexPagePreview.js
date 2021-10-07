import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        mission={data.mission}
        vision={data.vision}
        carouselImageOne={getAsset(data.carouselImageOne)}
        carouselImageTwo={getAsset(data.carouselImageTwo)}
        carouselImageThree={getAsset(data.carouselImageThree)}
        titleDescription={data.titleDescription}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
