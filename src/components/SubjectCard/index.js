import React from "react";

import * as styles from "./subjectCard.module.scss";

export const SubjectCard = ({ image, title, content, contextImage }) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				{image}
				<h3>{title}</h3>
			</div>
			{contextImage}
			<p>{content}</p>
		</div>
	);
};
