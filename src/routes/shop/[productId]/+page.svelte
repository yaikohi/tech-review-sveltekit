<script lang="ts">
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
	let { singleProduct } = data;
</script>

<div class="flex flex-col">
	<div class="p-4">
		<!-- header -->
		<div class="my-8 p-4 max-w-xl mx-auto">
			<div class="flex justify-between">
				<h1 class="text-5xl font-bold max-w-[400px]">{singleProduct.title}</h1>
				<h2 class="text-slate-300 text-xl italic">{singleProduct.category.name}</h2>
			</div>
			<p class="mt-4 text-xl">{singleProduct.description}</p>
		</div>

		<div class="mx-auto max-w-lg">
			<!-- image -->
			<div class="mx-auto max-w-md">
				<h2 class="italic my-2">Beautiful images that are very related to the title.</h2>
				<div class="relative w-[400px] h-auto my-8">
					<div
						class="flex flex-wrap snap-mandatory snap-y max-h-[400px] overflow-auto  gap-2 w-auto"
					>
						{#each singleProduct.images as img}
							<img class="snap-center mx-auto rounded-xl" src={img} alt={singleProduct.title} />
						{/each}
					</div>
					<!-- <div class="bg-white h-[400px] w-screen absolute opacity-50 bottom-0 " /> -->
				</div>
			</div>

			<!-- description x10 -->
			<p class="indent-8 text-lg ">
				{singleProduct.description}
				{singleProduct.description}
				{singleProduct.description}
				{singleProduct.description}
				{singleProduct.description}
				{singleProduct.description}
			</p>

			<details class="italic mt-12">
				<summary>disclaimer</summary>
				<p>
					{singleProduct.description}
					{singleProduct.description}
					{singleProduct.description}
					{singleProduct.description}
				</p>
			</details>
		</div>
	</div>
</div>
