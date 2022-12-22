<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: console.log(data.count);
</script>

<h1 class="mt-4 capitalize max-w-xs mx-auto text-4xl text-rose-500">
	progressive form enhancement
</h1>

<form
	method="POST"
	action="?/login"
	use:enhance
	class="flex flex-col gap-4 mx-auto max-w-sm my-8 rounded-xl"
>
	<div class="flex flex-col gap-2">
		<label class="flex justify-between max-w-[350px]">
			<span class="text-sm p-2">Email</span>
			<input class="bg-slate-700 px-2 py-1  max-w-[250px] rounded-xl" type="email" name="email" />
		</label>

		<label class="flex justify-between max-w-[350px]">
			<span class="text-sm p-2">Password</span>
			<input
				class="bg-slate-700 px-2 py-1  max-w-[250px] rounded-xl"
				type="password"
				name="password"
			/>
		</label>
	</div>

	<button
		class="py-3 px-2 bg-slate-400 mx-auto rounded-xl min-w-[150px] justify-center"
		type="submit">Login</button
	>
</form>
