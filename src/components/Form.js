import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [book, setBook] = useState({});
  const dispatch = useDispatch();
  const handleInput = () => {
    const form = document.getElementById('form');
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const id = uuidv4();
    setBook({ title, author, id });
  };

  return (
    <div>
      <form id="form">
        <h2>Add New Book</h2>
        <input placeholder="Book Title" type="text" name="title" onChange={handleInput} />
        <input placeholder="Book Author" type="text" name="author" onChange={handleInput} />
        <button type="button" onClick={() => dispatch(addBook(book.title, book.author, book.id, JSON.parse(localStorage.getItem('appId'))))}>ADD Book</button>
      </form>
    </div>
  );
};

export default Form;
