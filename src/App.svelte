<script>
	import Home from "./pages/Home.svelte";
	import Create from "./pages/Create.svelte";
	import { people } from "./stores";

	export let countries;

	let menu = ['home', 'add'];
	let selected = 'add';

	function getPage(page_name) {
		selected = page_name;
	}
</script>

<div class="relative min-h-screen left-0 flex">
	<!-- SIDEBAR -->
	<div class="bg-gray-700 text-white w-72 p-3.5 space-y-4">
		<span class="text-3xl">Address Book</span>
		<nav class="space-y-2">
			<div class="sidebar" on:click={() => getPage('home')}> Home </div>
			<div class="sidebar" on:click={() => getPage('add')}> Add </div>
		</nav>
	</div>

	<!-- CONTENT -->
	<div class="p-5 flex justify-center flex-grow">
		{#if selected === 'home'}
			<Home></Home>
		{:else if selected === 'add'}
			<Create countries={countries}></Create>
		{/if}
	</div>
</div>

