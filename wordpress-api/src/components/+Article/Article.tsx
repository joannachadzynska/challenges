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
import Skeleton from "@material-ui/lab/Skeleton";
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
	link: {
		fontWeight: 700,
		color: "#fff",
	},
	button: {
		backgroundColor: "#e40101",
	},
}));

const Article: React.SFC<ArticleProps> = ({
	post: { featured_image, excerpt, title, author, date, URL },
}) => {
	const classes = useStyles();
	const loading =
		!featured_image || !excerpt || !title || !author || !date || !URL;
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						!author.avatar_URL ? (
							<Skeleton
								animation='wave'
								variant='circle'
								width={40}
								height={40}
							/>
						) : (
							<Avatar
								aria-label='recipe'
								alt={author.first_name}
								src={author.avatar_URL}
							/>
						)
					}
					subheader={
						loading ? (
							<Skeleton animation='wave' height={10} width='40%' />
						) : (
							new Date(date).toDateString()
						)
					}
					title={
						loading ? (
							<Skeleton animation='wave' height={10} width='100%' />
						) : (
							title
						)
					}
				/>

				{!featured_image ? (
					<Skeleton animation='wave' variant='rect' className={classes.media} />
				) : (
					<CardMedia
						className={classes.media}
						component='img'
						title={title}
						alt='title'
						loading='lazy'
						image={featured_image}
					/>
				)}

				<CardContent className={classes.content}>
					{loading ? (
						<React.Fragment>
							<Skeleton
								animation='wave'
								height={10}
								style={{ marginBottom: 6 }}
							/>
							<Skeleton animation='wave' height={10} width='80%' />
						</React.Fragment>
					) : (
						<Typography
							variant='body2'
							color='textSecondary'
							component='p'
							dangerouslySetInnerHTML={{ __html: excerpt }}
						/>
					)}
				</CardContent>

				<CardActions className={classes.actions}>
					{loading ? null : (
						<>
							<Button size='small' variant='contained' color='primary'>
								<Link color='inherit' href={URL}>
									Go To Article
								</Link>
							</Button>
							<Button
								size='small'
								variant='contained'
								className={classes.button}>
								<Link href={author.profile_URL} className={classes.link}>
									About Author
								</Link>
							</Button>
						</>
					)}
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Article;
