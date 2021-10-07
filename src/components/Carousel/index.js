import React from "react";
import Slider from "react-slick";
import { v4 as uuid } from "uuid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
	infinite: true,
	speed: 500,
	arrows: false,
	accessibility: true,
	pauseOnHover: true,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
};

const Carousel = ({ images }) => {
	return (
		<Slider {...settings}>
			{images.map((image) => (
				<div key={uuid()}>{image}</div>
			))}
		</Slider>
	);
};

export default Carousel;
