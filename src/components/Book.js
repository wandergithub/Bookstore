import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  return (
    <div>
      <p>{title}</p>
      <strong>by</strong>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBook(id, JSON.parse(localStorage.getItem('appId'))))}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  title: 'Not specified',
  author: 'Anonimous',
  id: 'noid',
};

export default Book;
