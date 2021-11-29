<!-- Show list of contacts -->
<script>
    import { people, was_updated } from "../stores";
    import { onMount } from 'svelte';
    import { getContext } from 'svelte';
    import Popup from "./mods/Popup.svelte";

    export let page = 'home';
    export let selectedContact;

    let search_text = '';
    let filteredPeople;
    $: filteredPeople = search_text ?
    $people.filter(person => {
        const first_name = person.firstname;
        const last_name = person.lastname;

        return first_name.toLowerCase().startsWith(search_text.toLowerCase()) || last_name.toLowerCase().startsWith(search_text.toLowerCase()) ;
    }) : $people;

    const { open } = getContext('simple-modal');

    const showPopup = () => {
        open(Popup, { message: "✅ Added new contact!" });
    };

    onMount(() => {
       if ($was_updated) {
           showPopup();
           $was_updated = false;
       }
    });
</script>

<div>
    <div class="w-full sticky top-0 bg-white place-items-center">
        <div class="p-5">
            <input type="text" class="regular_field w-full" bind:value={search_text} placeholder="Search"/>
        </div>
    </div>
    <div class="mt-1">
        {#each filteredPeople as person}
            <hr class="w-full">
            <div class="w-full block flex-grow px-4 sm:flex sm:items-center sm:w-auto" on:click={() => {
                    page = 'contact';
                    selectedContact = person;
                }}>
                {#if person.person_img !== ''}
                    <img class="avatar_mini" src="{person.person_img}" alt="d" />
                {:else}
                    <img class="avatar_mini flex flex-nowrap" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
                {/if}
                <div class="font-bold text-xl m-5" on:click>
                    {person.firstname} {person.lastname}
                </div>
                <div class="object-right text-sm">
                    {person.phone}
                </div>
            </div>
        {/each}
    </div>
</div>