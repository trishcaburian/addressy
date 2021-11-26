<script>
	import Home from "./pages/Home.svelte";
	import Create from "./pages/Create.svelte";

	import Modal from "./pages/mods/Modal.svelte";
	import { modal } from "./stores";

	export let countries;

	let menu = ['home', 'add'];
	let selected = 'home';

	function getPage(page_name) {
		selected = page_name;
	}
</script>

<main>
	<div>
		<!-- SIDEBAR -->
		<nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 text-white">
			<span class="font-bold text-xl">Address Book</span>
			<div class="w-full block flex-grow px-4 sm:flex sm:items-center sm:w-auto">
				<div class="sidebar" on:click={() => getPage('home')}> Home </div>
				<div class="sidebar" on:click={() => getPage('add')}> Add </div>
			</div>
		</nav>

		<!-- CONTENT -->
		<div class="p-5 flex justify-center flex-grow">
			<Modal show={$modal}>
				{#if selected === 'home'}
					<Home/>
				{:else if selected === 'add'}
					<Create countries={countries} bind:page={selected}/>
				{/if}
			</Modal>
		</div>
	</div>
</main>