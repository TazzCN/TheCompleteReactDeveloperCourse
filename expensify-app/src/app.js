import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

store.dispatch(addExpense({description: 'Water',}));
store.dispatch(addExpense({description: 'Gas',}));
store.dispatch(setTextFilter('Gas'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
       <AppRouter/>
    </Provider>
);


ReactDOM.render(jsx,document.getElementById('app'));