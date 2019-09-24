import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import EditExpensePage from '../components/EditExpensePage';

const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
}= {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,
                action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }

            });
        default:
            return state;
    }
};

const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = (text = "amount") => ({
    type: 'SORT_BY',
    text
});

const sortByDate = (text = "date") => ({
    type: 'SORT_BY',
    text
});

const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});

const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.text
            } 
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
);

store.subscribe(() =>{
    console.log(store.getState());
});

// const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
// const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));



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