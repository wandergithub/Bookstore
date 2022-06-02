import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <p>{title}</p>
      <strong>by</strong>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: 'Not specified',
  author: 'Anonimous',
};

export default Book;
