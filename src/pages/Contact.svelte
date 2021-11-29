<!-- Show selected contact -->
<script>
    export let page = 'contact';
    export let selectedContact;
</script>

<!--<div on:click={() => (page = 'home')}>-->
<!--    Click to go back to home-->
<!--</div>-->

<div>
    <div>
        {#if selectedContact.person_img !== ''}
            <img class="avatar mx-auto" src="{selectedContact.person_img}" alt="d" />
        {:else}
            <img class="avatar mx-auto flex flex-nowrap" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
        {/if}
    </div>
    <div class="mb-4">
        <label class="field_label">Name</label>
        {selectedContact.firstname} {selectedContact.lastname}
    </div>
    <div class="mb-4">
        <label class="field_label">Address</label>
        {#if selectedContact !== undefined}
            {selectedContact.address.address_1}, {selectedContact.address.city}, {selectedContact.address.state},
            {selectedContact.address.zip}, {selectedContact.address.country}
        {/if}
    </div>
    <div class="mb-4">
        <label class="field_label">Phone Number</label>
        {selectedContact.phone}
    </div>
</div>