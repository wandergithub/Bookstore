import { combineReducers, createStore } from 'react-redux';
import booksreducer from './books/books';
import categoriesreducer from './categories/categories';

const rootReducer = combineReducers({books:booksreducer, categories:categoriesreducer});
const store = createStore(rootReducer);
export default store;
