import { navigate } from "gatsby";
import React from "react";
import { Separator } from "../Separator";

import * as styles from "./infoCard.module.scss";

export const InfoCard = ({
	cardImage,
	title,
	content,
	callToActionTitle,
	callToActionRoute,
}) => {
	return (
		<div className={styles.card}>
			{cardImage}
			<h3>{title}</h3>
			<Separator />
			<p>{content}</p>
			<button onClick={() => navigate(callToActionRoute)}>
				{callToActionTitle}
			</button>
		</div>
	);
};
