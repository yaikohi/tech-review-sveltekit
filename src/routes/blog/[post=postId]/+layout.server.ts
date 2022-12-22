import type { LayoutServerLoad } from './$types';

export const load = (async ({ params, parent }) => {
	const postId = params.post.toString();

	console.log(postId);
	const { posts } = await parent();

	const post = posts.filter((post) => post.id === postId);
	console.log(post[0]);

	return { singlePost: post[0] };
}) satisfies LayoutServerLoad;
