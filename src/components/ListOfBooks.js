import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const ListOfBooks = (props) => {
  let { bookList } = props;
  bookList = bookList.map((book) => {
    if (book.id === undefined) {
      const newid = uuidv4();
      return { ...book, id: newid };
    }
    return book;
  });
  return (
    <div>
      <ul className="list side-m">
        {
          bookList.map((book) => (
            <li key={book.id}>
              <Book title={book.title} author={book.author} id={book.id} />
            </li>
          ))
        }
      </ul>
      <div className="line side-m m-top" />
      <Form />
    </div>
  );
};

ListOfBooks.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
  })),
};

ListOfBooks.defaultProps = {
  bookList: [
    {
      id: '0',
      author: 'none',
      title: 'none',
    },
  ],
};

export default ListOfBooks;
