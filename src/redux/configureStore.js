import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import booksreducer from './books/books';
import categoriesreducer from './categories/categories';

const rootReducer = combineReducers({ books: booksreducer, categories: categoriesreducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
