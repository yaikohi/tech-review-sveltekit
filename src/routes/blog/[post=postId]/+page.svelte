<script lang="ts">
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
	let { singlePost } = data;
</script>

<div class="flex flex-col">
	<div class="p-4 bg-slate-700">
		<details>
			<summary>the singular blogpost</summary>
			<h1 class="text-4xl">{singlePost.title}</h1>
			<p class="m-2">{singlePost.content}</p>
		</details>
	</div>

	<details class="p-4 bg-slate-800">
		<summary> All the data; this includes data from the parents' +layout.server.ts. </summary>
		<pre>{JSON.stringify(data, null, 2)}</pre>
	</details>
</div>
