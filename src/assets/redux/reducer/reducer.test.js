import React from 'react';
import { setCars, setLoaded } from '../action/cars';
import { setSortBy } from '../action/filter';
import filter from './filter';
import cars from './cars';
import { setSearch } from '../action/search';
import search from './search';


describe('redusers work correctly', () => {


it('filter', () => {
    let action = setSortBy('desc');
    let state = {
        order: 'asc'
    }

    let newState = filter(state, action);

    expect(newState.order).toBe('desc');
})

it('cars', () => {
    let carsItem = [
        {
            "id": "2f311014-06fe-47ae-848d-ca9e8ff3eda8",
            "model_name": "Новый Touareg",
            "price": 5541000,
            "features": [
                "Литые диски",
                "Подогрев лобового стекла",
                "Подогрев руля",
                "Подогрев зеркал"
            ],
            "dealer": {
                "name": "ТЦ Кунцево",
                "city": "Москва",
                "address": "ул. Горбунова, 29",
                "url": "http://www.volkswagen-kuntsevo.ru"
            },
            "images": [
                "https://183024.selcdn.ru/vwgr_available_cars/volkswagen/touareg_cr/touareg_cr/touareg_cr_status/suv/2T2T/1.png"
            ]
        },
        {
            "id": "f96dadd7-c49a-4c57-bcce-b4b951c4f08c",
            "model_name": "Новый Touareg",
            "kit_name": "R-Line",
            "price": 5336000,
            "features": [
                "Система Front Assist",
                "Система Light Assist",
                "Подогрев передних сидений",
                "Подогрев задних сидений",
                "Подогрев лобового стекла",
                "Подогрев руля",
                "Подогрев зеркал"
            ],
            "dealer": {
                "name": "ТЦ Кунцево",
                "city": "Москва",
                "address": "ул. Горбунова, 29",
                "url": "http://www.volkswagen-kuntsevo.ru "
            },
            "images": [
                "https://183024.selcdn.ru/vwgr_available_cars/volkswagen/touareg_cr/touareg_cr/touareg_cr_rline/suv/2T2T/1.png"
            ]
        }
    ]
   let action = setCars(carsItem);
   let state = {
    items: [],
    isLoaded: false
   };
   let newState = cars(state, action);
   expect(newState.isLoaded).toBe(true); 
})

it('serches', () => {
    let action = setSearch('text');
    let state = {
        value: ''
    }

    let newState = search(state, action);

    expect(newState.value).toBe('text');
})

})



