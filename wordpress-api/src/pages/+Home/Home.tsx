import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, loadMorePosts } from "../../redux/actions/postsActions";
import { State } from "../../redux/reducers/postReducer";
import { Post } from "../../redux/types/postTypes";
import { Container, Grid, CircularProgress, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Article } from "components";

export interface HomeProps {}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	button: {
		display: "block",
		margin: "1rem auto",
	},
}));

const Home: React.SFC<HomeProps> = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const postsStore = useSelector((state: State) => state.posts);
	const [page, setPage] = useState(2);
	const { loading, posts } = postsStore;

	useEffect(() => {
		dispatch(getPosts(6, 1));
	}, [dispatch]);

	const handleLoadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
		setPage(page + 1);
		// dispatch(getPosts(6, page));
		dispatch(loadMorePosts(6, page));
	};

	return (
		<div className={classes.root}>
			<Container maxWidth='lg'>
				<Grid container spacing={3}>
					{loading ? (
						<CircularProgress color='secondary' />
					) : (
						posts?.posts.map((post: Post) => (
							<Article key={post.ID} post={post} />
						))
					)}
				</Grid>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={handleLoadMore}>
					Load more
				</Button>
			</Container>
		</div>
	);
};

export default Home;
