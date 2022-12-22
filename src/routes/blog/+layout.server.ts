import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const posts = [
		{
			id: '1',
			title: 'exciting news',
			content: 'some content lol'
		},
		{
			id: '2',
			title: 'hehe',
			content: 'some content lol'
		},
		{
			id: '3',
			title: 'another one',
			content: 'some content lol'
		},
		{
			id: '4',
			title: 'why do we think',
			content: 'some content lol'
		},
		{
			id: '5',
			title: 'what does it mean to exist',
			content: 'some content lol'
		},
		{
			id: '6',
			title: 'existentialism 101 ',
			content: 'some content lol'
		},
		{
			id: '7',
			title: 'how to mint your first nft',
			content: 'some content lol'
		},
		{
			id: '8',
			title: 'hehe',
			content: 'some content lol'
		},
		{
			id: '9',
			title: 'I am sorry (twitlonger)',
			content: 'some content and a link to a tweet or smth lol'
		}
	]
	return {
		posts: posts
	};
}) satisfies LayoutServerLoad;
