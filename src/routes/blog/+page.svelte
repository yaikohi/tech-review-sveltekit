<script lang="ts">
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<main class="m-8 bg-slate-800 p-8 rounded-xl">
	<div class="max-w-md mx-auto">
		<h1 class="text-4xl text-rose-500">Blog</h1>
		<h2 class="my-4 text-xl">
			Believe it or not, I didn't use any free public test API's for these blog pages, I actually
			wrote them myself.
		</h2>
	</div>
	<div class="indent-8 mt-20">
		<ul class="text-rose-100 flex flex-col gap-2">
			{#each data.posts as post}
				<li class="my-2 capitalize">
					<a class="flex flex-col text-xl hover:text-rose-600" href={`/blog/${post.id}`}>
						{post.id}: {post.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</main>
