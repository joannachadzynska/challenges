import * as React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { Post } from "../../redux/types/postTypes";
import { useSelector } from "react-redux";
import Article from "../+Article";

const ArticlesList = () => {
	const postsStore = useSelector((state: any) => state.posts);
	const { posts } = postsStore;

	const loading = posts === null ? true : false;

	return (
		<Grid container spacing={3}>
			{loading ? (
				<CircularProgress />
			) : (
				posts?.posts.map((post: Post) => <Article key={post.ID} post={post} />)
			)}
		</Grid>
	);
};

export default ArticlesList;
