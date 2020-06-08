import * as React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { Post } from "../../redux/types/postTypes";
import Article from "../+Article";

export interface ArticlesListProps {
	posts: Post[];
}

const ArticlesList: React.SFC<ArticlesListProps> = ({ posts }) => {
	return (
		<Grid container spacing={3}>
			{!posts ? (
				<CircularProgress />
			) : (
				posts.map((post) => <Article key={post.ID} post={post} />)
			)}
		</Grid>
	);
};

export default ArticlesList;
