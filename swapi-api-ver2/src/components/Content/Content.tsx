import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCharactersFromServer } from "../../actions/charactersActions";
import { default as bemCssModules } from "bem-css-modules";

import { default as ContentStyles } from "./Content.module.scss";
import Routing from "../Routes";

const style = bemCssModules(ContentStyles);

export const Content: React.FC = () => {
	const dispatch = useDispatch();

	const fetchData = useCallback(() => {
		dispatch(getCharactersFromServer());
	}, [dispatch]);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className={style()}>
			{/* <Route component={Table} path='/' /> */}
			<Routing />
		</section>
	);
};
