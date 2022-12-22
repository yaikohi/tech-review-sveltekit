import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string | number) => {
	return ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(param.toString());
}) satisfies ParamMatcher;
