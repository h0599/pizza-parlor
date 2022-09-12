import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PIZZA_LIST':
            return action.payload;
    }
    return state;
}

const orderInformation = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORDER_INFORMATION':
            return action.payload
    }
    return state;
}

const cart = (state = [], action) => {
    switch (action.type) {
        case 'SET_CART':
            console.log('cart payload is ', action.payload);
            return[...state, action.payload];
        case 'CLEAR_CART':
            return[]; 
    }
    return state;
}

const store = createStore(
    combineReducers({
        pizzaList,
        cart,
        orderInformation,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
