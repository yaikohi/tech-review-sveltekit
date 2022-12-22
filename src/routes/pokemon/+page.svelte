<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<main class="m-8 bg-slate-800 p-8 rounded-xl">
	<h1 class="text-4xl text-rose-500">Pokemon</h1>
	<h2 class="text-xl italic">
		The numbers are not related to the pokemon but they were before I added a function that
		randomizes the contents of an array.
	</h2>
	<ul
		class="p-2 flex flex-col gap-4 flex-wrap max-h-[800px] overflow-auto justify-center align-middle"
	>
		{#each data.pokemon as pokeman, idx}
			<li class="">
				<a
					class="justify-between flex max-w-[500px] p-2 bg-slate-700 rounded-xl my-2 hover:bg-slate-100 text-rose-100 hover:text-rose-600"
					href={`/pokemon/${pokeman.name}`}
				>
					<p>
						{pokeman.name}
					</p>
					<p>
						#{idx + 1}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</main>
