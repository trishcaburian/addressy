<!-- Show list of contacts -->
<script>
    import { people } from "../stores";
    console.log(people);
</script>

<div>
    {#each $people as person}
        {person.firstname}<br>
    {/each}
</div>