import axios from 'axios';
// Actions
const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';
const RETRIEVED_BOOKS = 'RETRIEVED_BOOKS';
const RETRIEVE_FAILED = 'RETRIEV_FAILED';
const RETRIEV = 'RETRIEV';
// Action Creators
export function addBook(title, author, id, appId) {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
  return (dispatch) => (
    axios({
      method: 'POST',
      url,
      data: {
        item_id: id,
        title,
        author,
        category: 'Fiction3',
      },
    })
      .then(
        () => dispatch({
          type: ADDED_BOOK, title, author, id,
        }),
        (err) => dispatch({ type: RETRIEVE_FAILED, err }),
      )
  );
}

export function removeBook(id, appId) {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${id}`;
  return (dispatch) => axios({
    method: 'DELETE',
    url,
    data: {
      item_id: id,
    },
  })
    .then(
      () => dispatch({ type: REMOVED_BOOK, id }),
      (err) => dispatch({ type: RETRIEVE_FAILED, err }),
    );
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
      return Object.entries(action.books).map((a) => Object.assign({}, ...a[1], { id: a[0] }));
    default: return state;
  }
}
