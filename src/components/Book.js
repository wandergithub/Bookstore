import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import './style/book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id, category,
  } = props;
  return (
    <div className="book-container">
      <div className="book-description">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
      </div>
      <div>
        <button className="btn" type="button">Comments</button>
        <button className="btn side-bars" type="button" onClick={() => dispatch(removeBook(id, JSON.parse(localStorage.getItem('appId'))))}>Remove</button>
        <button className="btn edit" type="button">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  title: 'Not specified',
  author: 'Anonimous',
  id: 'noid',
  category: 'Action',
};

export default Book;
