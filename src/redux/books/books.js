import axios from 'axios';
// Actions
const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';
const RETRIEVED_BOOKS = 'RETRIEVED_BOOKS';
const RETRIEVE_FAILED = 'RETRIEV_FAILED';
const RETRIEV = 'RETRIEV';
// Action Creators
export function addBook(title, author, id) {
  return {
    type: ADDED_BOOK,
    title,
    author,
    id,
  };
}

export function removeBook(id) {
  return {
    type: REMOVED_BOOK,
    id,
  };
}

export function retrieveBooks(id) {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`;
  return (dispatch) => {
    dispatch({ type: RETRIEV });
    return (
      axios({
        method: 'GET',
        url,
      })
        .then(
          (books) => dispatch({ type: RETRIEVED_BOOKS, books: books.data }),
          (err) => dispatch({ type: RETRIEVE_FAILED, err }),
        )
    );
  };
}

// Reducer
export default function booksreducer(state = [], action = {}) {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, { title: action.title, author: action.author, id: action.id }];
    case REMOVED_BOOK:
      return state.filter((book) => book.id !== action.id);
    case RETRIEVED_BOOKS:
      return Object.values(action.books).map((arr) => arr[0]);
    default: return state;
  }
}
