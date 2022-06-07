// Actions
const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';

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

// Reducer
export default function booksreducer(state = [], action = {}) {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, addBook(action.title, action.author, action.id)];
    case REMOVED_BOOK:
      return [...state, removeBook(action.id)];
    default: return state;
  }
}
