import React from "react";
import { Separator } from "../Separator";

import * as styles from "./faqQuestion.module.scss";

export const FaqQuestion = ({ question, answer }) => {
	return (
		<div className={styles.faq}>
			<strong>{question}</strong>
			<Separator />
			<p>{answer}</p>
		</div>
	);
};
