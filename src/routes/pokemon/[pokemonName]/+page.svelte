<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="my-8 p-12 flex flex-col bg-slate-700 mx-auto max-w-md rounded-2xl">
	<div class="flex">
		<img alt={`${data.data.name} front`} src={data.data.sprites.front_default} />
		<img alt={`${data.data.name} front shiny`} src={data.data.sprites.front_shiny} />
	</div>

	<div class="flex">
		<img alt={`${data.data.name} back`} src={data.data.sprites.back_default} />
		<img alt={`${data.data.name} back shiny`} src={data.data.sprites.back_shiny} />
	</div>
</div>
