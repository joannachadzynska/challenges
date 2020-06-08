import { PostRequest } from "../types/postTypes";
import { fetchPosts } from "providers/postProvider";

// Define all your actions here
export enum PostsActions {
	POSTS_ACTION_GET_START = "[posts] POSTS GET START",
	POSTS_ACTION_GET_SUCCESS = "[posts] POSTS GET SUCCESS",
	POSTS_ACTION_GET_FAILURE = "[posts] POSTS GET FAILURE",
}

interface PostsGetStart {
	type: PostsActions.POSTS_ACTION_GET_START;
}

interface PostsGetSuccess {
	type: PostsActions.POSTS_ACTION_GET_SUCCESS;
	payload: PostRequest;
}

interface PostsGetFailure {
	type: PostsActions.POSTS_ACTION_GET_FAILURE;
}

export type PostsActionsTypes =
	| PostsGetSuccess
	| PostsGetStart
	| PostsGetFailure;

const fetchPostsStart = () => ({
	type: PostsActions.POSTS_ACTION_GET_START,
});

const fetchPostsSuccess = (payload: PostRequest): PostsActionsTypes => ({
	type: PostsActions.POSTS_ACTION_GET_SUCCESS,
	payload,
});

const fetchPostsFailure = () => ({
	type: PostsActions.POSTS_ACTION_GET_FAILURE,
});

export const getPosts = (number: number, page: number) => async (
	dispatch: any
) => {
	dispatch(fetchPostsStart());
	try {
		const resp = await fetchPosts(number, page);
		let posts = resp;
		dispatch(fetchPostsSuccess(posts));

		return posts;
	} catch (error) {
		dispatch(fetchPostsFailure);
	}
};
