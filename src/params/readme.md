# Param matcher functions
go here.

## Example
*matches all posts from the slug param if it's equal to 1, 2, 3, or 4.*

`/params/postId.ts`

```ts
import type { ParamMatcher } from '@svelte/kit';

export const match = ((param) => {
    return [1,2,3,4].includes(param)
}) satisfies ParamMatcher;

```