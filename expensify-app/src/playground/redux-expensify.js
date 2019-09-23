import {createStore, combineReducers } from 'redux';

const demoState = {
    expenses:[{
        id: 'sdijjafapsj',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 42000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};