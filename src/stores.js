import { writable } from "svelte/store";

export const people = writable([
    {
        firstname: 'default',
        lastname: 'person',
        address: {
            address_1: '123 street',
            city: 'city',
            state: 'state',
            zip: '1321',
            country: 'country'
        },
        phone: '123456789'
    }
]);