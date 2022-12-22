import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	const pokemonName = params.pokemonName;
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
	const res = await fetch(url);
	const data = await res.json();

	return { data };
};
