import { PostRequest } from "../types/postTypes";
import { PostsActionsTypes, PostsActions } from "../actions/postsActions";

export interface State {
	loading: boolean;
	error: boolean;
	posts: PostRequest | any;
}

const initState = {
	loading: false,
	posts: null,
	error: false,
};

const postReducer = (state = initState, action: PostsActionsTypes): State => {
	switch (action.type) {
		case PostsActions.POSTS_ACTION_GET_START:
			return {
				...state,
				loading: true,
				error: false,
			};

		case PostsActions.POSTS_ACTION_GET_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				posts: action.payload,
			};

		case PostsActions.POSTS_ACTION_GET_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
			};

		default:
			return state;
	}
};

export default postReducer;
