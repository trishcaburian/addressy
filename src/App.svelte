<script>
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
					<Home bind:page={selected} bind:selectedContact={selectedContact}/>
				{:else if selected === 'add'}
					<Create countries={countries} bind:page={selected}/>
				{:else if selected === 'contact'}
					<Contact bind:page={selected} selectedContact={selectedContact}/>
				{/if}
			</Modal>
		</div>
	</div>
</main>