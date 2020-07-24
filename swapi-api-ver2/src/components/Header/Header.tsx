import React from "react";
import { Link } from "react-router-dom";
import { default as bemCssModules } from "bem-css-modules";
import { default as HeaderStyles } from "./Header.module.scss";

const style = bemCssModules(HeaderStyles);

export const Header: React.FC = () => (
	<nav className={style()}>
		<ul className={style("list")}>
			<li className={style("element")}>
				<Link to='/characters'>Characters</Link>
			</li>
			<li className={style("element")}>
				<Link to='/films'>Films</Link>
			</li>
			<li className={style("element")}>
				<Link to='/starships'>Starships</Link>
			</li>
			<li className={style("element")}>
				<Link to='/vehicles'>Vehicles</Link>
			</li>
			<li className={style("element")}>
				<Link to='/species'>Species</Link>
			</li>
			<li className={style("element")}>
				<Link to='/planets'>Planets</Link>
			</li>
		</ul>
	</nav>
);
