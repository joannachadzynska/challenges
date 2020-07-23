import { createStyles, TableCell, Theme, withStyles } from "@material-ui/core";

export const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		body: {
			fontSize: 14,
		},
	})
)(TableCell);
