import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import Form from './Form';

const ListOfBooks = (props) => {
  const { bookList } = props;
  return (
    <div>
      <ul>
        {
          bookList.map((book) => (
            <li key={book.id}>
              <Book title={book.title} author={book.author} id={book.id} />
            </li>
          ))
        }
      </ul>
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
