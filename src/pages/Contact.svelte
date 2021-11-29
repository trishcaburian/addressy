<!-- Show selected contact -->
<script>
    export let page = 'contact';
    export let selectedContact;
</script>

<!--<div on:click={() => (page = 'home')}>-->
<!--    Click to go back to home-->
<!--</div>-->

<div class="w-full max-w-lg">
    <div>
        {#if selectedContact.person_img !== ''}
            <img class="avatar mx-auto" src="{selectedContact.person_img}" alt="d" />
        {:else}
            <img class="avatar mx-auto flex flex-nowrap" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
        {/if}
    </div>
    <div>
        <label>Name</label>
        {selectedContact.firstname} {selectedContact.lastname}
    </div>
    <div>
        <label>Address</label>
        {#if selectedContact !== undefined}
            {selectedContact.address.address_1}, {selectedContact.address.city}, {selectedContact.address.state},
            {selectedContact.address.zip}, {selectedContact.address.country}
        {/if}
    </div>
    <div>
        <label>Phone Number</label>
        {selectedContact.phone}
    </div>
</div>