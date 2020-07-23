import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { default as bemCssModules } from "bem-css-modules";
import { RootState } from "../../reducers/rootReducer";

import { makeStyles } from "@material-ui/core/styles";

import {
	Paper,
	Table as MUITable,
	TableBody,
	TableContainer,
} from "@material-ui/core";
import TableHeader from "./TableHeader";
import TableRowLetter from "./TableRowLetter";
import TableRow from "./TableRow";

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export const Table: React.FC = () => {
	const classes = useStyles();
	const characters = useSelector((state: RootState) => state.characters);
	const tableData: JSX.Element[] = [];

	characters.forEach((keysCharacters, key) => {
		tableData.push(
			<Fragment key={key}>
				<TableRowLetter letter={key} />
				{keysCharacters.map((character) => (
					<TableRow key={character.name} {...character} />
				))}
			</Fragment>
		);
	});

	return (
		<TableContainer component={Paper}>
			<MUITable aria-label='customized table' className={classes.table}>
				<TableHeader />
				<TableBody>{tableData}</TableBody>
			</MUITable>
		</TableContainer>
	);
};
