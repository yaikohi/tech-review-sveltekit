<script lang="ts">
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<main class="m-8 bg-slate-800 p-8 rounded-xl">
	<h1 class="text-rose-500 text-4xl">Shop</h1>
	<h2 class="my-4">
		I got this test data from
		<a
			class="underline text-rose-500 hover:text-rose-400"
			href="https://api.escuelajs.co/api/v1/products">here</a
		>
	</h2>
	<ul
		class="p-2 flex flex-col gap-4 flex-wrap max-h-[800px] overflow-auto justify-center align-middle "
	>
		{#each data.products as product}
			<li class="p-8 bg-slate-900 hover:bg-slate-800 rounded-3xl">
				<a class="text-rose-300 hover:cursor-pointer" href={`/shop/${product.id}`}>
					<div class="px-8 my-2 rounded-lg">
						<img
							class="max-h-[200px] max-w-auto mx-auto rounded-2xl"
							src={product.images[0]}
							alt={product.name}
						/>
					</div>
					<div class="flex justify-between">
						<div>
							<p class="font-light">
								{product.title}
							</p>
							<p class="font-light italic text-slate-400">
								{product.category.name}
							</p>
						</div>
						<p class="font-bold">${product.price}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</main>
