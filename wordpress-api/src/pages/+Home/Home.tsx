import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/postsActions";
import { State } from "../../redux/reducers/postReducer";
import { Container, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { ArticlesList } from "components";

export interface HomeProps {}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	button: {
		display: "block",
		margin: "1rem auto",
	},
	paging: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "2rem auto",
	},
}));

const Home: React.SFC<HomeProps> = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const postsStore = useSelector((state: State) => state.posts);
	const [page, setPage] = useState(1);
	const offset = 15;
	const { loading, posts } = postsStore;
	const totalPages = Math.ceil(posts?.found / offset);

	useEffect(() => {
		dispatch(getPosts(offset, page));
	}, [dispatch, page]);

	const handleChange = (e: any, value: any) => setPage(value);

	return (
		<div className={classes.root}>
			<Container maxWidth='lg'>
				{loading && <CircularProgress color='secondary' size='3rem' />}
				{posts !== null && <ArticlesList posts={posts.posts} />}

				<Container className={classes.paging}>
					<Pagination
						page={page}
						onChange={handleChange}
						count={totalPages}
						boundaryCount={2}
						siblingCount={0}
						color='secondary'
					/>
				</Container>
			</Container>
		</div>
	);
};

export default Home;
