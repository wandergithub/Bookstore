import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './style/form.css';

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
    <div className="side-m form">
      <p className="add-t">ADD NEW BOOK</p>
      <form id="form">
        <input className="input" placeholder="Book Title" type="text" name="title" onChange={handleInput} />
        <input className="input" placeholder="Book Author" type="text" name="author" onChange={handleInput} />
        <select className="input select" placeholder="Category">
          <option value="">Category</option>
          <option value="Action and Adventure">Action and Adventure</option>
          <option value="Classics">Classics</option>
          <option value="Comic Book">Comic Book</option>
          <option value="Detective and Mystery">Detective and Mystery</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        <button className="btn btn-u btn-add" type="button" onClick={() => dispatch(addBook(book.title, book.author, book.id, JSON.parse(localStorage.getItem('appId'))))}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
