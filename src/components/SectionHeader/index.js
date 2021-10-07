import React from "react";
import classNames from "classnames";
import { Separator } from "../Separator";

import * as styles from "./sectionHeader.module.scss";

export const SectionHeader = ({ header, content = "", large = false }) => {
	return (
		<div className={classNames(styles.header, large ? styles.large : "")}>
			<h2>{header}</h2>
			<Separator />
			{content && <p>{content}</p>}
		</div>
	);
};
