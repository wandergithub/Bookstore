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
const Books = [
  {
    author: 'Jhon Snow',
    title: 'Capuchino asuelto',
    id: '0',
  },
  {
    author: 'Shekopsky',
    title: 'Las hadas',
    id: '1',
  },
];
export default function booksreducer(state = Books, action = {}) {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, addBook(action.title, action.author, action.id)];
    case REMOVED_BOOK:
      return [...state, removeBook(action.id)];
    default: return state;
  }
}
