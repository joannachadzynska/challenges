import React from "react";

import {
	Grid,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CardHeader,
	Avatar,
	Button,
	Typography,
	Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Post } from "../../redux/types/postTypes";

export interface ArticleProps {
	post: Post;
	key: number;
}

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexDirection: "column",
		maxWidth: 345,

		height: "100%",
	},
	content: {
		flexGrow: 1,
	},
	media: {
		height: 150,
	},
	actions: {
		justifyContent: "center",
		marginBottom: "1rem",
	},
}));

const Article: React.SFC<ArticleProps> = ({
	post: { featured_image, excerpt, title, author, date, URL },
}) => {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar
							aria-label='recipe'
							alt={author.first_name}
							src={author.avatar_URL}
						/>
					}
					subheader={new Date(date).toDateString()}
					title={title}
				/>

				<CardMedia
					className={classes.media}
					component='img'
					title={title}
					alt='title'
					image={featured_image}
				/>

				<CardContent className={classes.content}>
					<Typography
						variant='body2'
						color='textSecondary'
						component='p'
						dangerouslySetInnerHTML={{ __html: excerpt }}
					/>
				</CardContent>

				<CardActions className={classes.actions}>
					<Button size='small' variant='contained' color='primary'>
						<Link color='inherit' href={URL}>
							Go To Article
						</Link>
					</Button>
					<Button size='small' variant='contained' color='secondary'>
						<Link color='inherit' href={author.profile_URL}>
							About Author
						</Link>
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Article;
