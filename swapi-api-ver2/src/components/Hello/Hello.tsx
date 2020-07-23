import React from "react";
import { useSelector } from "react-redux";
import { default as bemCssModules } from "bem-css-modules";
import { RootState } from "../../reducers/rootReducer";
import { default as HelloStyles } from "./Hello.module.scss";

const style = bemCssModules(HelloStyles);

export const Hello: React.FC = () => {
	return (
		<article>
			<p>
				This boilerplate is for developers who will create React App with basic
				configuration. The boilerplate contain support for:
			</p>
			<ul></ul>
		</article>
	);
};
