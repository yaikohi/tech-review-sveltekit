import type { LayoutServerLoad } from "../blog/$types";

export const load = (async () => {
	const url = 'https://api.escuelajs.co/api/v1/products';
	const res = await fetch(url);
	const products = await res.json();

    console.log(products[0])
	return { products };
}) satisfies LayoutServerLoad;
