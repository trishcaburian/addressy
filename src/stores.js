import { writable } from "svelte/store";

export const modal = writable();
export const was_updated = writable(false);
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
        phone: '123456789',
        person_img: ''
    },
    {
        firstname: 'new',
        lastname: 'person',
        address: {
            address_1: '123 street',
            city: 'city',
            state: 'state',
            zip: '1321',
            country: 'country'
        },
        phone: '123456789',
        person_img: ''
    },
    {
        firstname: 'cookiedawg',
        lastname: '69',
        address: {
            address_1: '123 street',
            city: 'city',
            state: 'state',
            zip: '1321',
            country: 'country'
        },
        phone: '123456789',
        person_img: ''
    },
    {
        firstname: 'morningstar',
        lastname: 'sinclair',
        address: {
            address_1: '123 street',
            city: 'city',
            state: 'state',
            zip: '1321',
            country: 'country'
        },
        phone: '123456789',
        person_img: ''
    },
    {
        firstname: 'computer',
        lastname: 'jym',
        address: {
            address_1: '123 street',
            city: 'city',
            state: 'state',
            zip: '1321',
            country: 'country'
        },
        phone: '123456789',
        person_img: ''
    },
    {
        firstname: 'craig',
        lastname: 'digsby',
        address: {
            address_1: '123 street',
            city: 'city',
            state: 'state',
            zip: '1321',
            country: 'country'
        },
        phone: '123456789',
        person_img: ''
    }
]);