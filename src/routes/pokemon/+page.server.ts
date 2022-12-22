import { shuffleArray } from '../../utils/shuffle-array';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=905';
	const res = await fetch(url);
	const pokemon = shuffleArray((await res.json()).results);

	return { pokemon };
}) satisfies PageServerLoad;
