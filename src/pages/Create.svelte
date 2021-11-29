<!-- Create a new contact -->
<script>
    import { people, was_updated } from "../stores";
    export let countries;
    export let page = 'add';

    let person;
    let firstname;
    let lastname;
    let phone;

    let address_1;
    let city;
    let zip;
    let state;
    let country;

    let uploaded;
    let person_img = '';

    function addPerson() {
        person = {
            firstname: firstname,
            lastname: lastname,
            address: {
                address_1: address_1,
                city: city,
                state: state,
                zip: zip,
                country: country
            },
            phone: phone,
            person_img: person_img
        }

        people.update((people) => {
            people = [...people, person];
            return people;
        })

        $was_updated = true;
        page = 'home';
    }

    function uploadImg(e) {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            person_img = e.target.result
        };
    }
</script>

<form id="createPerson" class="w-full max-w-lg" on:submit|preventDefault={addPerson}>
    <!-- Maybe add an "Upload Photo" field? -->
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
            <label class="field_label" for="person_pic">Upload Image</label>
            {#if person_img}
                <img class="avatar mx-auto" src="{person_img}" alt="d" />
            {:else}
                <img class="avatar mx-auto" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
            {/if}
            <div id="person_pic" class="align-center text-center p-3.5 hover:bg-red-400 bg-blue-500 text-white h-12" on:click={()=>{uploaded.click();}}>Choose Image</div>
            <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>uploadImg(e)} bind:this={uploaded} >
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="field_label" for="firstname">
                First Name
            </label>
            <input type="text" class="regular_field" id="firstname" name="firstname" bind:value={firstname} placeholder="First Name" required/>
            <p id="fn_required" class="text-red-500 text-xs italic" hidden>Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
            <label class="field_label" for="lastname">
                Last Name
            </label>
            <input type="text" class="regular_field" id="lastname" name="lastname" bind:value={lastname} placeholder="Last Name" required/>
            <p id="ln_required" class="text-red-500 text-xs italic" hidden>Please fill out this field.</p>
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full mb-3 px-3">
            <label class="field_label" for="address_1">Address</label>
            <input class="regular_field" type="text" id="address_1" bind:value={address_1} placeholder="Address 1"/>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-3">
            <label class="field_label" for="country">City</label>
            <input class="regular_field" type="text" id="city" bind:value={city} placeholder="City"/>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-3">
            <label class="field_label" for="state">State</label>
            <input class="regular_field" type="text" id="state" bind:value={state} placeholder="State"/>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-3">
            <label class="field_label" for="country">ZIP Code</label>
            <input class="regular_field" type="text" id="zip" bind:value={zip} placeholder="ZIP Code"/>
        </div>
        <div class="w-full mb-3 px-3">
            <label class="field_label" for="country">Country</label>
            <select class="dropdown_field" id="country" bind:value={country}>
                <option value="None">Please Select</option>
                {#each countries as country}
                    <option value={country}>{country}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full mb-3 px-3">
            <label class="field_label" for="phone">Phone Number</label>
            <input class="regular_field" type="tel" id="phone" bind:value={phone} placeholder="Phone Number"/>
        </div>
    </div>
    <button type="submit" class="form_button">Save</button>
</form>