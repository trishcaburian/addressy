<!-- Show list of contacts -->
<script>
    import { people } from "../stores";

    let search_text = '';
    // let filteredPeople = $people;
    $: filteredPeople = search_text ?
    $people.filter(person => {
        const first_name = person.firstname;
        const last_name = person.lastname;

        return first_name.toLowerCase().includes(search_text.toLowerCase()) || last_name.toLowerCase().includes(search_text.toLowerCase()) ;
    }) : $people;
</script>

<div class="md:w-3/4">
    <div class="w-full sticky top-0 bg-white place-items-center">
        <div class="p-5">
            <input type="text" class="regular_field w-full" bind:value={search_text} placeholder="Search"/>
        </div>
    </div>
    <div class="mt-1">
        {#each filteredPeople as person}
            <hr class="w-full">
            <div class="w-full block flex-grow px-4 sm:flex sm:items-center sm:w-auto">
                {#if person.person_img !== ''}
                    <img class="avatar_mini" src="{person.person_img}" alt="d" />
                {:else}
                    <img class="avatar_mini flex flex-nowrap" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
                {/if}
                <div class="font-bold text-xl m-5">
                    {person.firstname} {person.lastname}
                </div>
                <div class="object-right text-sm">
                    {person.phone}
                </div>
            </div>
        {/each}
    </div>
</div>