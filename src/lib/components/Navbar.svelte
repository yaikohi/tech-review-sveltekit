<script lang="ts">
    export let links: {
        name: string,
        route: string,
    }[]
</script>

<ul class="flex gap-4 bg-slate-800 p-2 rounded-t-xl capitalize">
    {#each links as {name, route} }
    <li class="p-2">
		<a href={route}> {name} </a>
	</li>    
    {/each}
</ul>
