import type { LayoutServerLoad } from './$types';

export const load = (async ({ params, parent }) => {
	const productId = params.productId.toString();

	const { products } = await parent();

	const product = products.filter((product: { id: number }) => product.id.toString() === productId);

	return { singleProduct: product[0] };
}) satisfies LayoutServerLoad;
