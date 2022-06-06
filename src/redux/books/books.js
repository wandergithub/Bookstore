// Actions
const ADD_BOOK   = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
export default function booksreducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, addBook(action.title, action.author, action.id)]
    case REMOVE_BOOK:
      return [...state, removeBook(action.id)]
    default: return state;
  }
}

// Action Creators
export function addBook(title, author, id) {
  return { 
    type: ADD_BOOK,
    title:title,
    author:author,
    id:id
   };
}

export function removeBook(id) {
  return { 
    type: REMOVE_BOOK,
    id:id  
  };
}