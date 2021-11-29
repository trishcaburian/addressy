<script>
	import { fade } from 'svelte/transition';
	import Home from "./pages/Home.svelte";
	import Create from "./pages/Create.svelte";

	import Modal from "./pages/mods/Modal.svelte";
	import { modal } from "./stores";
	import Contact from "./pages/Contact.svelte";

	export let countries;

	let menu = ['home', 'add'];
	let selected = 'home';
	let selectedContact;

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
					<div class="md:w-3/4 bg-white" in:fade>
						<Home bind:page={selected} bind:selectedContact={selectedContact}/>
					</div>
				{:else if selected === 'add'}
					<div class="w-full max-w-lg shadow-lg p-3.5 bg-white" in:fade>
						<Create countries={countries} bind:page={selected}/>
					</div>
				{:else if selected === 'contact'}
					<div class="w-full max-w-lg shadow-lg p-3.5 bg-white" in:fade>
						<Contact bind:page={selected} selectedContact={selectedContact}/>
					</div>
				{/if}
			</Modal>
		</div>
	</div>
</main>