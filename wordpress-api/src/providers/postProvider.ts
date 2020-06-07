import { request } from "helpers/axios";

import { PostRequest } from "redux/types/postTypes";

export const fetchPosts = async (
	number: number,
	page: number
): Promise<PostRequest> =>
	(await request.get(`/posts/?number=${number}&page=${page}`)).data;
